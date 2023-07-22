let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", () => {

    let body = document.getElementById("body");
    let btn = document.getElementById("mode-btn");

    
    if (body.classList.contains("dark-mode") == false) {
        changeMode(body, btn, "dark-mode", "Light Mode", "🔆");
        console.log("dark mode is on");
    }

    else if (body.classList.contains("dark-mode") == true) {
        body.classList.remove("dark-mode");
        changeMode(body, btn, null, "Dark Mode", "🌙");
        console.log("dark mode is off");
    }

})


function changeMode(body, btn, modeClass, btnValue, btnIcon) {
    body.classList.toggle(modeClass);
    btn.innerHTML = btnValue;
    btn.icon = btnIcon;
};


