// percentage text
const loadText = document.querySelector(".loading-text");
// background image
const bg = document.querySelector(".bg");

// load variable starting at 0
let load = 0;
// setInterval calls blurring function every 30ms
let int = setInterval(blurring, 30)

// blurring function
function blurring() {
    // increase load by 1 
    load++;
    // if load is greater than 99
    if (load > 99) {
        // clear interval will stop int
        clearInterval(int);
    }
    // inner text of load text set to "load" value as a percent
    loadText.innerText = `${load}%`;
    // start fully opaque (1) and go to 0 as load starts at 0 and goes to 100
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // start background blur at 30 and go to 0 as load starts at 0 and goes to 100
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// function for setting one range of numbers to another range
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}