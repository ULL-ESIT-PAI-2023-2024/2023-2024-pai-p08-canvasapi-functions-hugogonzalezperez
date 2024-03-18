import { Function } from '../function.js';

export class Lineal implements Function {
  private scale: number;
  private slope: number;
  private constant: number;

  constructor(scale: number, slope: number, constant: number) {
    this.scale = scale;
    this.slope = slope;
    this.constant = constant;
  }

  public evaluate(pointToEvaluate: number): number {
    return -this.slope * pointToEvaluate - this.constant;
  }

  public toString(): string {
    return `${this.slope}x + ${this.constant}`;
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 2;

    // Calcular las coordenadas del punto inicial y final de la línea
    const xStart = -context.canvas.width / 2;
    const xEnd = context.canvas.width / 2;
    const yStart = this.evaluate(xStart / this.scale) * this.scale;
    const yEnd = this.evaluate(xEnd / this.scale) * this.scale;

    // Mover al punto inicial y trazar la línea al punto final
    context.moveTo(xStart, yStart);
    context.lineTo(xEnd, yEnd);

    // Dibujar la línea
    context.stroke();
  }
}