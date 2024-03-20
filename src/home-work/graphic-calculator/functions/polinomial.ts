/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc polinomial.ts
 * Fichero que contiene la clase Polynomial que es heredada de Function
 * Tiene los métodos evaluate, toString y Draw sobrecargadas en base a un polinomio dado
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

import { Function } from '../function.js';

export class Polynomial implements Function {
  private coefficients: number[];
  private scale: number;

  constructor(scale: number, coefficients: number[]) {
    this.coefficients = coefficients;
    this.scale = scale;
  }

  /**
   *  Método que devuelve el valor del polinomio en una determinada posición x
   * @param pointToEvaluate Valor de X a evaluar
   * @returns  Devuelve el valor del polinomio en esa posición
   */
  public evaluate(pointToEvaluate: number): number {
    let result = 0;
    for (let i = this.coefficients.length - 1; i >= 0; i--) {
      result += this.coefficients[i] * Math.pow(pointToEvaluate, this.coefficients.length - 1 - i);
    }
    return -result;
  }

  /**
   *  Método que devuelve una representación del polinomio como cadena
   * @returns  Devuelve una string del polinomio como cadena
   */
  public toString(): string {
    let str = '';
    // representa el polinomio que tiene el vector [1, 0, 3, 0] que es f(x)=x^(3) + 3x
    for (let i = this.coefficients.length - 2; i >= 0; i--) {
      if (this.coefficients[this.coefficients.length - 2 - i] !== 0) {
        str += `${this.coefficients[this.coefficients.length - 2 - i]}x^${i + 1}`;
      }
    }
    if (this.coefficients[this.coefficients.length - 1] !== 0) {
      str += `${this.coefficients[this.coefficients.length - 1]}`;
    }

    // Añadir un '+' si detectamos dos números seguidos
    let newStr = '';
    for (let j = 0; j < str.length - 1; j++) {
      if (!isNaN(Number(str[j])) && !isNaN(Number(str[j + 1]))) {
        newStr += str[j] + '+';
      } else {
        newStr += str[j];
      }
    }
    newStr += str[str.length - 1];

    return newStr;
}


  /**
   *  Método que dibuja el polinomio en el canvas
   * @param context 
   */
  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'green';
    context.lineWidth = 2;
    let canvasWidth = context.canvas.width;

    for (let actualX = -canvasWidth; actualX < canvasWidth; actualX += this.scale / 10) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }

    context.stroke();
  }
}
