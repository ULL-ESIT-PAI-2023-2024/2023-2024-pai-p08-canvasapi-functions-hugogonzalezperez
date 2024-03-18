import { Function } from '../function.js';

export class Exponential implements Function {
  private scale: number;
  private base: number;
  private exponent: number;
  private constant: number;

  constructor(scale: number, base: number, exponent: number, constant: number) {
    this.scale = scale;
    this.base = base;
    this.exponent = exponent;
    this.constant = constant;
  }

  public evaluate(pointToEvaluate: number): number {
    return -this.base * Math.pow(this.exponent, pointToEvaluate) - this.constant;
  }

  public toString(): string {
    return `${this.base} * ${this.base}^x + ${this.constant}`;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;

    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX += this.scale / 10) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }

    context.stroke();
  }
}