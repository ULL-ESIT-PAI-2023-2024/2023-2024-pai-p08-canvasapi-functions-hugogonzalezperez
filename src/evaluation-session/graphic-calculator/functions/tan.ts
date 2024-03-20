/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc tan.ts
 * Fichero que contiene la clase Tan que es heredada de Function
 * Tiene los métodos evaluate, toString y Draw sobrecargadas en base al Tangente
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

import { Function } from '../function.js';

export class Tan implements Function {
  private scale: number;
  private amplitude: number;
  private period: number;
  private constant: number;

  constructor(scale: number, amplitude: number = 1, period: number = 1, constant: number = 0) {
    this.scale = scale;
    this.amplitude = amplitude;
    this.period = period;
    this.constant = constant;
  }

  /**
   *  Método que devuelve el valor del tan según la coordenada x
   * @param pointToEvaluate 
   * @returns Devuelve un número float con el resultado de evaluar el Tangente
   */
  public evaluate(pointToEvaluate: number): number {
    return -this.amplitude * Math.tan(this.period * pointToEvaluate) - this.constant;
  }

  /**
   *  Método que devuelve una representación en String de la Tangente
   * @returns Devuelve una cadena con la información de la Tangente
   */
  public toString(): string {
    return `${this.amplitude} * tan(${this.period}x) + ${this.constant}`;
  }

  /**
   * Método gráfico para dibujar la Tangente
   * @param context 
   */
  public draw(context: CanvasRenderingContext2D): void {
    context.strokeStyle = 'purple';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    context.beginPath();
    // Dibujar la tangente dentro de los límites del canvas
    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX += this.scale / 100) {
      const coordenateY = this.evaluate(actualX / this.scale) * this.scale;
      // Solo dibujar la parte de la tangente dentro de los límites del canvas
      if (Math.abs(coordenateY) < canvasHeight) {
        context.lineTo(actualX, coordenateY);
      } else {
        // Si está fuera de los límites, moverse sin dibujar
        context.moveTo(actualX, coordenateY);
      }
    }
    context.stroke();
  }
}