import { Function } from '../function.js';

export class Sin implements Function {
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
  evaluate(pointToEvaluate: number): number {
    return -this.slope * Math.sin(this.coeficent * pointToEvaluate) - this.constant;
  }

  /**
   * @returns the string representation of the function
   */
  toString(): string {
    return `${this.slope} * sin(${this.coeficent}x) + + ${this.constant}`;
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

  /* draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'green'; // Color de la línea
    context.lineWidth = 2; // Ancho de la línea

    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;

    // Mover al punto inicial
    context.moveTo(0, 0);

    // Dibujar la curva conectando puntos
    for (let x = 0; x < canvasWidth; x++) {
      const pointToEvaluate = (x - canvasWidth / 2) / this.scale; // Ajuste por la traslación
      const y = this.evaluate(pointToEvaluate);
      context.lineTo(x, canvasHeight / 2 - y * this.scale);
    }

    context.stroke(); // Aplicar el trazo
  } */
}