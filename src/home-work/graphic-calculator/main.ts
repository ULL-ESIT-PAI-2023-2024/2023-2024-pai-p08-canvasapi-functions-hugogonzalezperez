import { Sin } from './functions/sin.js';
import { Cos } from './functions/cos.js';
import { Tan } from './functions/tan.js';
import { Exponential } from './functions/exponential.js';
import { Lineal } from './functions/lineal.js';
import { SquareRoot } from './functions/square_root.js';
import { Polynomial } from './functions/polinomial.js';

import { View } from './view.js';

function main() {
  let scale = 80;
  let view: View = new View(scale);
  let selectedFunction: string = 'lineal';

  view.initialize();

  switch (selectedFunction) {
    case 'lineal':
      const lineal = new Lineal(scale, 2, 0); // f(x) = ax + c
      view.drawFunction(lineal);
      break;
    case 'exponential':                     // f(x) = a * b^x + c
      const exponential = new Exponential(scale, 1, 2, 0);  
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
      const polynomial = new Polynomial(scale, [1, 1, 0, 0]); 
      view.drawFunction(polynomial);
      break;
    default:
      console.log('Invalid function selection');
  }
}

main();