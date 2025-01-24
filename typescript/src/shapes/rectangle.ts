import { Shape } from './shape.js'

function newRectangle(width: number, height: number): Shape {
    const w = width;
    const h = height;
    return {
        computeArea: function (): number {
            return w * h
        }
    }
}

export { newRectangle }
