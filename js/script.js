//color array

//variables for HTML elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

//global variable
let colors = [];

//Event listener
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
    if(event.keyCode === 13) {
        //add user's color to the colors array and display
        colors.push(inputEl.value);
        inputEl.value = "";
        displayColors(colors);
    }
}

function displayColors(colors) {
    //display all colors on the page
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
        divStr += `<div style="background: ${colors[i]} " ></div>`;
    }
    containerEl.innerHTML = divStr;
}