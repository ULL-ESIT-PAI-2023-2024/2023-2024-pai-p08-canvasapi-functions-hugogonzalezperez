export interface Function {
  evaluate(x: number): number;
  toString(): string;
  draw(context: CanvasRenderingContext2D): void;
}