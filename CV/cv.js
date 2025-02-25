// attach an (anonymous) function to the 'load' event
document.addEventListener(
    'DOMContentLoaded',                   // the event name
    () => one_step('some-data')  // the callback: must be a function
)

const random255 = () => Math.floor(Math.random() * 255)

const randomColor = () =>
    // we call it 3 times to create a random color
    `rgb(${random255()} ${random255()} ${random255()} / 50%`
// not mandatory, but with this soft switch
// we could easily turn the blinking on and off
/*let*/ active = true;

function one_step() {
    if (active)
        console.log("beep");
        let to_toggle = document.getElementById("header")
        to_toggle.style.color = randomColor();
}

// start the cyclic job: call one_step() every 1s
/*const*/ interval = setInterval(one_step, 1000)