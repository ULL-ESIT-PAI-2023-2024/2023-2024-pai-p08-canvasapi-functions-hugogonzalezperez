/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc square_root.ts
 * Fichero que contiene la clase SquareRoot que es heredada de Function
 * Tiene los métodos evaluate, toString y Draw sobrecargadas en base a una raiz cuadrada dado
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

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

  /**
   *  Método que devuelve el valor de la función f(x) = sqrt(x)
   * @param pointToEvaluate 
   * @returns  El resultado de evaluar la función en un punto x
   */
  public evaluate(pointToEvaluate: number): number {
    return -this.slope * Math.sqrt(pointToEvaluate) + this.constant;
  }

  /**
   *  Método que devuelve una representación en String del objeto SquareRoot
   * @returns una cadena con la información del objeto Square
   */
  public toString(): string {
    return `${this.slope} * sqrt(x) + ${this.constant}`;
  }

  /**
   *  Método gráfico para visualizar la función f(x)= sqrt(x)
   * @param context 
   */
  public draw(context: CanvasRenderingContext2D): void {
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