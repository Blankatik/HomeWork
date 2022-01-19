/* Написать код который посчитает сумму всех элементов в масиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов. */

//РІШЕННЯ:
function sumArr() {
     var arr = [1, 2, 3, 4];
     let sum = 0;

     for (let i = 0; i < arr.length; i++) {
     sum = sum + arr[i]
     }
     console.log('sum:', sum);
}
sumArr()

/* 
var arr = [1, 2, 3, 4];
function count (arr) {
     let sum = 0;
     arr.forEach(function(item){
          sum += item
     })
     return sum;
}
console.log(count(arr)); */

