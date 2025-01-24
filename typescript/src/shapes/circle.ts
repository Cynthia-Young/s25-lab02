import { Shape } from './shape.js'

function circle(radius: number): Shape {
    const r = radius;
    return {
        computeArea: function (): number {
            return Math.PI * r * r
        }
    }
}

export { circle }
