/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc lissajous.ts
 * Fichero que contiene la clase Cos que es heredada de Function
 * Tiene los métodos evaluate, toString y Draw sobrecargadas en base a la curva LissaJous
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

import { Function } from '../function.js';

export class Lissajous implements Function {
  private scale: number;
  private frequencyA: number;
  private frequencyB: number;
  private phaseAngle: number;

  constructor(scale: number, frequencyA: number = 1, frequencyB: number = 1, phaseAngle: number = 0) {
    this.scale = scale;
    this.frequencyA = frequencyA;
    this.frequencyB = frequencyB;
    this.phaseAngle = phaseAngle;
  }

  /**
   *  Método que devuelve el valor del coseno según la coordenada x
   * @param pointToEvaluate 
   * @returns Devuelve un número float con el resultado de evaluar el Coseno
   */
  public evaluate(): number {
    return 0;
  }

  /**
   * Método que devuelve la curva de LissaJous evaluada en un rango de 0 a 360
   * @param amplitude 
   * @returns Devuelve un array de coordenadas [x, y]
   */
  public evaluateLissaJous(amplitude: number): [number, number][] {
    const curve: [number, number][] = [];

    for (let t = 0; t <= 360; t += 360 / 1000) {
      const x = amplitude * Math.sin((this.frequencyA * t + this.phaseAngle) * (Math.PI / 180));
      const y = amplitude * Math.sin(this.frequencyB * t * (Math.PI / 180));
      curve.push([x, y]);
    }

    return curve;
  }

  /**
   *  Método que devuelve una representación del coseno como cadena
   * @returns  Devuelve una cadena con la fórmula del coseno
   */
  public toString(): string {
    return `A = sin(${this.frequencyA}x + ${this.phaseAngle})
            B = sin(${this.frequencyB}x)`;
  }

  /**
   *  Método gráfico para dibujar el coseno
   * @param context 
   */
  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 2;

    const curve: [number, number][] = this.evaluateLissaJous(context.canvas.width / 2 - 50);

    context.moveTo(curve[0][0], curve[0][1]);

    for (let i = 1; i < curve.length; i++) {
      context.lineTo(curve[i][0], curve[i][1]);
    }
    context.lineTo(curve[0][0], curve[0][1]);

    context.stroke();
  }
}
