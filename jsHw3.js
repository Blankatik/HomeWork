// Перепишите код, заменив оператор `switch` на оператор  `if..else`:
/* let val = 'd'
switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
} */

//РІШЕННЯ
let val = 'i'
if (val == 'a') {
     console.log('a');
} else {
     if (val == 'b') {
     console.log('others');
       } else {
          if (val == 'c') {
           console.log('others');
              } else {
                   if (val == 'd') {
                    console.log('others');
                    } else {
                         if (val == 'e') {
                         console.log('others');
                         } else {
                                console.log('unknown');
                               }
                    }      }
              }
       }


/*        
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}
let val = 'd'
if (val = 'a') {
     console.log('a');
} else (val = 'b') {
     console.log('others');
} else (val = 'c') {
     console.log('others');
} else if (val = 'd') {
     console.log('others');
} else if (val = 'e') {
     console.log('others');
} else (val = default:
     console.log( 'unknown' ));
} */