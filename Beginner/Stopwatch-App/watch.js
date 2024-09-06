class Watch {
    constructor() {
        this.clock;
        this.laps = [];
        this.time = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    };

    start() {
        this.clock = setInterval(() => {
            if(this.time.minutes >= 59) {
                this.time.hours++;
                this.time.minutes = 0;
            };

            if(this.time.seconds >= 59) {
                this.time.minutes++
                this.time.seconds = 0;
            };

            this.time.seconds++;
            Render.renderClock(this.time);
        }, 1000);
    };

    stop() {
        return clearInterval(this.clock)
    };

    newLap() {
        return this.laps.push(this.time);
    };

    resetLaps() {
        return this.laps = [];
    };

    resetTime() {
        return this.time = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    };

    reset() {
        this.resetLaps();
        this.resetTime();
    };
};
