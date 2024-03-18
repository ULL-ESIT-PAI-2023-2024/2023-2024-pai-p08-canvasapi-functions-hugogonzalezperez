import { Function } from '../function.js';

export class Cos implements Function {
  private scale: number;
  private slope: number;
  private coeficent: number;
  private constant: number;

  constructor(scale: number, slope: number = 1, coeficent: number = 1, constant: number = 0) {
    this.scale = scale;
    this.slope = slope;
    this.coeficent = coeficent;
    this.constant = constant;
  }

  /**
   * @param pointToEvaluate the point at which the function will be evaluated
   * @returns the result of evaluating the function at the given point 
   */
  public evaluate(pointToEvaluate: number): number {
    return -this.slope * Math.cos(this.coeficent * pointToEvaluate) - this.constant;
  }

  /**
   * @returns the string representation of the function
   */
  public toString(): string {
    return `${this.slope} * cos(${this.coeficent}x) + + ${this.constant}`;
  }

  /**
   * @param context the canvas context in which the function will be drawn
   */
  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;

    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX += this.scale / 10) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }

    context.stroke();
  }
}
