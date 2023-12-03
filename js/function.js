// //Явно вираженна функція
// const add1 = function () {};
// //Неявно виражена функція
// function add2() {}
// //стрілочні функції
// const add3 = () => {};

// function add(arg, a = 0) {
//   return console.log(arg * a);
// }
// add(2, 2);
// //стек викликів
// // function FnA() {
// //   console.log("Виконується функція BnA");
// // }
// // function FnB() {
// //   console.log("Виконується функція BnB");
// // }
// // function FnC() {
// //   console.log("Виконується функція BnC");
// // }
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// function calculateTotalPrice(item) {
//   let res = 0;
//   for (const iterator of item) {
//     res += iterator;
//   }
//   return res;
// }
// console.log(calculateTotalPrice(cart));

// function changeCase(string) {
//   let result = "";
//   for (const iterator of string) {
//     if (iterator === iterator.toUpperCase()) {
//       result += iterator.toLowerCase();
//     }
//     if (iterator === iterator.toLowerCase()) {
//       result += iterator.toUpperCase();
//     }
//   }
//   return result;
// }

// console.log(changeCase("JavaScript"));

// //task
// function slugfy(string) {
//   const normalazedString = string.toLowerCase();
//   const words = normalazedString.split(" "); //Разбивает строку по элементам
//   const slug = words.join("-"); //Подставляем элемент между символами()словами в этом случае
//   return string.toLowerCase().split(" ").join("-"); //это просто сокращённый вариант
// }
// console.log(slugfy("Java Script lala"));

// function FnA() {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }
// FnA(1, 2, 3, 7, "la");

// const FnB = () => {
//   console.log(arguments);
// };
// FnB(1, 2, 3);

let clients = ["Олег"];
function greet(name) {
  if (clients.includes(name)) {
    console.log(`%{name}, рады снова вас видеть`);
  } else {
    const confirmation = confirm("Хочете в масив?");
    if (confirmation) {
      clients.push(name);
      alert(`${name}, мы рады вас приветствовать в массиве)`);
    } else {
      alert("Очень жаль(");
    }
  }
  return;
}
console.log(clients);
const user = prompt("Введіть ім`я").toLowerCase();
greet(user);
