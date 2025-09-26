// к 26.09.2025

// 1) Функции дана строка, состоящая из строчных букв.
//  Разбейте строку на максимально возможное количество непустых подстрок так,
//  чтобы каждый символ встречался только в одной подстроке.
//  Верните список длин полученных подстрок.

// Примеры
// "abbccc" -> [1, 2, 3]
// // "a", "bb", "ccc"

// "abbacdceef" -> [4, 3, 2, 1]
// // "abba", "cdc", "ee", "f"

// "abacded" -> [3, 1, 3]
// // "aba", "c", "ded"

// "abcdea" -> [6]
// // "abcdea", потому что первая буква совпадает с последней.

// function substrings(str) {
//   let result = [];
//   let firstChar;
//   let lastIndex;
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     firstChar = str[i];
//     lastIndex = str.findLastIndex((item) => {
//       return item === firstChar;
//     });
//     result.push(str.slice(i, lastIndex + 1).join("").length);
//     i = lastIndex;
//   }
//   return result;
// }

// console.log(substrings("abbccc"));
// console.log(substrings("abbacdceef"));
// console.log(substrings("abacded"));
// console.log(substrings("abcdea"));

// 2) Дополните решение так, чтобы оно функция возвращала значение true,
// если содержит повторяющиеся значения аргументов.
//  В функцию можно передать любое количество аргументов.
// Передаваемые значения массива могут быть только строками или числами.
// Допустимые возвращаемые значения — true и false.

// Примеры:

// solution(1, 2, 3) --> false
// solution(1, 2, 3, 2) --> true
// solution('1', '2', '3', '2') --> true

// function solution(...arr) {
//   let arrSet = new Set([...arr]);
//   return arrSet.size !== arr.length;
// }

// console.log(solution(1, 2, 3));
// console.log(solution(1, 2, 3, 2));
// console.log(solution("1", "2", "3", "2"));
