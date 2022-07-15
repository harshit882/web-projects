let container = document.getElementById('container');
addBtn = document.getElementById('addBtn');
let cardTxt = document.getElementById("addTxt");
let themeObj = []

function dark() {

    themeObj = localStorage.setItem("theme", "dark");
    // themeObj=localStorage.setItem("theme","dark");
    let element = document.getElementById("body");
    element.style.backgroundImage = 'url("https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg")';
    element.style.color = "white";
    container.style.backgroundImage = 'url("https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg")';
    element.style.color = "white";
    addBtn.style.color = "white";
    addBtn.style.border = "1px solid white"
    cardTxt.style.backgroundColor = "black"
    cardTxt.style.color = "white"
    cardTxt.style.opacity = "0.8"
}

function light() {
    localStorage.removeItem("theme", "dark");
    themeObj = localStorage.setItem("theme", "light");
    let element = document.getElementById("body");
    element.style.backgroundImage = "none";
    element.style.color = 'black'
    container.style.backgroundImage = 'none';
    addBtn.style.color = "black";
    // addBtn.style.backgroundColor = "brown";
    addBtn.style.border = "1px solid black";
    cardTxt.style.backgroundColor = "white";
    cardTxt.style.color = "black";
    // cardTxt.style.opacity = "none"
}

if (localStorage.getItem("theme") == "dark") {
    dark();
} else {
    light();
}