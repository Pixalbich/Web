/* Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
преобразовать введенное пользователем значение в соответствующую температуру 
в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8

Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые

были получены ранее.

Формула перевода градусов Цельсия в градусы Фаренгейта:

градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Примечания: Пользователь всегда вводит корректное число.

Советую округлить значение после рассчетов, так как в некоторых случаях может получиться "длинная дробь". */

// function Farenheit(temperC){
//     return Math.round(((9 / 5) * temperC + 32)*10)/10;
// }
// alert(`Цельсий: ${temperC} , Фаренгейт: ${Farenheit(temperC)}`);

/* не стал округлять градусы цельсия, округлил до 1 знака после запятой, 
можно добавить промпт который спрашивает до какого знака округлить(делал так на С#) */

let temperC = prompt("Введите температуру в градусах цельсия:");
temperF = (9 / 5) * temperC + 32;
temperF = Math.round(((9 / 5) * temperC + 32)*10)/10;
alert(`Цельсий: ${temperC} , Фаренгейт: ${temperF}`);