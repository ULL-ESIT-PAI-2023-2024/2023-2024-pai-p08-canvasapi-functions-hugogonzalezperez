
export class Cube {
  private canvas: HTMLCanvasElement = document.getElementById('cube') as HTMLCanvasElement;
  private context: CanvasRenderingContext2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  private size: number = 0;

  /**
   * Clase que incializa el cubo de 3 dimensiones
   */
  initialize(size: number) {
    this.size = size;
    this.drawCube();
  }

  // Funcion que se encarga de dibujar el cubo en el canvas
  drawCube() {
    // Establecer estilos
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 3;

    const centerX = this.context.canvas.width / 2;
    const centerY = this.context.canvas.height / 2;
    const size = this.size;
    const halfSize = size / 2;
    const diagonal = size / 3;

    //Dibujo el cuadrado de la cara principal
    this.context.beginPath();
    this.context.moveTo(centerX - halfSize, centerY - halfSize);
    this.context.lineTo(centerX + halfSize, centerY - halfSize);
    this.context.lineTo(centerX + halfSize, centerY + halfSize);
    this.context.lineTo(centerX - halfSize, centerY + halfSize);
    this.context.closePath();

    // Dibujo la cara de arriba
    this.context.moveTo(centerX - halfSize, centerY - halfSize);
    this.context.lineTo(centerX - halfSize + diagonal, centerY - halfSize - diagonal);
    this.context.lineTo(centerX + halfSize + diagonal, centerY - halfSize - diagonal);
    this.context.lineTo(centerX + halfSize, centerY - halfSize);

    // dibujo la cara derecha
    this.context.moveTo(centerX + halfSize + diagonal, centerY - halfSize - diagonal);
    this.context.lineTo(centerX + halfSize + diagonal, centerY + halfSize - diagonal);
    this.context.lineTo(centerX + halfSize, centerY + halfSize);
    
    this.context.stroke();
    this.context.beginPath();
    this.context.setLineDash([5, 5]); // Establecer línea discontinua
    this.context.strokeStyle = 'gray'; // Cambiar color a gris para simular aristas ocultas

    // Dibujo la cara de atrás con discontinuas
    this.context.moveTo(centerX - halfSize, centerY + halfSize);
    this.context.lineTo(centerX - halfSize + diagonal, centerY + halfSize - diagonal);
    this.context.lineTo(centerX - halfSize + diagonal, centerY - halfSize - diagonal);
    this.context.moveTo(centerX - halfSize + diagonal, centerY + halfSize - diagonal);
    this.context.lineTo(centerX + halfSize + diagonal, centerY + halfSize - diagonal);

    this.context.stroke();
    this.context.setLineDash([]);

    // Dibujar el vértice
    this.context.beginPath();
    this.context.arc(centerX, centerY, 3, 0, Math.PI * 2);
    this.context.fillStyle = 'red';
    this.context.fill();
    this.context.closePath();
  }
}