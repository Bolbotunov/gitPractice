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

// class NewArray extends Array {
//   getLength() {
//     console.log(this.length);
//   }
//   pushNumbers() {
//     this.push(10, 20, 30);
//     console.log(this.flat());
//   }
//   sum() {
//     return this.reduce((acc, item) => {
//       return (acc += item);
//     }, 0);
//   }
// }

// let myArray = new NewArray(1, 2, 3, 4);

// myArray.getLength();
// myArray.pushNumbers();
// console.log(myArray.sum());

// class newString extends String {
//   getUpper() {
//     return this[0].toUpperCase() + this.slice(1);
//   }
// }

// let myString = new newString("oleg");
// let a = myString.getUpper();
// console.log(a.split(""));

// let mySecondArr = new NewArray(a.split(""));
// mySecondArr.getLength();
// mySecondArr.pushNumbers();

// const ageMixin = {
//   getAge(age) {
//     console.log(`my Age ${age} - ${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, ageMixin);

// const u = new User("Oleg");
// u.getAge(25); // my Age 25 - Oleg

// let list = document.querySelector(".list");
// let words = ["apple", "banana", "orange"];
// const ul = document.createElement("ul");
// words.forEach((item) => {
//   let li = document.createElement("li");
//   li.textContent = item;
//   ul.appendChild(li);
// });

// list.appendChild(ul);

// let text = "hello";

// function show() {
//   console.log(text);
// }

// function debounce(a, delay) {
//   return setTimeout(a, delay);
// }
// //=========================

// function formatWords(words) {
//   if (!words) return "";
//   let filteredArr = words.filter((item) => {
//     if (Array.isArray(item)) {
//       formatWords(item);
//     } else {
//       return Boolean(item);
//     }
//   });
//   if (filteredArr.length > 1) {
//     filteredArr.splice(
//       filteredArr.length - 2,
//       2,
//       `${filteredArr[filteredArr.length - 2]} and ${
//         filteredArr[filteredArr.length - 1]
//       }`
//     );
//   } else {
//     filteredArr.join("");
//   }

//   return filteredArr.join(", ");
// }

// function deleteDigit(n) {
//   n = String(n).split("");
//   let max = 0;

//   for (let i = 0; i < n.length; i++) {
//     let a = n.slice(0, i) + n.slice(i + 1);

//     a = a.split(",").join("");
//     if (a > max) {
//       max = a;
//     }
//   }
//   console.log(typeof max);
//   return String(max);
// }
// console.log(deleteDigit(152));

// function scoreboard(string) {
//   let arr = [];
//   const phrases = {
//     nil: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };
//   string.split(" ").forEach((item) => {
//     if (item in phrases) {
//       arr.push(phrases[item]);
//     }
//   });

//   return arr;
// }

// console.log(scoreboard("Arsenal just conceded another goal, two nil"));

// function findUnique(numbers) {
//   let obj = {};

//   numbers.forEach((item) => {
//     obj[item] = (obj[item] || 0) + 1;
//   });

//   let finishArr = Object.entries(obj).filter(([key, count]) => count === 1);
//   return Number(finishArr[0][0]); // [ ['9', 1] ] → '9' → 9
// }

// console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])); // 9

// function findUnique(numbers) {
//   const freq = new Map();

//   for (const num of numbers) {
//     freq.set(num, (freq.get(num) || 0) + 1);
//   }

//   for (const [num, count] of freq.entries()) {
//     if (count === 1) return num;
//   }

//   return null; // если ни одно число не уникально
// }

// function search(files) {
//   for (let key in files) {
//     if (typeof files[key] === "object") {
//       let path = search(files[key]);
//       return `${key}/${path}`
//     } else {
//       return files[key];
//     }
//   }
//   // throw new Error('No files!');
// }

// console.log(
//   search({
//     "New folder1": {
//       "New folder1.1": {},
//     },
//     "New folder (2)": {
//       "New folder (2.2)": {
//         "funnyjoke.txt": "lol i pranked you!!!",
//       },
//     },
//     "New folder (3)": {},
//   })
// );

// //'New folder (1)/New folder/funnyjoke.txt'
//================================================================================

// Уровень 1: Базовая задержка
// Задача: Напиши функцию delay(ms), которая возвращает Promise, завершающийся через заданное число миллисекунд.

// Цель: базовая работа с промисом и setTimeout.

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// function delay(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let random = Math.random() * 10;
//       if (random > 5) {
//         res("resolve ok");
//       } else {
//         rej("reject!!!!");
//       }
//     });
//   }, ms);
// }

// delay(2000)
//   .then((res) => console.log(res, "response then"))
//   .catch((rej) => console.log("reject!!! then"));

// function getData(ms) {
//   return new Promise((res, rej) => {
//     let a = true;
//     if (a) {
//       setTimeout(() => res("ok"), ms);
//     } else {
//       rej("No");
//     }
//   });
// }

// async function test() {
//   let response = await getData(2000);
//   console.log(response);
// }

// test();

// let dataFromServer = {
//   server: "5484",
//   port: "804",
//   status: "ready",
// };

// function getData(data) {
//   console.log("request...");
//   setTimeout(() => {
//     console.log("loading data...");
//     setTimeout(() => {
//       data.modyfied = true;
//       console.log("data reveiving complete:", data);
//     }, 2000);
//   }, 2000);
// }

// function getData(data) {
//   console.log("request...");
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("loading data...");
//       resolve(data);
//     }, 2000);
//   });
// }
// getData(dataFromServer)
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         reject(data);
//       }, 2000);
//     });
//   })
//   .then((clientData) => {
//     console.log("data received", clientData);
//     return clientData;
//   })
//   .then((newData) => {
//     newData.newKey = "add new key";
//     console.log(newData);
//   })
//   .catch((err) => console.log("error!!!", err));

// function sleep(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => res(), ms);
//   });
// }

// sleep(0).then(() => console.log("after 0 sec"));
// sleep(1000).then(() => console.log("after 1 sec"));
// sleep(2000).then(() => console.log("after 2 sec"));
// sleep(3000).then(() => console.log("after 3 sec"));

// Promise.all([sleep(1000), sleep(5000)]).then(() => {
//   console.log("all promises");
// });

// Promise.race([sleep(1000), sleep(5000)]).then(() => {
//   console.log("race promises");
// });

// const url = "https://jsonplaceholder.typicode.com/posts/1";

//========================GET GET GET==========================

// function getData(ms, url) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       fetch(url)
//         .then((data) => data.json())
//         .then((data) => console.log("get data:", data));
//     }, ms);
//     res();
//   });
// }

// getData(1500, url);

// async function getData(url) {
//   try {
//     let response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("http bad");
//     }
//     let data = await response.json();
//     console.log("method get", data);
//   } catch (error) {
//     console.log("error!!! :", error);
//   }
// }
// getData(url);
//========================POST POST POST ==========================

// function getData(url, ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: "MyTestPost", id: 888 }),
//       })
//         .then((res) => res.json())
//         .then((data) => res(data));
//     }, ms);
//   });
// }

// getData(url, 3000).then((data) => console.log("get POST:", data));

// async function getData(url) {
//   let response = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: "My second Title", id: 555 }),
//   });
//   let myData = await response.json();
//   console.log("sentData", myData);
//   return myData;
// }

// getData(url).then((data) => console.log("then:", data.id));

//========================DELETE ==========================

// function deleteItem(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(url, { method: "DELETE" }).then((resolve) =>
//         console.log("item deleted", resolve.status)
//       );
//     }, 2000);
//   });
// }
// deleteItem(url);

// async function deleteItem(url) {
//   const response = await fetch(url, { method: "DELETE" });
//   const data = await response.json();
//   return data;
// }

// deleteItem(url).then((data) => {
//   console.log("✅ Удалено:", data);
// });

// let one = Promise.resolve().then(() => console.log("success"));
// let two = new Promise((res) => {
//   setTimeout(() => res("delay 2000"), 2000);
// }).then((res) => console.log(res));
// let three = Promise.reject().then(() => console.log("error"));

// async function getResult() {
//   try {
//     await Promise.all([one, two, three]).then(() =>
//       console.log("all promises")
//     );
//   } catch (err) {
//     console.log("error!!!", err);
//   }
// }
// getResult();

// function* test(url) {
//   for (let i = 0; i < 2; i++) {
//     console.log(`Yielding: ${i} step #${i}`);
//     yield i + ` step #${i}`;
//   }

//   const getData = yield fetch(url);
//   const json = yield getData.json();
//   return json.id;
// }

// function run(genFn, ...args) {
//   const gen = genFn(...args); // передаём аргументы в генератор

//   return new Promise((resolve, reject) => {
//     function step(nextFn, arg) {
//       let result;
//       try {
//         result = nextFn.call(gen, arg);
//       } catch (err) {
//         return reject(err);
//       }

//       if (result.done) return resolve(result.value);

//       Promise.resolve(result.value)
//         .then((val) => step(gen.next, val))
//         .catch((err) => step(gen.throw, err));
//     }

//     step(gen.next); // запускаем генератор
//   });
// }

// // ✅ Использование
// const url = "https://jsonplaceholder.typicode.com/posts/5"; // можно заменить на любой API

// run(test, url)
//   .then((name) => {
//     console.log("Имя пользователя:", name);
//   })
//   .catch((err) => {
//     console.error("Ошибка:", err);
//   });

// function* getNumber() {
//   console.log("start");

//   const first = yield 1;
//   console.log(first);

//   const second = yield 2;
//   console.log(second);

//   const third = yield 3;
//   console.log(third);
// }

// for (let element of getNumber()) {
//   console.log(element);
// }

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// delay(1000).then(() => console.log("Прошла 1 секунда"));

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(2000).then(() => console.log("2sec"));

// setTimeout(() => console.log('Step 1: In setTimeout'));
// setTimeout(() => {
//   new Promise(resolve => {
//     console.log('Step 2: In promise constructor (inside setTimeout)');
//     resolve();
//   }).then(() => console.log('Step 3: In then (inside setTimeout)'));
// });

// new Promise(resolve => {
//   console.log('Step 4: In promise constructor');
//   resolve();
// }).then(() => {
//   console.log('Step 5: In then');
// });

// setTimeout(() => console.log('Step 6: In another setTimeout'));

//macro   1 (2,3) 6
// micro 5
// 4 5 1 2 3 6

// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// const g = gen();

// console.log(g.next()); // { value: 1, done: false }
// console.log(g.next()); // { value: 2, done: false }
// console.log(g.next()); // { value: 3, done: true }
// console.log(g.next()); // { value: undefined, done: true }

// for (const val of gen()) {
//   console.log(val); // выведет только 1 и 2
// }

// function test() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }

// let a = test();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// const saveUser = (logger) => (user) => {
//   logger(`Saving user with id: ${user.id}`);

//   // many lines to save user
// };

// const saveAdmin = (logger) => (admin) => {
//   logger(`Saving admin with id: ${admin.id}`);

//   // many lines to save admin
// };

// const saveBook = (logger) => (book) => {
//   logger(`Saving book with id: ${book.id}`);

//   // many lines to save book
// };

// const logger = (prefix) => (message) => {
//   const date = new Date();
//   const time = [date.getHours(), date.getMinutes(), date.getSeconds()].join(
//     ":"
//   );

//   console.log(` ${prefix} [${time}]: ${message}`);
// };

// const main = () => {
//   const userSaver = saveUser(logger("info"));
//   const adminSaver = saveAdmin(logger("log"));
//   const bookSaver = saveBook(logger("log"));

//   userSaver({ id: "1" });
//   adminSaver({ id: "2" });
//   bookSaver({ id: "3" });
// };

// main();

// const saveUser = (logger) => (user) => {
//   logger(`Saving user with id: ${user.id}`);

//   // many lines to save user
// };

// const saveAdmin = (logger) => (admin) => {
//   logger(`Saving admin with id: ${admin.id}`);

//   // many lines to save admin
// };

// const saveBook = (logger) => (book) => {
//   logger(`Saving book with id: ${book.id}`);

//   // many lines to save book
// };

// const logger = (message) => {
// 	const date = new Date();

//   const time = [date.getHours(), date.getMinutes(), date.getSeconds()].join(":");

//   console.log(`LOG [${time}]: ${message}`);
// };

// const main = () => {
//   const userSaver = saveUser(logger);
//   const adminSaver = saveAdmin(logger);
//   const bookSaver = saveBook(logger);

//   userSaver({ id: "1" });
//   adminSaver({ id: "2" });
//   bookSaver({ id: "3" });
// };

// main();

// function test(a) {
//   let arr = String(a).split("");
//   let count = arr.length;

//   return arr.reduce((acc, item, index) => {
//     if (item !== "0") {
//       if (index !== arr.length - 1) {
//         acc += item + "0".repeat(count - 1) + "+";
//         count -= 1;
//       } else {
//         acc += item;
//       }
//     } else {
//       count -= 1;
//     }
//     return acc;
//   }, "");
// }

// // console.log(test(189));

// function test(n) {
//   const digits = String(n).split("");
//   const length = digits.length;

//   return digits
//     .reduce((acc, digit, index) => {
//       if (digit === "0") return acc;
//       const zeros = length - index - 1;
//       const part = digit + "0".repeat(zeros);
//       acc.push(part);
//       return acc;
//     }, [])
//     .join(" + ");
// }
// console.log(test(1089));

// function outed(meet, boss) {
//   let niceRate = 5;
//   let sum = 0;
//   for (let key in meet) {
//     if (key !== boss) {
//       sum += meet[key];
//     } else {
//       sum += meet[key] * 2;
//     }
//   }
//   return sum / Object.keys(meet).length > niceRate
//     ? "Nice Work Champ!"
//     : "Get Out Now!";
// }
// console.log(
//   outed(
//     {
//       tim: 0,
//       jim: 2,
//       randy: 0,
//       sandy: 7,
//       andy: 0,
//       katie: 5,
//       laura: 1,
//       saajid: 2,
//       alex: 3,
//       john: 2,
//       mr: 0,
//     },
//     "laura"
//   )
// );

// let a = { 1: "1", 2: "2", 3: "3" };
// let b = { 3: "4", 5: "6", 6: "7", 7: "8" };
// let c = { 5: "9", 8: "9", 6: "12", 23: "35" };
// let o = [a, b, c];
// function test() {
//   return Object.assign({}, ...o);
// }

// console.log(test());

// let obj = [];

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let [, , three] = b;
// obj = [...a, 777, ...b.filter((item) => item !== 5), three];
// console.log(obj);  // (7) [1, 2, 3, 777, 4, 6, 6]

// function findUnique(numbers) {
//   let obj = numbers.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
//   for (let key in obj) {
//     if (obj[key] === 1) {
//       return key;
//     }
//   }
// }

// console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));

// const whosOnline = (friends) => {
//   if (friends.length === 0) return [];
//   return friends.reduce((acc, item) => {
//     if (item["lastActivity"] <= 10 && item["status"] === "online") {
//       acc["online"] = acc["online"] || [];
//       acc["online"].push(item["username"]);
//     } else if (item["lastActivity"] > 10 && item["status"] === "online") {
//       acc["away"] = acc["away"] || [];
//       acc["away"].push(item["username"]);
//     } else if (item["status"] === "offline") {
//       acc["offline"] = acc["offline"] || [];
//       acc["offline"].push(item["username"]);
//     }
//     return acc;
//   }, {});
// };

// console.log(
//   whosOnline([
//     {
//       username: "David",
//       status: "online",
//       lastActivity: 11,
//     },
//     {
//       username: "Lucy",
//       status: "offline",
//       lastActivity: 22,
//     },
//     {
//       username: "Bob",
//       status: "online",
//       lastActivity: 104,
//     },
//   ])
// );

// function findPair(arr1, arr2) {
//   let total = arr1.map((item, index) => {
//     return item + arr2[index];
//   });
//   let obj = total.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
//   let max = Math.max(...Object.values(obj));
//   if (max === 1) return [];
//   let forIndex;
//   for (key in obj) {
//     if (obj[key] === max) {
//       forIndex = key;
//     }
//   }

//   return total
//     .map((item, index) => (item == forIndex ? index : null))
//     .filter((index) => index !== null)
//     .map((item) => {
//       return [arr1[item], arr2[item]];
//     });
// }

// console.log(findPair([1, 2, 3, 4, 5], [-1, 2, -3, 4, -5]));
// [ 1, -1 ], [ 3, -3 ], [ 5, -5 ]

// arr1=[1,2,3,4,5]
// arr2=[0,0,0,0,0]
// findPair(arr1,arr2) should return []

// arr1=[1,2,3,4,5]
// arr2=[5,4,3,2,1]
// findPair(arr1,arr2) should return [[1,5],[2,4],[3,3],[4,2],[5,1]]

// arr1=[0,1,3,4,5]
// arr2=[1,0,3,2,1]
// findPair(arr1,arr2) should return [[3,3],[4,2],[5,1]]

// arr1=[1,2,3,4,5]
// arr2=[-1,2,-3,4,-5]
// findPair(arr1,arr2) should return [[1,-1],[3,-3],[5,-5]]

// arr1=[1,2,3,0,5,-2]
// arr2=[-1,2,-3,4,-5,6]
// findPair(arr1,arr2) should return [[2,2],[0,4],[-2,6]]

// let query = "https://jsonplaceholder.typicode.com/posts";

// let a = Math.random() * 10;
// let fetched = new Promise((res, rej) => {
//   if (a > 5) {
//     res("ok");
//   } else {
//     rej("error");
//   }
// });
// fetched
//   .then((res) => console.log(`get a = ${a}: ${res}`))
//   .catch((rej) => console.log(`get a = ${a}: ${rej}`));

// async function getData() {
//   try {
//     let data = await fetch(query);
//     let responce = await data.json();
//     console.log(responce);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getData();

// async function getData() {
//   fetch(query)
//     .then((data) => data.json())
//     .then((res) => console.log("res", res))
//     .catch((err) => console.log("rej", err));
// }
// getData();

// let obj = {
//   id: 343,
// };

// async function test() {
//   try {
//     let data = await fetch(query, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(obj),
//     });
//     let responce = await data.json();
//     console.log(responce);
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();

// new Promise((res, rej) => {
//   console.log("start query...");
//   setTimeout(() => {
//     if (Math.random() * 10 > 5) {
//       res("ok");
//     } else {
//       rej("bad");
//     }
//     console.log("response got");
//   }, 2000);
// })
//   .then((res) => console.log("request done", res))
//   .catch((rej) => console.log("request failed", rej));

// async function test() {
//   try {
//     let data = await new Promise((res, rej) => {
//       setTimeout(() => {
//         if (Math.random() * 10 > 5) {
//           res("success");
//         } else {
//           rej("bad");
//         }
//       }, 2000);
//     });
//     console.log("good result:", data);
//   } catch (err) {
//     console.error(err);
//     console.log("bad result:", err);
//   }
// }

// test();

// console.log("1");
// setTimeout(() => {
//   console.log("2");
//   Promise.resolve().then(() => {
//     console.log("3");
//   });
//   queueMicrotask(() => {
//     console.log("4");
//   });
// }, 0);

// fetch("https://example.com").then(() => {
//   console.log("5");

//   Promise.resolve().then(() => {
//     console.log("6");
//   });

//   setTimeout(() => {
//     console.log("7");
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log("8");

//   queueMicrotask(() => {
//     console.log("9");
//   });
// });

// queueMicrotask(() => {
//   console.log("10");
// });
// console.log("11");
// let a = new Promise((res, rej) => {
//   let b = 10;
//   console.log("send request 1...");
//   setTimeout(() => {
//     b === 10 ? res("ok1") : rej("bad");
//   }, 2000);
// });

// let b = new Promise((res, rej) => {
//   let a = 10;
//   console.log("send request 2...");
//   setTimeout(() => {
//     a === 10 ? res("ok2") : rej("bad2");
//   }, 6000);
// });

// Promise.race([a, b])
//   .then((res) => console.log("Promise.all result:", res))
//   .catch(() => console.log("Promise.all error"));

// let obj = {
//   name: "egor",
//   getName: () => {
//     console.log(this.name, "мое имя");
//   },
//   getName2: function () {
//     console.log(this.name, "мое имя2");
//   },
// };
// obj.getName();
// obj.getName2();

// function one(a) {
//   return function two(b) {
//     return a * b;
//   };
// }

// console.log(one(2)(10));

// function test(a) {
//   return a.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       acc.push(...test(item));
//     } else {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }

// console.log(test([1, [2, [3, [4]], 5]]));

// let a = {
//   age: [35, 65],
//   [Symbol.iterator]() {
//     let index = 0;
//     let items = this.age;
//     return {
//       next() {
//         if (index < items.length) {
//           return { value: items[index++], done: false };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// for (let i of a) {
//   console.log(i);
// }

// Напиши функцию, которая принимает массив чисел и возвращает массив только уникальных
// значений, сохраняя порядок.

// function test(arr) {
//   let a = new Set();
//   return arr.filter((item) => {
//     if (a.has(item)) return false;
//     a.add(item);
//     return true;
//   });
// }

// console.log(test([1, 2, 3, 2, 5, 1, 8]));
// // [1, 2, 3, 5, 8]

// function debounce(fn, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => fn.apply(this, args), delay);
//   };
// }
// function onResize() {
//   console.log('Resized!');
// }

// window.addEventListener('resize', debounce(onResize, 300));

//Bubble sort
// function test(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log('i arr:', arr)
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         console.log('j arr:', arr)
//       }
//     }
//   }
//   return arr;
// }

// console.log(test([3,2,4,0,1]));

//quick sort

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let pivot = Math.floor(arr.length / 2);
//   let chooseNum = arr[pivot];

//   arr.splice(pivot, 1);
//   let leftPart = arr.filter((item) => item <= chooseNum);
//   let rightPart = arr.filter((item) => item > chooseNum);
//   return quickSort(leftPart).concat(chooseNum, quickSort(rightPart));
// }

// console.log(quickSort([5, 4, 6, 4, 3, 9, 1]));

// function test() {
//   const obj = { name: "oleg" };

//   return {
//     addKey(myKey) {
//       obj[myKey] = "added key";
//     },
//     removeKey(myKey) {
//       delete obj[myKey];
//     },
//     showObj() {
//       console.log(obj);
//     },
//     freezeObj() {
//       Object.freeze(obj);
//     },
//   };
// }

// let a = test();
// a.showObj();
// a.addKey("петух");
// a.showObj();
// a.removeKey("name");
// a.showObj();
// a.showObj();
// a.addKey("петух2");
// a.showObj();

// Напишите функцию processData, которая принимает массив объектов,
// каждый из которых представляет собой продукт с полями name, price, и discount.
// Функция должна вернуть новый массив объектов, содержащий только продукты,
// цена которых после применения скидки больше заданного значения minPrice.
// В каждом отфильтрованном объекте должно быть новое поле finalPrice, равное цене со скидкой.

// /* Output:
// [
//   { name: 'Laptop', price: 1000, finalPrice: 900 },
//   { name: 'Monitor', price: 300, finalPrice: 285 }
// ]
// */

// const products = [
//   { name: "Laptop", price: 1000, discount: 0.1 },
//   { name: "Keyboard", price: 100, discount: 0.2 },
//   { name: "Mouse", price: 50, discount: 0.5 },
//   { name: "Monitor", price: 300, discount: 0.05 },
// ];
// const minPrice = 200;

// function processData(products, minPrice) {
//   return products.reduce((acc, item) => {
//     let withDiscount = item.price - item.price * item.discount;
//     if (withDiscount > minPrice) {
//       delete item.discount;
//       acc.push({ ...item, finalPrice: withDiscount });
//     }

//     return acc;
//   }, []);
// }

// const processedProducts = processData(products, minPrice);
// console.log(processedProducts);

// const products = [
//   { name: "Laptop", price: 1000, discount: 0.1 },
//   { name: "Keyboard", price: 100, discount: 0.2 },
//   { name: "Mouse", price: 50, discount: 0.5 },
//   { name: "Monitor", price: 300, discount: 0.05 },
// ];
// const minPrice = 200;

// function processData(products, minPrice) {
//   return products
//     .map(({ name, price, discount }) => ({
//       name,
//       price,
//       finalPrice: price - discount * price,
//     }))
//     .filter((item) => item.finalPrice > minPrice);
// }

// const processedProducts = processData(products, minPrice);
// console.log(processedProducts);

// Условие
// Напиши функцию, которая:
// Группирует заказы по дате (только YYYY-MM-DD, без времени)
// Для каждой даты возвращает:
// Сумму всех заказов (total)
// Количество заказов
// Средний чек

// {
//   "2025-08-15": { total: 200, count: 2, average: 100 },
//   "2025-08-16": { total: 350, count: 2, average: 175 },
//   "2025-08-17": { total: 50, count: 1, average: 50 }
// }

// const orders = [
//   { id: 1, date: "2025-08-15T10:00:00Z", total: 120 },
//   { id: 2, date: "2025-08-15T12:30:00Z", total: 80 },
//   { id: 3, date: "2025-08-16T09:15:00Z", total: 200 },
//   { id: 4, date: "2025-08-16T18:45:00Z", total: 150 },
//   { id: 5, date: "2025-08-17T14:00:00Z", total: 50 },
// ];

// function test(orders) {
//   return orders.reduce((acc, item) => {
//     let a = acc[item.date.slice(0, 10)];
//     if (a) {
//       a.total += item.total;
//       (a.count += 1), (a.average = a.total / a.count);
//     } else {
//       acc[item.date.slice(0, 10)] = {
//         total: item.total,
//         count: 1,
//         average: item.total,
//       };
//     }
//     return acc;
//   }, {});
// }

// console.log(test(orders));

// let one = Promise.resolve("ok");
// let two = Promise.reject("errorsdfwe");

// let a = Promise.allSettled([one, two]).then((res) => console.log(res));

// function test(a) {
//   console.log(a);
//   return function (b) {
//     console.log(a + b);
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }
// let fixed = test("im from: belarus");
// fixed(" vicebskaya oblast")(" polotsk city");

// function test(discount, sum) {
//   return sum - sum * discount;
// }

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...nextArgs) {
//         return curried(...args, ...nextArgs);
//       };
//     }
//   };
// }

// let curriedTest = curry(test);

// const tenDiscount = curriedTest(0.1); // возвращает функцию, ожидающую sum
// console.log(tenDiscount(100)); // → 90

// console.log(curriedTest(0.2)(100));
// curriedTest(0.1)(100);

// class Student {
//   constructor(age, gpa, fullName) {
//     this.age = age;
//     this.gpa = gpa;
//     this.fullName = fullName;
//   }
// }
// let array = [
//   new Student(23, 88, "David Goodman"),
//   new Student(25, 82, "Mark Rose"),
//   new Student(22, 90, "Jane Doe"),
//   new Student(25, 90, "Jane Dane"),
// ];

// function sort(array) {
//   let a = array
//     .sort((a, b) => {
//       if (a.gpa === b.gpa) {
//         if (a.age === b.age) {
//           const aLastInitial = a.fullName.split(" ")[1][0];
//           const bLastInitial = b.fullName.split(" ")[1][0];
//           return aLastInitial.localeCompare(bLastInitial);
//         } else {
//           return a.age - b.age;
//         }
//       } else {
//         return b.gpa - a.gpa;
//       }
//     })
//     .map((item) => `${item.fullName}`);
//   return a.join(",");
// }

// console.log(sort(array));

// function sortArray(array) {
//   let withoutOdds = array.map((item) => {
//     return item % 2 === 0 ? item : null;
//   });
//   let withOdds = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
//   return withoutOdds.map((item) => {
//     if (item === null) {
//       return (item = withOdds.shift());
//     } else {
//       return item;
//     }
//   });
// }

// console.log(sortArray([5, 8, 6, 3, 4]));

// function computeRanks(number, games) {
//   // Your solution
// }

// computeRanks(6, [
//   [0, 5, 2, 2],
//   [1, 4, 0, 2],
//   [2, 3, 1, 2],
//   [1, 5, 2, 2],
//   [2, 0, 1, 1],
//   [3, 4, 1, 1],
//   [2, 5, 0, 2],
//   [3, 1, 1, 1],
//   [4, 0, 2, 0],
// ]);
// function alphabetized(s) {
//   const initials = s.split(" ").map((word) => word[0].toLowerCase());
//   const used = [];
//   const total = s
//     .split(" ")
//     .map((word) => word.toLowerCase().split("").sort())
//     .flat()
//     .sort();
//   return total
//     .map((char) => {
//       if (initials.includes(char) && !used.includes(char)) {
//         used.push(char);
//         return char.toUpperCase();
//       }
//       return char;
//     })
//     .join("");
// }

// console.log(alphabetized("The Holy Bible"));

//"BbeehHilloTy"

// Напишите функцию processData, которая принимает массив объектов,
// каждый из которых представляет собой продукт с полями name, price, и discount.
// Функция должна вернуть новый массив объектов, содержащий только продукты,
// цена которых после применения скидки больше заданного значения minPrice.
// В каждом отфильтрованном объекте должно быть новое поле finalPrice, равное цене со скидкой.

// /* Output:
// [
//   { name: 'Laptop', price: 1000, finalPrice: 900 },
//   { name: 'Monitor', price: 300, finalPrice: 285 }
// ]
// */

// const products = [
//   { name: "Laptop", price: 1000, discount: 0.1 },
//   { name: "Keyboard", price: 100, discount: 0.2 },
//   { name: "Mouse", price: 50, discount: 0.5 },
//   { name: "Monitor", price: 300, discount: 0.05 },
// ];
// const minPrice = 200;

// function processData(products, minPrice) {
//   return products.reduce((acc, item) => {
//     withDiscount = item.price - item.price * item.discount;
//     if (withDiscount > minPrice) {
//       acc.push({
//         name: item.name,
//         price: item.price,
//         finalPrice: withDiscount,
//       });
//     }
//     return acc;
//   }, []);
// }

// const processedProducts = processData(products, minPrice);
// console.log(processedProducts);

// let obj = { name: "rrrr", price: 30, discount: 5 };

// let { name, price } = obj;
// let b = { name: "oleg", price, category: "1100" };
// console.log("b:", b);

// let arr = [1, 2, 3];

// Array.prototype.myMap = function (fn) {
//   let total = [];
//   for (let i = 0; i < this.length; i++) {
//     total.push(fn(this[i]));
//   }
//   console.log(total);
//   return total;
// };

// arr.myMap(function (item) {
//   return item * 10;
// });

// Array.prototype.myFilter = function (fn) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) {
//       result.push(this[i]);
//     }
//   }
//   console.log(result);
//   return result;
// };

// arr.myFilter(function (item) {
//   return item >= 2;
// });

// const obj = JSON.parse("{}");
// console.log(obj);
// console.log(Object.create({}));

// const myObject = {
//   value: 42,
//   valueOf() {
//     console.log("Вызван valueOf()");
//     return this.value;
//   },
//   toString() {
//     console.log("Вызван toString()");
//     return `Value is ${this.value}`;
//   },
//   [Symbol.toPrimitive](hint) {
//     console.log(`Вызван Symbol.toPrimitive с hint: ${hint}`);
//     if (hint === "number") {
//       return this.value;
//     }
//     if (hint === "string") {
//       return `Primitive string: ${this.value}`;
//     }
//     return `Primitive default: ${this.value}`;
//   },
// };

// console.log(myObject + 1); // Вывод: "Primitive default: 421" (сначала Symbol.toPrimitive, hint = "default", потом конкатенация строк)
// console.log(myObject.toString()); // Вывод: "Primitive string: Value is 42" (сначала Symbol.toPrimitive, hint = "string", потом toString)
// console.log(+myObject); // Вывод: 42 (Symbol.toPrimitive с hint = "number")
// console.log(typeof NaN);

// let obj = {
//   name: "oleg",
//   b: {
//     age: 11,
//   },
// };

// let obj2 = structuredClone(obj);
// function deep(data) {
//   if (typeof data !== "object") {
//     return data;
//   }
// }

// obj.b.age = 55;

// let arr = Array.from({ length: 5 }, (_, i) => i);
// console.log(arr);

// console.log("obj", obj);
// console.log("obj2", obj2);
// console.log(obj === obj2);

// let test = [1, 2, 3];

// Array.prototype.myMap = function (fn) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(fn(this[i]));
//   }
//   return result;
// };
// console.log(
//   test.myMap((item) => {
//     return item * 10;
//   })
// );

// Array.prototype.myFilter = function (fn) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
// console.log(
//   test.myFilter((item) => {
//     return item > 1;
//   })
// );

// Array.prototype.myreduce = function (fn, acc) {
//   for (let i = 0; i < this.length; i++) {
//     acc = fn(acc, this[i]);
//   }
//   return acc;
// };

// console.log(
//   test.myreduce((acc, item) => {
//     return (acc += item);
//   }, 0)
// );

// let a = {
//   name: "oleg",
//   [Symbol.toPrimitive](hint) {
//     console.log("hint:", hint);
//   },
//   valueOf() {
//     return 15;
//   },
//   toString() {
//     return this.name;
//   },
// };

// console.log(a + "ss");

// let obj = {
//   name: "oleg",
// };

// function one(name) {
//   return this.name;
// }

// let fn = one.bind(obj);
// console.log(fn());

// function one(a) {
//   if (a === 1) return a;
//   return a + one(a - 1);
// }

// console.log(one(3));

// let a = [1, 2, 3];
// Array.prototype.myMap = function (fn) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(fn(this[i]));
//   }
//   return result;
// };

// console.log(
//   a.myMap((item) => {
//     return item * 100;
//   })
// );

// let fn = function test() {
//   return 4;
// };
// let obj = {
//   city: "minsk",
// };
// let arr = [1, 2, 3];
// let a = new Map();
// a.set("name", "oleg");
// a.set("age", "11");

// console.log(a.entries());
// // let b = Object.entries(a);
// // b.forEach((item) => {
// //   console.log(item);
// // });

// let b = new Set([1, 2, 3]);
// b.add(5);
// b.add(7);

// console.log(b.entries());

// // let b = new Map(a.entries());
// // console.log(b);

// // let c = Object.fromEntries(b);
// // console.log(c);

// let obj = {
//   name: "oleg",
//   age: 22,
// };

// let d = Object.getOwnPropertyDescriptor(obj, "name");
// console.log(d);

// const obj = {
//   name: "oleg",

//   get fullData() {
//     return this.name;
//   },
//   set fullData(value) {
//     value.length > 4 ? (this.name = value) : this.name;
//   },
// };

// console.log(obj.fullData);
// obj.fullData = "egorka";
// console.log(obj.fullData);

// let a = {
//   name: "oleg",
// };

// Object.defineProperty(a, "age", {
//   value: 55,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// a.age = 66;

// console.log(a);

// let a = setTimeout(() => console.log(1000), 1000);
// let b = setTimeout(() => console.log(2000), 2000);
// console.log(a);
// console.log(b);

// function defer(f, ms) {
//   return function () {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// function sayHi(who) {
//   alert("Hello, " + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John");
