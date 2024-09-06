class Render {
    static renderLaps(laps) {
        if(laps == []) return
        
        let element = laps[laps.length - 1];
        let lap = document.createElement("p");
        
        lap.className = "lap";
        lap.textContent = `${element.hours}:${element.minutes}:${element.seconds}`;

        document.getElementById("laps").appendChild(lap);
    };

    static renderClock(time) {
        if(time.hours < 10) {
            document.getElementById("hours").textContent = `0${time.hours}`;
        }else{
            document.getElementById("hours").textContent = time.hours;
        };

        if(time.minutes < 10) {
            document.getElementById("minutes").textContent = `0${time.minutes}`;
        }else{
            document.getElementById("minutes").textContent = time.minutes;
        };
        
        if(time.seconds < 10) {
            document.getElementById("seconds").textContent = `0${time.seconds}`;
        }else{
            document.getElementById("seconds").textContent = time.seconds;
        };
    };
    
    static resetLaps() {
        document.getElementById("laps").textContent = "";
        let title = document.createElement("h1");
        title.textContent = "Laps"

        document.getElementById("laps").appendChild(title);
    };
    
    static resetClock() {
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    };

    static reset() {
        this.resetLaps();
        this.resetClock();
    };
};