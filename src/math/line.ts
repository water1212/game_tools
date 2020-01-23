import { Vector } from "./vector";

export class Line {
    lineThickness: number;
    lineColor: number;
    start: Vector;
    end: Vector;

    constructor(start: Vector, end: Vector) {
        this.start = start;
        this.end = end;
        this.lineThickness = 1;
        this.lineColor = 0x000000;
    }
}