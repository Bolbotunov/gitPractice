// function orderWeight(strng) {
//   let a = strng.split(" ");
//   let sorted = a.map((item) => {
//     return item.split("");
//   });

//   console.log(sorted);

//   sorted.forEach((item) => {
//     item.reduce((acc, sum) => {
//       acc += Number(sum);
//       console.log(acc);
//     }, 0);
//   });
// }

// function orderWeight(strng) {
//   return strng
//     .trim()
//     .split(/\s+/)
//     .sort((a, b) => {
//       const sum = (s) =>
//         s.split("").reduce((acc, digit) => acc + Number(digit), 0);
//       const weightA = sum(a);
//       const weightB = sum(b);
//       if (weightA !== weightB) return weightA - weightB;
//       return a.localeCompare(b);
//     })
//     .join(" ");
// }

// console.log(orderWeight("56 65 74 100 99 68 86 180 90"));

class Parent {
  static surName = "sidorov";
  constructor() {
    this.surName = Parent.surName;
  }
  voice(sound) {
    console.log("thats voice of family", this.surName, sound);
  }
}

class Children extends Parent {
  year = 2000;
  constructor(hobby, year) {
    super();
    this.hobby = hobby;
    this.year = year;
  }
  voice(sound) {
    console.log("MY VOICE SON", this.surName, sound);
  }
  showYear() {
    console.log("year:", this.year);
  }
}

let parent1 = new Parent();
parent1.voice(": ----im DAD!!");

let children1 = new Children("football");
children1.voice(":---- im SON");
console.log(children1.year);
function addShowtext(obj) {
  return (obj.showText = () => console.log("show new text"));
}

addShowtext(children1);
children1.showText();
