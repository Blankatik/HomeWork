/* Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно
содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
 */
function f(messege) {
     let result;
     if (typeof messege === 'number') {
          result = messege**3;
          console.log(result); 
     } else {
          throw new Error('messege type is not a number');
     }
}
f(2)
f('content');

