import { Function } from '../function.js';

export class Tan implements Function {
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

  public evaluate(pointToEvaluate: number): number {
    return -this.slope * Math.tan(this.coeficent * pointToEvaluate) - this.constant;
  }

  public toString(): string {
    return `${this.slope} * tan(${this.coeficent}x) + ${this.constant}`;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.strokeStyle = 'purple';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    context.beginPath();
    // Dibujar la tangente dentro de los límites del canvas
    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX += this.scale / 30) {
      const y = this.evaluate(actualX / this.scale) * this.scale;
      // Solo dibujar la parte de la tangente dentro de los límites del canvas
      if (Math.abs(y) < canvasHeight) {
        context.lineTo(actualX, y);
      } else {
        // Si está fuera de los límites, moverse sin dibujar
        context.moveTo(actualX, y);
      }
    }
    context.stroke();
  }
}