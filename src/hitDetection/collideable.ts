import { Vector } from "../math/vector";
import { Ray2 } from "./ray2";

export interface Collidable {
    checkIntersection(ray: Ray2) : Vector;
}