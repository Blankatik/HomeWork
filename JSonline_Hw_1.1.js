function multByFactor(value, multiplier = 3) {
     return value * multiplier
}

console.log(multByFactor(10, 2))

console.log(multByFactor(5))

setTimeout(function() {
     console.log('Відкладене повідомлення')
}, 500)

const multByFactor1 = function(value, multiplier = 3) {
     return value * multiplier
 }
console.log(multByFactor1(10, 2))

console.log(multByFactor1(5))

setTimeout(function() {
     console.log(console.log(multByFactor1(15, 4)))
}, 500)