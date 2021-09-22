const listAddBtn = document.getElementById("listAddBtn");
const listItem = document.getElementById("list");
const inputField = document.getElementById("inputField");

listAddBtn.addEventListener("click",() => {
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-secondary");
    btnDelete.classList.add("mx-5");
    btnDelete.classList.add("m-1");
    btnDelete.textContent = "hapus";
    let node = document.createElement("li");
    let textNode = document.createTextNode(inputField.value);
    inputField.value = "";
    node.appendChild(textNode);
    node.appendChild(btnDelete);
    listItem.appendChild(node);
    btnDelete.addEventListener("click",() => {
        listItem.removeChild(node);
    });
});

