/* Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно
содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number */

function f() {
     let result = 0;

     for (i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] === 'number') {
               result = 

          } else {
               throw new Error('arguments type is not a number');
          }
     }
}