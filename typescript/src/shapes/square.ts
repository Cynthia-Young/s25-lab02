import { Shape } from './shape.js'

function square(sideLen: number): Shape {
    const len = sideLen;
    return {
        computeArea: function (): number {
            return len * len
        }
    }
}

export { square }