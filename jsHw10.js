/*
#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов. */
var arr = [6,5,4,3,2,1];
function bubbleSortArr (arr) {//пузирьковий метод найбільш простий і лише для навчання.
     for (let n = 0; n < arr.length; n++) {
          for (let i = 0; i < arr.length - 1 - n; i++) {// - 1 - n  це для того, щоб не сортувати вже відсортоване(ні) значення з ітерацію 
               if (arr[i] > arr[i + 1]) {// для порівняння перших двух значень мжі собою і якщо перше більше то перемістити на місце другого, і так далі наступні два значення (2 і 3 значення по порядку (з 1 і 2 індексом у масиві))
                    const buff = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = buff
               }
           }
     }

     console.log(arr)
}
bubbleSortArr(arr);
