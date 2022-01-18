/* Написать код который посчитает сумму всех элементов в масиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов. */
//РІШЕННЯ:
var arr = [1, 2, 3, 4];
function count (arr) {
     let sum = 0;
     arr.forEach(function(item){
          sum += item
     })
     return sum;
}
console.log(count(arr));
