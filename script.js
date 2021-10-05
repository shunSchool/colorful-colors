//color array

//variables for HTML elements
let containerEl = document.getElementById("container");

//array
let colors = ["red", "green", "blue", "orange", "cyan"];
// index ---> 0       1        2       3         4

containerEl.innerHTML = `<div style="background: ${colors[4]} " ></div>`;