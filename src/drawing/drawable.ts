import { Dimensions } from "./dimensions";
import { Container } from 'pixi.js'; 

export interface Drawable {
    drawings: Container;
    dimensions: Dimensions;

    draw(): Container;
}