/* Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, где останутся лежать только положительные
числа `[1, 2, 3, 7]`. Создайте для этого вспомогательную функцию `isPositive(-3)`, которая параметром будет принимать
число и возвращать true, если число положительное, и false — если отрицательное. Данная функция должна обязательно содержать
проверку входного параметра, потому что принимать она может только число.

*Для добавление нового элемента в конец массива используйте метод push*

```js
// Пример использования функции isPositvie()
isPositive(-3) // вернет false
isPositive(3) // вернет true
isPositive('s') // Error: parameter type is not a Number

// Пример использования метода push
var arr = [8];
arr.push(2);
console.log(arr[1]); // выведет число 2 */
const Arr = [1, 2, -4, 3, -9, -1, 7];

function isPositive(num) {
     if (typeof num === 'number') {
          if (num > 0) {
               return true;
          } else {
               return false;
          }
     } else {
          throw new Error('parameter type is not a Number');
     }
          
}
/* 
isPositive(-5);
isPositive(3);
isPositive('s'); */

const possitiveArr = [];

function getPossitiveNumbers(Arr) {
     
     for (let i = 0; i < Arr.length; i++) {
          if (isPositive(Arr[i])) {
               possitiveArr.push(Arr[i]);
          }
     }

}
getPossitiveNumbers(Arr);
console.log(Arr);
console.log(possitiveArr);
