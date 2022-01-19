/* 
Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов. */
/* for (var arr = 1; arr < 5; arr++) {

     if (!(arr % 2)) {
       alert( arr );
     }
   
   } */
   var arr = [1,2,3,4];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);