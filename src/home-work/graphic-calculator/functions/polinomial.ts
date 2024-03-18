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
    for (let i = 0; i < this.coefficients.length; i++) {
      result += this.coefficients[i] * Math.pow(pointToEvaluate, i);
    }
    return result;
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
  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(0, this.evaluate(0));
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.lineTo(0, context.canvas.height);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = -100 * this.scale; actualX < canvasWidth; actualX = actualX + this.scale / 10) {
      let scaledY = this.evaluate(actualX / this.scale) * this.scale;
      context.lineTo(actualX, scaledY / this.scale);
    }
    context.stroke()
    context.beginPath()
    for (let actualX = 0; actualX > 0 - canvasWidth / 2; actualX = actualX - this.scale / 10) {
      let scaledY = this.evaluate(actualX / this.scale) * this.scale;
      context.lineTo(actualX, scaledY / this.scale);
    }
    context.stroke();
  }
}
