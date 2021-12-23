let value = true
console.log(typeof value) //boolean

value = String(value) // преобразовываем в строку
console.log(typeof value)

let str = '123'
console.log(str)

let num = Number(str)
console.log(typeof num)
let age = Number("текст который не может быть перобразован в число ")
console.log(age)
console.log(typeof age)

//Логическо перобразование

console.log( Boolean(1)) //true
console.log( Boolean(0)) // false

console.log( Boolean('hello')) //true
console.log( Boolean('')) // false