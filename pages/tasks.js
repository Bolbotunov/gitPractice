// 1) название: Alphabetized   6 kyu
// ссылка: https://www.codewars.com/kata/alphabetized/train/javascript
// выход: alphabetized("The Holy Bible") // "BbeehHilloTy"

// function alphabetized(s) {
//   return s
//     .replace(/[^a-zA-Z]/g, "")
//     .split("")
//     .sort((a, b) => {
//       const lowerA = a.toLowerCase();
//       const lowerB = b.toLowerCase();
//       if (lowerA === lowerB) {
//         return 0;
//       }
//       return lowerA < lowerB ? -1 : 1;
//     })
//     .join("");
// }
// console.log(alphabetized("The Holy Bible"));

// 2) название: Array.diff   6 kyu
// ссылка: https://www.codewars.com/kata/array-dot-diff/train/javascript
// выход: If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

// function arrayDiff(a, b) {
//   let arr = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (b[j] === a[i] && !arr.includes(a[i])) {
//         arr.push(a[i]);
//       }
//     }
//   }
//   return a.filter((item) => !arr.includes(item));
// }

// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// 3) название: Loterry ticket   6 kyu
// ссылка: https://www.codewars.com/kata/lottery-ticket/train/javascript
// выход:  assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
// assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
// assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');

// function bingo(ticket, win) {
//   let wins = 0;
//   ticket.forEach((item) => {
//     let char = item[0].split("");
//     let win = char.some((ticket) => ticket.charCodeAt() === item[1]);
//     if (win) wins++;
//   });
//   return wins >= win ? "Winner!" : "Loser!";
// }

// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     2
//   )
// );

// 4) название: Write Number in Expanded Form   6 kyu
// ссылка: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// выход: 12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

// function expandedForm(num) {
//   let str = num.toString();
//   return str
//     .split("")
//     .map((item, index) => {
//       let zero = str.length - 1 - index;
//       if (item === "0") return "";
//       let value = item + "0".repeat(zero);
//       return index > 0 ? " + " + value : value;
//     })
//     .join("");
// }

// console.log(expandedForm(70304));

// 5) название: Count the smiley faces!  6 kyu
// ссылка: https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
// выход: countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Примеры допустимых смайликов: :) :D ;-D :~)
// Недопустимые смайлики: ;( :> :} :]

// function countSmileys(arr) {
//   const eyes = [":", ";"];
//   const nose = ["-", "~"];
//   const mouth = [")", "D"];
//   let count = 0;

//   for (const face of arr) {
//     if (
//       face.length === 2 &&
//       eyes.includes(face[0]) &&
//       mouth.includes(face[1])
//     ) {
//       count++;
//     } else if (
//       face.length === 3 &&
//       eyes.includes(face[0]) &&
//       nose.includes(face[1]) &&
//       mouth.includes(face[2])
//     ) {
//       count++;
//     }
//   }

//   return count;
// }

// 6) название: Equal Sides Of An Array  6 kyu
// ссылка: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// выход: Наименьший индекс N, при котором сторона слева от N равна стороне справа от N.
// Если вы не найдете индекс, соответствующий этим правилам, то вы вернете -1.

// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let left = arr.slice(0, i).reduce((a, b) => a + b, 0);
//     let right = arr.slice(i + 1).reduce((a, b) => a + b, 0);
//     if (left === right) return i;
//   }
//   return -1;
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

// 7) название: Kebabize 6 kyu
// ссылка: https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
// выход: "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

// function kebabize(str) {
//   str = str.replace(/\d/g, "");
//   let lowerStr = str.toLowerCase().split("");
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== lowerStr[i]) {
//       if (i !== 0) {
//         str[i] = "-" + lowerStr[i];
//       } else {
//         str[i] = lowerStr[i];
//       }
//     }
//   }
//   return str.join("");
// }

// console.log(kebabize("camelsHave3Humps"));

// 8) название: Find the most same sum value of pairs 5 kyu
// ссылка: https://www.codewars.com/kata/5806dc10a4647e6493000152/train/javascript
// выход:arr1=[1,2,3,4,5]
// arr2=[9,8,0,0,0]
// findPair(arr1,arr2) should return [[1,9],[2,8]]

// function findPair(arr1, arr2) {
//   let maxNum = 0;
//   let maxIndex = 0;
//   let arr = arr1.map((item, index) => {
//     return [item, arr2[index]];
//   });
//   return arr.map((item, index) => {
//     let sum = item[0] + item[1];
//     if (sum > maxNum) {
//       maxNum = sum;
//       maxIndex = index;
//     }
//     console.log(maxNum, maxIndex);
//     return sum;
//   });
// }

// function findPair(arr1, arr2) {
//   const pairs = arr1.map((a, i) => [a, arr2[i]]);
//   const sumMap = new Map();

//   for (const [a, b] of pairs) {
//     const sum = a + b;
//     if (!sumMap.has(sum)) sumMap.set(sum, []);
//     sumMap.get(sum).push([a, b]);
//   }
//   const repeatedGroups = [...sumMap.entries()].filter(
//     ([_, group]) => group.length > 1
//   );

//   if (repeatedGroups.length === 0) return [];

//   repeatedGroups.sort((a, b) => {
//     const countDiff = b[1].length - a[1].length;
//     if (countDiff !== 0) return countDiff;
//     return b[0] - a[0];
//   });

//   return repeatedGroups[0][1];
// }

// console.log(findPair([1, 2, 3, 4, 5], [9, 8, 0, 0, 0]));

// 9) название: Sum The Tree 6 kyu
// ссылка: https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript
// выход:Напишите функцию, возвращающую сумму всех значений, включая корень.
// Отсутствие узла будет отмечено значением null.
// {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}}; - 13

// function sumTheTreeValues(root) {
//   let sum = 0;
//   for (let key in root) {
//     if (typeof root[key] !== "object") {
//       sum += root[key];
//     } else if (root[key] !== null) {
//       sum += sumTheTreeValues(root[key]);
//     }
//   }
//   return sum;
// }

// console.log(
//   sumTheTreeValues({
//     value: 10,
//     left: { value: 1, left: null, right: null },
//     right: { value: 2, left: null, right: null },
//   })
// );

// 10) название: Object depth 6 kyu
// ссылка: https://www.codewars.com/kata/5aa1ca484a6b34f9a000011e/train/javascript
// выход: depth({a: 1, b: {c: 2}}), 2

// function depth(obj) {
//   var d = 0;
//   if (obj === null || Array.isArray(obj)) return 0;
//   if (typeof obj !== "object") return 0;
//   const keys = Object.keys(obj);
//   if (keys.length === 0) return 0;

//   for (let key in obj) {
//     if (
//       typeof obj[key] === "object" &&
//       obj[key] !== null &&
//       !Array.isArray(obj[key])
//     ) {
//       d = Math.max(d, depth(obj[key]));
//     }
//   }
//   return 1 + d;
// }

// console.log(depth({ a: 1, b: { c: 2 } }));

// indexEqualsValue([-8,0,2,5]), 2 );

// function indexEqualsValue(a) {
//   let myMap = Object.entries(a);
//   for (const [indexStr, value] of myMap) {
//     const index = Number(indexStr);
//     if (value === index) {
//       return value;
//     }
//   }
// }

console.log(indexEqualsValue([-3, 0, 1, 3, 10]));
