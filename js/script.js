/* N1
 Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
%Телефон%, %Почта%.». */

let name = prompt('Как вас зовут?');
let age = prompt('Ваш возраст?');
let city = prompt('Ваш город?');
let phone = prompt('Укажите ваш телефон?');
let email = prompt('Укажите почту?');
let company = prompt('Название компании, где вы работаете?');

let data = `Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`;

alert(data);

document.write(data);

/* N2
Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.». */


let birth = 2021 - age;

alert(`${name} родился в ${birth} году.`);


/* N3 
Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме 
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */


let numStr = "123123";

console.log(numStr,typeof(numStr));

let sum1 = +numStr[0] + +numStr[1] + +numStr[2];
let sum2 = Number(numStr[3]) + Number(numStr[4]) + Number(numStr[5]);

console.log(sum1, sum2);

console.log(sum1 == sum2 ? 'Да' : 'Нет');

/* №4
Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 1, 0, -3. */

let a = 1;

if (a > 0) console.log('Верно');
else console.log('Неверно');

a = 0;

if (a > 0) console.log('Верно');
else console.log('Неверно');

a = -1;

if (a > 0) console.log('Верно');
else console.log('Неверно');



a = null;

switch (true) {
    case (a > 0):
        console.log('Верно');
    break;
    case (a < 0 || a == 0):
        console.log('Неверно');
    break;
    default: 
        console.log('Неопределенное значение')
    break;
}

/* N5 
Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, 
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в 
квадрат. */

a = 10;
let b = 2;

let summ_ab = a + b;
let differ_ab = a - b;
let multi_ab = a * b;
let division_ab = a / b;

console.log(`Сумма = ${summ_ab}, разность = ${differ_ab}, произведение = ${multi_ab}, частное = ${division_ab}`);

if (summ_ab > 1) console.log(summ_ab ** 2);


/* №6
Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 
'Неверно'. */

if ((a > 2 && a <11) || b >= 6 && b <14) console.log('Верно');
else console.log('Неверно');


/* №7
В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую). */

let n = 44;

let res = " ";

switch (true) {
    case (n >= 0 && n <= 14):
        res = 'первая четверть часа';
    break;
    case (n >= 15 && n <= 29):
        res = 'вторая четверть часа';
    break;
    case (n >= 30 && n <= 44):
        res = 'третья четверть часа';
    break;
    case (n >= 45 && n <= 59):
        res = 'четвертая четверть чаcа';
    break;
}

console.log(res);


/* №8 
В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

let day = 200;

let result = '';

/*
if (day > 0 && day <= 10) {
    result = 'Первая декада';
} else if (day > 10 && day <= 20) {
    result = 'Вторая декада';
} else if (day > 20 && day <= 31) {
    result = 'Третья декада';
} 
*/

switch (true) {
    case (day > 0 && day <= 10):
        result = 'Первая декада';
    break;
    case (day > 10 && day <= 20):
        result = 'Вторая декада';
    break;
    case (day > 20 && day <= 31):
        result = 'Третья декада';
    break;
}

console.log(result);


/* №9
Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно */

let days = 172;

//let years = Math.ceil (days / 365);
let years = days / 365;
let month = years *12;
let weeks  = month * 31/7;
let hours = days *24;
let mins = hours * 60;
let seconds = mins * 60;

console.log (`
Days: ${days},
years: ${years},
month: ${month},
weeks: ${weeks},
hours: ${hours},
mins: ${mins},
seconds: ${seconds}
`)

if (years < 1) console.log('Меньше года');
if (month < 1) console.log('Меньше месяца');
if (weeks < 1) console.log('Меньше недели');


/* №10
Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch. */

let year = 256;
let mont = year / 12;
let winter = 'Зима';
let spring = 'Весна';
let summer = 'Лето';
let autumn = 'Осень';
let answer = ' ';


switch (true) {
    case (day > 0 && day < (mont * 2) || day <= 256 && day >= (mont * 11)):
        answer = winter;
    break;
    case (day >= (mont * 2) && day < (mont * 5)):
        answer = spring;
    break;
    case (day >= (mont * 5) && day < (mont * 8)):
        answer = summer;
    break;
    case (day >= (mont * 8) && day < (mont * 11)):
        answer = autumn;
    break;
}


console.log(answer);