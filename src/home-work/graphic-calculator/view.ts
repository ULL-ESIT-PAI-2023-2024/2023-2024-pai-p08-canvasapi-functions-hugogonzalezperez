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
   * Inicializar el canvas con el grid.
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
  }
}