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
    context.lineWidth = 3;

    context.moveTo(0, 0);
    context.lineTo(0, context.canvas.height);
    context.moveTo(0, 0);
    context.lineTo(context.canvas.width, 0);
    context.moveTo(0, 0);
    context.lineTo(0, -context.canvas.height);
    context.moveTo(0, 0);
    context.lineTo(-context.canvas.width, 0);
    context.stroke();
  }

  private drawVerticalLines(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'grey';
    context.lineWidth = 1;
    const halfWidth = context.canvas.width / 2;

    // dibuja las lineas verticales para el lado negativo del eje y
    for (let i = 0; i > -context.canvas.width; i -= this.scale) {
      context.moveTo(i, -halfWidth);
      context.lineTo(i, context.canvas.height);
    }
    // dibuja las lineas verticales para el lado positivo del eje y
    for (let i = 0; i < context.canvas.width; i += this.scale) {
      context.moveTo(i, -halfWidth);
      context.lineTo(i, context.canvas.height);
    }
    context.stroke();
  }

  private drawHorizontalLines(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'grey';
    context.lineWidth = 1;
    const halfWidth = context.canvas.width / 2;

    // dibuja las lineas horizontales para el lado negativo del eje x
    for (let i = 0; i > -context.canvas.height; i -= this.scale) {
      context.moveTo(-halfWidth, i);
      context.lineTo(context.canvas.width, i);
    }

    // dibuja las lineas horizontales para el lado positivo del eje x
    for (let i = 0; i < context.canvas.height; i += this.scale) {
      context.moveTo(-halfWidth, i);
      context.lineTo(context.canvas.width, i);
    }
    context.stroke();
  }

  private drawNumbers(context: CanvasRenderingContext2D): void {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;
    context.font = 'bold 14px Arial'; // Set font to bold
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    let yPositionOfNumbers = 16;
    let xPositionOfNumbers = -12;
    for (let actualX = this.scale; actualX < canvasWidth; actualX += this.scale) {
      context.fillText((actualX / this.scale).toString(), actualX, yPositionOfNumbers);
    }
    for (let actualX = -this.scale; actualX > 0 - (canvasWidth / 2); actualX -= this.scale) {
      context.fillText((actualX / this.scale).toString(), actualX, yPositionOfNumbers);
    }
    for (let actualY = this.scale; actualY < canvasHeight; actualY += this.scale) {
      context.fillText((-actualY / this.scale).toString(), xPositionOfNumbers, actualY);
    }
    for (let actualY = -this.scale; actualY > 0 - (canvasHeight / 2); actualY -= this.scale) {
      context.fillText((-actualY / this.scale).toString(), xPositionOfNumbers, actualY);
    }
  }
}