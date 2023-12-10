const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const res = Object.values(salary).reduce((acc, sel) => acc + sel, 0);
console.log(res);
