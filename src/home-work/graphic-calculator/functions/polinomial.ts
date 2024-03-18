import { Function } from '../function.js';

export class Polynomial implements Function {
  private coefficients: number[];
  private scale: number;

  constructor(scale: number, coefficients: number[]) {
    this.coefficients = coefficients;
    this.scale = scale;
  }

  /**
   * @param pointToEvaluate the point at which the function will be evaluated
   * @returns the result of evaluating the function at the given point
   */
  evaluate(pointToEvaluate: number): number {
    let result = 0;
    for (let i = this.coefficients.length - 1; i >= 0; i--) {
      result += this.coefficients[i] * Math.pow(pointToEvaluate, this.coefficients.length - 1 - i);
    }
    return -result;
  }

  /**
   * @returns the string representation of the function
   */
  toString(): string {
    let str = '';
    for (let i = 0; i < this.coefficients.length; i++) {
      if (this.coefficients[i] !== 0) {
        if (i > 0) {
          str += (this.coefficients[i] > 0 ? ' + ' : ' - ');
        }
        if (Math.abs(this.coefficients[i]) !== 1 || i === 0) {
          str += this.coefficients[i];
        }
        if (i > 0) {
          str += `x^${i}`;
        }
      }
    }
    return str;
  }

  /**
   * @param context the canvas context in which the function will be drawn
   */
  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'green';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;

    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX += this.scale / 10) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }

    context.stroke();
  }
}
