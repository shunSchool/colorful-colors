//color array

//variables for HTML elements
let containerEl = document.getElementById("container");

//array
let colors = ["red", "green", "blue", "orange", "cyan", "purple"];
// index ---> 0       1        2       3         4        5

console.log(colors.length);

//click event
document.addEventListener("click", update);

function update() {
    let randCol = randomElement(colors);
containerEl.innerHTML = `<div style="background: ${randCol} " ></div>`;
}