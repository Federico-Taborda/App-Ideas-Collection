let containerLights = document.getElementById("lights");
let btnOn = document.getElementById("on");
let btnOff = document.getElementById("off");
let timeSelector = document.getElementById("time");

let time; 
let lights = Array.from(containerLights.children);

let colors = [
    new Color("#E74C3C", "#C0392B"),
    new Color("#E67E22", "#D35400"),
    new Color("#F1C40F", "#F39C12"),
    new Color("#2ECC71", "#27AE60"),
    new Color("#3498DB", "#2980B9"),
    new Color("#1ABC9C", "#16A085"),
    new Color("#9B59B6", "#8E44AD"),
];

let onOff;

function turnLightsOn(display) {
    lights.forEach((element, index) => {
        element.style.transition = `${time}ms`;

        const isEven = index % 2 === 0;
        
        const color = display == isEven ? colors[index].on : colors[index].off;
        const shadow = display == isEven ? colors[index].shadowOn : colors[index].shadowOff;

        element.style.backgroundColor = color;
        element.style.boxShadow = shadow;
    });
};

function turnLightsOff() {
    lights.forEach((element, index) => {
        element.style.backgroundColor = colors[index].off;
        element.style.boxShadow = colors[index].shadowOff;
    });

    return clearInterval(onOff);
};


btnOn.addEventListener("click", () => {
    let display = true;
    time = parseInt(timeSelector.value) || 1000;

    turnLightsOn(display);

    onOff = setInterval(() => {
        display = !display;
        turnLightsOn(display);
    }, time);
});

btnOff.addEventListener("click", () => {
    turnLightsOff();
});