/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc view.ts
 * Fichero con la clase View que se encarga de hacer de handler entre el programa y la página.
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

import { Function } from './function.js';
import { Grid } from './grid.js';

export class View {
  private canvas: HTMLCanvasElement = document.getElementById('P08') as HTMLCanvasElement;
  private context: CanvasRenderingContext2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  private scale: number;

  constructor(scale: number) {
    this.scale = scale;
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
  }

  /**
   * Inicializa el canvas con el grid.
   */
  public initialize(): void {
    let grid: Grid = new Grid(this.scale);
    grid.draw(this.context);
  }

  /**
   * Dibujar la función en el canvas.
   * @param functionToDraw 
   */
  public drawFunction(functionToDraw: Function): void {
    functionToDraw.draw(this.context);
    this.writeFunction(functionToDraw);
  }

  /**
   *  Escribir la fórmula de la función en el canvas del html.
   * @param functionToDraw 
   */
  public writeFunction(functionToDraw: Function): void {
    this.context.font = 'bold 20px Arial';
    this.context.fillStyle = 'black';
    this.context.textAlign = 'left';
    this.context.textBaseline = 'middle';
    let width = this.context.canvas.width;
    let height = this.context.canvas.height
    this.context.fillText(functionToDraw.toString(), -width/2 + 20, -height/2 + 30);
  }
}