//##Задача 2

//Перепишите `if..else` с использованием нескольких операторов `?`.

//Для читаемости — оформляйте код в несколько строк.

//js
var message;
//let login = 'Pitter'
if (login == 'Pitter') {
message = 'Hi';
} else if (login == 'Owner') {
message = 'Hello';
} else if (login == '') {
message = 'unknown';
} else {
message = '';
}

var message = 
let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';
///
var login = prompt('Your name?', '');
var message = (login == 'Pitter') ? 'Hi' :
    (login == 'Owner') ? 'Hello' : ''
alert(message);