let x = 1
x = -x // унарный оператор
console.log( x )

let y = 3 // Бинарный оператор
x = 1
console.log (y - x)


// Сложение +,
// Вычитание -,
// Умножение *,
// Деление /,
// Взятие остатка от деления %,
// Возведение в степень **.

//Взятие остатка %

console.log( 5 % 2 ) // остаток от деления 1
console.log( 8 % 5 )
console.log( 15 % -2 )

//Возведение в степень **

console.log( 2 ** 2 ) // 4  (2 умножено на себя 2 раза)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
console.log( 2 ** 4 ); // 8  (2 * 2 * 2 * 2, 4 раза)

console.log( 4 ** (1/2)) // 2 (степень 1/2 эквивалентна взятию квадратного корня)
console.log( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

// Сложение строк при помощи бинарного +
let str = 'hello' + 'world'
console.log(str)

// Приведение к числу, унарный +

let dog = '2'
let cat = '3'

console.log(+dog + + cat) // привели стороки 2 и 3 к числу

// ЗАДАЧИ

// Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1

let c = ++a; // с = 2 перфиксная форма  a + 1 = c
let d = b++; // d = 1 постфиксная форма,  но значение b + 1 = 2
console.log('a =', a)
console.log('b =', b)
console.log('c =', c)
console.log('d =', d)

// Чему будут равны переменные a и x после исполнения кода в примере ниже?

a = 2

let z = 1 + (a *= 2) // результат выражения будет равет 5
console.log('z =',z)

// // Исправьте сложение
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
//
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
//
// В чём ошибка? Исправьте её. Результат должен быть 3.

let o = ('Первое число?', '1');
let p = ('Второе число?', '2');

console.log(o + p); // 12 так как выполняеться сложение строк необходима привести к числам используя +
console.log(+o + +p) // 3

