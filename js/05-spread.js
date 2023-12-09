const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
console.log(numbers);

const numbers2 = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6]];
console.log(numbers2);

//Пошук найменьшої та найбільшої температури

const temps = [18, 14, 12, 212, 17, 29, 34];
console.log(Math.max(...temps));

const lastWeekTemp = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];
const allTemps = [...lastWeekTemp, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);

const defaultSettings = {
  theame: "light",
  shoNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  shoNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings);
