import { Dimensions } from "../dimensions";
import { Container } from 'pixi.js'; 

export interface PixiDrawable {
    drawings: Container;
    dimensions: Dimensions;

    draw(): Container;
}