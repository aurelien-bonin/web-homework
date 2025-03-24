const XKCD = "https://xkcd.now.sh/?comic="

// write your code here

let current;

document.addEventListener("DOMContentLoaded", () => {
    resetButton();
    next();
    previous();
    fetchIssue("latest");
})


function fetchIssue(num) {
    fetch(XKCD + num).then((response) => response.json()).then((data) => {
        document.getElementById("num").innerHTML = data.num;
        document.getElementById("img").src = data.img;
        current = data.num;
        }
    ).catch(console.error);
}


function resetButton() {
    document.getElementById("reset").addEventListener("click",() => {fetchIssue("latest")});
}


function next() {
    document.getElementById("next").addEventListener("click", () => {
            current += 1;
            fetchIssue(current);
        }
    )
}


function previous() {
    document.getElementById("previous").addEventListener("click", () => {
            current -= 1;
            fetchIssue(current);
        }
    )
}