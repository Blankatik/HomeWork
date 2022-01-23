/* Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым.
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number */



function f() {
     let result = 0;
     for (var i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] === 'number') {
               result = result + arguments[i];
          } else {
               throw new Error('arguments type is not a number');
          }
     }
     console.log('sum:', result);
}
f(10, 5, 15);