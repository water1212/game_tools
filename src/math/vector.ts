export class Vector {
    x: number;
    y: number;
    z: number

    constructor(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z ? z : 0;
    }

    copy(): Vector {
        return new Vector(this.x, this.y, this.z);
    }

    setPosition(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;
        //if the passed in z is non-zero, use that, otherwise, check to see if our current
        //z is defined or non-zero. If that is true, keep that value, otherwise, set it to 0
        this.z = z ? z : this.z ? this.z : 0;
    }

    subtract(otherPoint: Vector): Vector {
        let x = this.x - otherPoint.x;
        let y = this.y - otherPoint.y;

        return new Vector(x, y);
    }

    add(otherPoint: Vector): Vector {
        let x = this.x + otherPoint.x;
        let y = this.y + otherPoint.y;

        return new Vector(x, y);
    }

    angleTo(otherPoint: Vector, inDegrees?: boolean): number {
        let y = this.y - otherPoint.y;
        let x = this.x - otherPoint.x;

        let angle = Math.atan2(y, x);
        
        if(inDegrees) {
            angle = (angle * 180) / Math.PI;
        }

        return angle;
    }

    distance(otherPoint: Vector): number {
        let dx = otherPoint.x - this.x;
        let dy = otherPoint.y - this.y;
        let dz = otherPoint.z - this.z;

        return Math.sqrt((dx * dx) + (dy * dy) + (dz * dz));
    }
}