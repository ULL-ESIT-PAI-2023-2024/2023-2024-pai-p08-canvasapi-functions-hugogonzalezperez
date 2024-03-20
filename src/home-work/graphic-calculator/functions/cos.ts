/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc cos.ts
 * Fichero que contiene la clase Cos que es heredada de Function
 * Tiene los métodos evaluate, toString y Draw sobrecargadas en base al Coseno
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

import { Function } from '../function.js';

export class Cos implements Function {
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
   *  Método que devuelve el valor del coseno según la coordenada x
   * @param pointToEvaluate 
   * @returns Devuelve un número float con el resultado de evaluar el Coseno
   */
  public evaluate(pointToEvaluate: number): number {
    return -this.amplitude * Math.cos(this.period * pointToEvaluate) - this.constant;
  }

  /**
   *  Método que devuelve una representación del coseno como cadena
   * @returns  Devuelve una cadena con la fórmula del coseno
   */
  public toString(): string {
    return `${this.amplitude} * cos(${this.period}x) + + ${this.constant}`;
  }

  /**
   *  Método gráfico para dibujar el coseno
   * @param context 
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
