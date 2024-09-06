let start_stop_button = document.getElementById("start-stop");
let reset_lap_button = document.getElementById("reset-lap");

let start = true;
let reset = true;
let myWatch = new Watch();

start_stop_button.addEventListener("click", () => {
    start = !start;
    reset = !reset;

    start ? start_stop_button.textContent = "Start" : start_stop_button.textContent = "Stop";
    reset ? reset_lap_button.textContent = "Reset" : reset_lap_button.textContent = "Lap";

    if(!start) myWatch.start();
    if(start) myWatch.stop();
});

reset_lap_button.addEventListener("click", () => {
    start ? start_stop_button.textContent = "Start" : start_stop_button.textContent = "Stop";
    reset ? reset_lap_button.textContent = "Reset" : reset_lap_button.textContent = "Lap";

    if(reset) {
        myWatch.reset();
        Render.reset()
    };

    if(!reset) {
        myWatch.newLap();
        Render.renderLaps(myWatch.laps);
    };
});



