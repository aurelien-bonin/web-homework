document.addEventListener("DOMContentLoaded", () => {
    init();
    colorSquare();
    reset();
})

let color;
let run;


function switchColor() {
    if (color == "green") {
        color = "purple";
    }
    else if (color == "purple") {
        color = "green";
    }
}


function init() {
    document.getElementById("grid").childNodes.forEach((node) => {
        if(node.nodeType == Node.ELEMENT_NODE) {
            node.style.backgroundColor = "lightcoral";
        }
    })
    document.getElementById("winner").innerHTML = "";
    color = "green";
    run = true;
}


function colorSquare() {
    document.getElementById("grid").childNodes.forEach((node) => {
        node.addEventListener("click",() => {
            if (run) {
                if (node.style.backgroundColor == "lightcoral") {
                    node.style.backgroundColor = color;
                    checkWin(color);
                    switchColor();
                }
            }
        })
    })
}


function reset() {
    document.getElementById("reset").addEventListener("click", init)
}


function checkWin(color) {
    let win = false;
    for (let i = 1; i < 4; i++) {
        let count = 0
        for (let j = 1; j < 4; j++) {
            if (document.getElementById(i + "," + j).style.backgroundColor == color) {
                count += 1;
            }
        }
        if (count == 3) {
            win = true;
        }
    }
    for (let i = 1; i < 4; i++) {
        let count = 0
        for (let j = 1; j < 4; j++) {
            if (document.getElementById(j + "," + i).style.backgroundColor == color) {
                count += 1;
            }
        }
        if (count == 3) {
            win = true;
        }
    }
    let count = 0;
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(i + "," + i).style.backgroundColor == color) {
            count += 1;
        }
    }
    if (count == 3) {
        win = true;
    }
    count = 0
    for (let i = 1; i < 4; i++) {
        let j = 4 - i;
        if (document.getElementById(i + "," + j).style.backgroundColor == color) {
            count += 1;
        }
    }
    if (count == 3) {
        win = true;
    }
    if (win) {
        document.getElementById("winner").innerHTML = "Winner is : " + color + " !";
        document.getElementById("winner").style.color = color;
        run = false;
    }
}