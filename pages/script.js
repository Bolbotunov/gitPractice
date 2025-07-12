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

// class Parent {
//   static surName = "sidorov";
//   constructor() {
//     this.surName = Parent.surName;
//   }
//   voice(sound) {
//     console.log("thats voice of family", this.surName, sound);
//   }
// }

// class Children extends Parent {
//   year = 2000;
//   constructor(hobby, year) {
//     super();
//     this.hobby = hobby;
//     this.year = year;
//   }
//   voice(sound) {
//     console.log("MY VOICE SON", this.surName, sound);
//   }
//   showYear() {
//     console.log("year:", this.year);
//   }
// }

// let parent1 = new Parent();
// parent1.voice(": -d-000-im DAD!!");

// let children1 = new Children("football");
// children1.voice(":55-- im SON");
// console.log(children1.year);
// function addShowtext(obj) {
//   return (obj.showText = () => console.log("show new text"));
// }

class NewArray extends Array {
  getLength() {
    console.log(this.length);
  }
  pushNumbers() {
    this.push(10, 20, 30);
    console.log(this);
  }
}

let myArray = new NewArray(1, 2, 3, 4, 5);

myArray.getLength();
myArray.pushNumbers();

class newString extends String {
  getUpper() {
    return this[0].toUpperCase() + this.slice(1);
  }
}

let myString = new newString("oleg");
console.log(myString.getUpper());
