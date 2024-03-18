//import { FirstGradeFunction } from './functions/first_grade_function.js';
//import { SecondGradeFunction } from './functions/second_grade_function.js';
import { Sin } from './functions/sin.js';
import { Exponential } from './functions/exponential.js';
import { Lineal } from './functions/lineal.js';
import { SquareRoot } from './functions/square_root.js';
import { Polynomial } from './functions/polinomial.js';

import { View } from './view.js';

// TODO: ARREGLAR TODAS LAS FUNCIONES, TENIENDO EN CUENTA QUE EL EJE DE COOR ESTA EN EL CENTRO DEL CANVAS (LINEA Y SENO TOCADAS)

function main() {
  let scale = 80;
  let view: View = new View(scale);
  let selectedFunction: string = 'lineal'; // Change this to the desired function name

  view.initialize();

  switch (selectedFunction) {
    case 'lineal':
      const lineal = new Lineal(scale, 2, 0);
      view.drawFunction(lineal);
      break;
    case 'exponential':
      const exponential = new Exponential(scale, 1, 2, 0);
      view.drawFunction(exponential);
      break;
    case 'sin':
      const sin = new Sin(scale, 1, 1, 0);
      view.drawFunction(sin);
      break;
    case 'square':
      const square = new SquareRoot(scale, 1, 0);
      view.drawFunction(square);
      break;
    case 'polynomial':
      const polynomial = new Polynomial(scale, [1, 0, 1]);
      view.drawFunction(polynomial);
      break;
    default:
      console.log('Invalid function selection');
  }
}

main();