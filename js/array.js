const friends = ["a", "b", "c", "d", false, true, 12, 34, 90];
console.log(friends.length);
console.table(friends);

let a = [1, 2, 3];
let b = a;
a = [1, 2, 3, 4];
console.log(a, b);

const friend = ["Sofiya", "Igor", "Denis", "Vova"];
for (let i of friend) {
  console.log(i);
}

const carts = [5, 6, 2, 23, 54, 17, 60];
let result = 0;
// for (const cart of carts) {
//   result += cart * 2;
// }
for (const value of carts) {
  if (value % 2 === 0) {
    result += value;
  }
}
console.log(result);

const numbers = [51, 18, 13, 24, 7, 85, 19];
let res = numbers[0];
for (const iterator of numbers) {
  if (iterator < res) {
    res = iterator;
  }
}
console.log(res);

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";
for (const iterator of logins) {
  if (iterator == loginToFind) {
    console.log(`Логін  знайдено ${iterator}`);
  }
}
