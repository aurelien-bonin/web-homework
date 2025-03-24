document.addEventListener("DOMContentLoaded", () => {
  initialCleanup();
  changeColor();
  hoverBlue();
  countSquare();
});


let total = 30;


function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
    else {
      node.style.backgroundColor = "lightcoral";
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}


function addElement() {
  let element = document.createElement("div");
  document.getElementById("grid").appendChild(element);
  element.style.backgroundColor = "lightcoral";
  colorFunc(element);
  hoverFunc(element);
}


function addLine() {
  total += 10;
  document.getElementById("total").innerHTML = "Total squares : " + total;
  for (let i = 0; i < 10; i++) {
    addElement();
  }
  countSquare();
}


function removeLine() {
  if (total !== 0) {  
    total -= 10
    document.getElementById("total").innerHTML = "Total squares : " + total;
    for (let i = 0; i < 10; i++) {
      let node = document.getElementById("grid").lastChild;
      node.remove();
    }
    countSquare();
}
}


function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return 'rgba(' + r + ',' + g + ',' + b + ')';
}

function colorFunc(node) {
  node.addEventListener("click",() => {
    node.style.backgroundColor = randomColor();
    countSquare();
  });
}

function hoverFunc(node) {
  node.addEventListener("mouseover",() => {
    node.style.backgroundColor = "blue";
    countSquare();
  });
}

function changeColor() {
  document.getElementById("grid").childNodes.forEach(colorFunc);
}

function hoverBlue() {
  document.getElementById("grid").childNodes.forEach(hoverFunc);
}

function countSquare() {
  let original = 0;
  let clicked = 0;
  let blue = 0;
  document.getElementById("grid").childNodes.forEach(
    (node) => {
      if (node.style.backgroundColor == "lightcoral") {
        original += 1;
      }
      else if (node.style.backgroundColor == "blue") {
        blue += 1;
      }
      clicked = total - original - blue;
    }
  )
  document.getElementById("original").innerHTML = "Original squares : " + original;
  document.getElementById("clicked").innerHTML = "Clicked squares : " + clicked;
  document.getElementById("blue").innerHTML = "Blue squares : " + blue;
}
