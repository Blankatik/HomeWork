/* Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое
     делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку
     входного параметра, потому что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0 */

let Arr = [];
function getDivisors(num) {
     if (typeof num === "number") {
          moreThenZero(num);
          console.log(Arr);
     } else {
          throw new Error ('parameter type is not a Number');
     }
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0 */


function moreThenZero(num) {
     let result;
     if (num > 0) {
          for (let i = 1; i <= num; i++) {
               if (num % i === 0) {
               Arr.push(i);
               }
          }
          
     } else {
          throw new Error ("parameter can't be a 0");
     }
}
/* moreThenZero(12);
moreThenZero(0); */