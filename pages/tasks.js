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

function arrayDiff(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] === a[i] && !arr.includes(a[i])) {
        arr.push(a[i]);
      }
    }
  }
  return a.filter((item) => !arr.includes(item));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
