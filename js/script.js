//color array

//variables for HTML elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

//global variable
let colors;

// fetch content from colors.txt
fetch("colors.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/);
    displayColors(colors);
}

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
        divStr += `<div style="background: ${colors[i]} " >${colors[i]}</div>`;
    }
    containerEl.innerHTML = divStr;
}