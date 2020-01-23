import { interaction, Container, Point as PixiPoint, Rectangle } from 'pixi.js';
import { Vector } from '../math/vector';
import { Dimensions } from '../drawing/dimensions';

function getTouchedPosition(evt: interaction.InteractionEvent, touchedObject: Container): Vector {
    let touchedPoint = new PixiPoint();
    evt.data.getLocalPosition(touchedObject, touchedPoint);

    return new Vector(touchedPoint.x, touchedPoint.y);
}

function createTouchableArea(dimensions: Dimensions) : Container {
    let touchable = new Container();
    touchable.interactive = true;
    touchable.hitArea = new Rectangle(0,0, dimensions.width, dimensions.height)
    return touchable;
}

export {getTouchedPosition, createTouchableArea}