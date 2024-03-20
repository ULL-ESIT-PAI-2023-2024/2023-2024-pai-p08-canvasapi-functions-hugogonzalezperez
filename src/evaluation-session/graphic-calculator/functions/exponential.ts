/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc exponential.ts
 * Fichero que contiene la clase Exponential que es heredada de Function
 * Tiene los métodos evaluate, toString y Draw sobrecargadas en base al exponente
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

import { Function } from '../function.js';

export class Exponential implements Function {
  private scale: number;
  private base: number;
  private constant: number;

  constructor(scale: number, base: number, constant: number) {
    this.scale = scale;
    this.base = base;
    this.constant = constant;
  }

  /**
   *  Método que devuelve el valor de la exponencial en un punto X dado
   * @param pointToEvaluate 
   * @returns  El valor de la función en el punto x
   */
  public evaluate(pointToEvaluate: number): number {
    return -Math.pow(this.base, pointToEvaluate) - this.constant;
  }

  /**
   * Método que devuelve una representación en String del objeto Exponential
   * @returns Devuelve una cadena con la información de la función
   */
  public toString(): string {
    return `${this.base}^x + ${this.constant}`;
  }

  /**
   *  Método gráfico de la función Exponencial
   * @param context 
   */
  public draw(context: CanvasRenderingContext2D): void {
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