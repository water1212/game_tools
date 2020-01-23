import { Vector } from "../math/vector";
import { degreesToRadians } from "../math/functions";

export class Ray2 {
    direction_in_degrees: number;
    direction_in_radians: number;
    origin: Vector;

    constructor(origin: Vector, direction_degrees: number) {
        this.direction_in_degrees = direction_degrees;
        this.direction_in_radians = degreesToRadians(direction_degrees);
        this.origin = origin;
    }

    getDirectionVector() : Vector {
        let x = this.origin.x + Math.cos(this.direction_in_radians);
        let y = this.origin.y + Math.sin(this.direction_in_radians);

        return new Vector(x, y);
    }
}