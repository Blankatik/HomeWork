/* Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно
содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number */


/* 
let a = 0;
let b = 0;
let c = 0;

function f() {
     let result;
     
          if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
               result = (a - b) / c;
               console.log(result);
          } else {
               throw new Error('all parameters type should be a Number');
          }
     }

f(9, 3, 2);
f('s',9,3); */

var sum = function(a, b, c) {
     if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
          return (a - b) / c;
     } else {
          throw new Error('all parameters type should be a Number');
     }
}
let result = sum(9, 3, 2);
console.log(result);
let result = sum('s',9,3);
