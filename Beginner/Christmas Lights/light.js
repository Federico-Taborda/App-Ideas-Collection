class Color {
    constructor(on, off) {
        this.on = on;
        this.off = off;
        this.shadowOn = `0px 0px 15px 5px ${this.on}`;
        this.shadowOff = ``;
    };
};