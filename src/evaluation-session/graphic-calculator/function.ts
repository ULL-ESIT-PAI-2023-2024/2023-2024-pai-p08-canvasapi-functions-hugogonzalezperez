/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc function.ts
 * Fichero con la interfaz Function que se encarga de actuar como padre de las funciones.
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

export interface Function {
  evaluate(x: number): number;
  toString(): string;
  draw(context: CanvasRenderingContext2D): void;
}