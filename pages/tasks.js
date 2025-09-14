// 1) название: Alphabetized   6 kyu
// ссылка: https://www.codewars.com/kata/alphabetized/train/javascript
// выход: alphabetized("The Holy Bible") // "BbeehHilloTy"

function alphabetized(s) {
  return s
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .sort((a, b) => {
      const lowerA = a.toLowerCase();
      const lowerB = b.toLowerCase();
      if (lowerA === lowerB) {
        return 0;
      }
      return lowerA < lowerB ? -1 : 1;
    })
    .join("");
}
console.log(alphabetized("The Holy Bible"));

// 1) название: Alphabetized   6 kyu
// ссылка: https://www.codewars.com/kata/alphabetized/train/javascript
// выход: alphabetized("The Holy Bible") // "BbeehHilloTy"
