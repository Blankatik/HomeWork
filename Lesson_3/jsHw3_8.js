/* Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров, а затем
последовательно выводит на экран его элементы. Обязательно нужно использовать рекурсию. Использовать цикл запрещено.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только не пустой
массив.

*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

```js
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty */


let Arr = [];
let i = 0;
function f(Arr) {
if (Arr.length == 0) {
     throw new Error ("parameter can't be an empty")
     } else {
          ff(Arr);
     }
}

function ff(Arr) {
     if (typeof Arr === 'object') {
          console.log(Arr[i])
          i++;
          if (i < Arr.length) {
          ff(Arr);
          }
     } else {
          throw new Error ('parameter type should be an array')
     }
}
f([1,2,3,]);
//f(1,2,3) // Error: parameter type should be an array
//f('Content') // Error: parameter type should be an array
//f([])