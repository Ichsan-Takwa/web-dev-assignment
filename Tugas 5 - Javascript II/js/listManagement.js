const listAddBtn = document.getElementById("listAddBtn");
const listItem = document.getElementById("list");
const inputField = document.getElementById("inputField");
let database = new Map(); 

listAddBtn.addEventListener("click",() => {
    let itemName = inputField.value.toUpperCase();
    if(itemName.replaceAll(" ","") == ""){
        alert("Masukkan nama barang!!")
    }else if(database.has(itemName)){
        node = database.get(itemName);
        node.getElementsByClassName("count")[1].textContent = Number(node.getElementsByClassName("count")[1].textContent) +1; 
    }else{
        let node = document.createElement("li");
        let textNode = document.createTextNode(inputField.value);
        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn-list-delete");
        btnDelete.textContent = "hapus";
        node.append(textNode,btnDelete);
        if (window.location.pathname != "/ToDoList.html") {
            
            let count = document.createElement("div");
            let add = document.createElement("button");
            add.textContent = "+"
            add.classList.add("count");
            add.addEventListener("click",() => {
                count.textContent = Number(count.textContent)+1;
            });
            let less = document.createElement("button");
            less.textContent = " - "
            less.classList.add("count");
            less.classList.add("px-1");
            less.addEventListener("click",() => {
                count.textContent = Number(count.textContent)-1;
            });
            count.classList.add("count");
            count.textContent = "1";
            node.append(add,count,less);
        }
        btnDelete.addEventListener("click",() => {
            if (confirm(`Anda akan menghapus "${textNode.textContent}"`)) {
                listItem.removeChild(node);
                database.delete(itemName);
            }
        });
        listItem.appendChild(node);
        database.set(itemName,node);
        inputField.value = "";
        inputField.focus();
    }
});

inputField.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        listAddBtn.click();
    }
});

