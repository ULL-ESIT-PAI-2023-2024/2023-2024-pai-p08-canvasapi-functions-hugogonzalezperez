import { Function } from '../function.js';

export class SquareRoot implements Function {
  private scale: number;
  private slope: number;
  private constant: number;

  constructor(scale: number, slope: number = 1, constant: number = 0) {
    this.scale = scale;
    this.slope = slope;
    this.constant = constant;
  }

  public evaluate(pointToEvaluate: number): number {
    return -this.slope * Math.sqrt(pointToEvaluate) + this.constant;
  }

  public toString(): string {
    return `${this.slope} * sqrt(x) + ${this.constant}`;
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(0, this.evaluate(0));
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.lineTo(0, context.canvas.height);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "purple";
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    for (let actualX = -100 * this.scale; actualX < canvasWidth; actualX = actualX + this.scale / 10) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }
    context.stroke()
    context.beginPath()
    for (let actualX = 0; actualX > 0 - canvasWidth / 2; actualX = actualX - this.scale / 10) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }
    context.stroke();
  }
}