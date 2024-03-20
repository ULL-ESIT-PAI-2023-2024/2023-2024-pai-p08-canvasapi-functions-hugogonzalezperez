/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Hugo González Pérez
 * @since Mar 20 2024
 * @desc main.ts
 * Fichero que contiene la función main() con el código principal del programa
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md}
 */

import { Sin } from './functions/sin.js';
import { Cos } from './functions/cos.js';
import { Tan } from './functions/tan.js';
import { Exponential } from './functions/exponential.js';
import { Lineal } from './functions/lineal.js';
import { SquareRoot } from './functions/square_root.js';
import { Polynomial } from './functions/polinomial.js';

import { Lissajous } from './functions/lissajous.js';

import { View } from './view.js';

/**
 * Función principal del programa
 */
function main() {
  let scale = 60;
  let view: View = new View(scale);
  let selectedFunction: string = 'lissa';

  view.initialize();

  switch (selectedFunction) {
    case 'lineal':
      const lineal = new Lineal(scale, 2, 0); // f(x) = ax + c
      view.drawFunction(lineal);
      break;
    case 'exponential':                     // f(x) = b^x + c
      const exponential = new Exponential(scale, 2, 0);  
      view.drawFunction(exponential);
      break;
    case 'sin':
      const sin = new Sin(scale, 1, 1, 0);  // f(x) = a * sen( bx + c )
      view.drawFunction(sin);
      break;
    case 'cos':
      const cos = new Cos(scale, 1, 1, 0);  // f(x) = a * cos( bx + c )
      view.drawFunction(cos);
      break;
    case 'tan':
      const tan = new Tan(scale, 1, 1, 0);  // f(x) = a * tan( bx + c )
      view.drawFunction(tan);
      break;
    case 'square_root':                     // f(x) = a * sqrt(x) + c
      const square = new SquareRoot(scale, 1, 0); 
      view.drawFunction(square);
      break;
    case 'polynomial':                      // f(x) = a_n * x^n + a_n-1 * x^n-1 + ... + a_1 * x + a_0
      const polynomial = new Polynomial(scale, [1, 3, 7, -1, 0]); 
      view.drawFunction(polynomial);
      break;
    case 'lissa':
      const lissajous = new Lissajous(scale, 9, 8, 0); // f(x) = a * sin( bx + c )
      view.drawFunction(lissajous);
      break;
    default:
      console.log('Invalid function selection');
  }
}

main();