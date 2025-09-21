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

function kebabize(str) {
  str = str.replace(/\d/g, "");
  let lowerStr = str.toLowerCase().split("");
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== lowerStr[i]) {
      if (i !== 0) {
        str[i] = "-" + lowerStr[i];
      } else {
        str[i] = lowerStr[i];
      }
    }
  }
  return str.join("");
}

console.log(kebabize("camelsHave3Humps"));
