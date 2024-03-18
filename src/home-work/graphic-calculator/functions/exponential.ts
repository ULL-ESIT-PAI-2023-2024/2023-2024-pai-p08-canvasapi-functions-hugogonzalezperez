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