/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc lineal.ts
 * Fichero que contiene la clase Lineal que es heredada de Function
 * Tiene los métodos evaluate, toString y Draw sobrecargadas en base a una linea dada
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

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

  /**
   *  Método que devuelve el valor de la función según un x dado
   * @param pointToEvaluate 
   * @returns  El valor de la función en el punto especificado
   */
  public evaluate(pointToEvaluate: number): number {
    return -this.slope * pointToEvaluate - this.constant;
  }

  /**
   * Dibujar la función en el canvas.
   * @returns una cadena con la fórmula del gráfico
   */
  public toString(): string {
    return `${this.slope}x + ${this.constant}`;
  }

  /**
   * Función para dibujar la línea en el canvas
   * @param context 
   */
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