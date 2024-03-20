/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc grid.ts
 * Fichero que contiene la clase Grid que se encarga de dibujar la cuadrícula
 * en el canvas e inicializarla correctamente
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

export class Grid {
  constructor(private scale: number) {
    this.scale = scale;
  }

  /**
   * Dibujar el grid en el canvas. Ejes principales, secundarios y números.
   * @param context 
   */
  public draw(context: CanvasRenderingContext2D): void {
    this.drawVerticalLines(context);
    this.drawHorizontalLines(context);
    this.drawAxis(context);
    this.drawNumbers(context);
  }

  /**
   * Encargada de pintar las lineas del eje X y Y en el canvas.
   * @param context 
   */
  private drawAxis(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    //  Eje X
    context.moveTo(-context.canvas.width, 0);
    context.lineTo(context.canvas.width, 0);
    // Eje Y
    context.moveTo(0, -context.canvas.height);
    context.lineTo(0, context.canvas.height);
    context.stroke();
  }

  /**
   * Dibuja las lineas verticales auxiliares en la cuadricula (las discontinuas)
   * @param context 
   */
  private drawVerticalLines(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'grey';
    context.lineWidth = 1;
    const canvasWidth = context.canvas.width;

    context.setLineDash([5, 15]);
    for (let i = 0; i < canvasWidth; i += this.scale) {
      // Parte positiva del eje x
      context.moveTo(i, -canvasWidth);
      context.lineTo(i, canvasWidth);
      // Parte negativa del eje x
      context.moveTo(-i, -canvasWidth);
      context.lineTo(-i, canvasWidth);
    }
    context.stroke();
    context.setLineDash([]);
  }

  /**
   * Dibuja las lineas horizontales auxiliares en la cuadricula (las discontinuas)
   * @param context 
   */
  private drawHorizontalLines(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'grey';
    context.lineWidth = 1;
    const canvasHeight = context.canvas.height;

    context.setLineDash([5, 15]); // Discontinuas
    for (let i = 0; i < canvasHeight; i += this.scale) {
      // Parte positiva del eje y
      context.moveTo(-canvasHeight, i);
      context.lineTo(canvasHeight, i);
      // Parte negativa del eje y
      context.moveTo(-canvasHeight, -i);
      context.lineTo(canvasHeight, -i);
    }

    context.stroke();
    context.setLineDash([]);
  }

  /**
   * Método encargado de escribir el número de la celda  en cada una de sus esquinas
   * @param context 
   */
  private drawNumbers(context: CanvasRenderingContext2D): void {
    // Tipografía de los números
    const fontSize = 14;
    const font = 'bold ' + fontSize + 'px Arial';
    context.font = font;
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    const scale = this.scale;
    const halfCanvasWidth = context.canvas.width / 2;
    const halfCanvasHeight = context.canvas.height / 2;

    // Eje X
    for (let actualX = scale; actualX < halfCanvasWidth; actualX += scale) {
      if ((actualX/scale) % 2 == 0) {
        context.fillText((actualX / scale).toString(), actualX, fontSize);
        context.fillText((-actualX / scale).toString(), -actualX, fontSize);
      }
    }

    // Eje Y
    for (let actualY = scale; actualY < halfCanvasHeight; actualY += scale) {
      if ((actualY/scale) % 2 == 0) {
        context.fillText((-actualY / scale).toString(), fontSize, actualY);
        context.fillText((actualY / scale).toString(), fontSize, -actualY);
      }
    }
  }
}