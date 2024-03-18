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

  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'purple';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;

    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX += this.scale / 10) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }

    context.stroke();
  }
}