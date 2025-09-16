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

function bingo(ticket, win) {
  let wins = 0;
  ticket.forEach((item) => {
    let char = item[0].split("");
    let win = char.some((ticket) => ticket.charCodeAt() === item[1]);
    if (win) wins++;
  });
  return wins >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
);
