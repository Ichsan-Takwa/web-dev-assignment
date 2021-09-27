const btnSwitch = document.getElementById("btn-switch");
const switchMode = document.getElementsByClassName("content-wrapper");
let current_mode = false; // false = dark // true == light;

if (localStorage.getItem("current_mode") == "true") {
    for (let i = 0; i < switchMode.length; i++) {
        switchMode[i].classList.add("light");
    }
    current_mode = true;
}

btnSwitch.addEventListener("click",() => {
    for (let i = 0; i< switchMode.length; i++) {
        switchMode[i].classList.toggle("light");
    }
    current_mode = !current_mode;
    localStorage.setItem("current_mode", current_mode);
});
