const btnSwitch = document.getElementById("btn-switch");
const switchMode = document.getElementsByClassName("content-wrapper");

btnSwitch.addEventListener("click",() => {
    for (let i = 0; i< switchMode.length; i++) {
        switchMode[i].classList.toggle("light");
    }
});
