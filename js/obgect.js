//* ---------------------01-creations----------------------------
const playlist = {
  name: "My top playlist",
  rating: "5",
  tracs: [
    { id: "1", name: "lalal", sub: "lalala", url: "html//" },
    { id: "2", name: "lalal", sub: "lalala", url: "html//" },
    { id: "3", name: "lalal", sub: "lalala", url: "html//" },
    { id: "4", name: "lalal", sub: "lalala", url: "html//" },
    { id: "5", name: "lalal", sub: "lalala", url: "html//" },
    { id: "6", name: "lalal", sub: "lalala", url: "html//" },
    { id: "7", name: "lalal", sub: "lalala", url: "html//" },
  ],
  trackcount: 7,
};
console.log(playlist);
function logPlayList(muObj) {
  console.log(muObj.name);
  console.log(muObj.rating);
  console.log(muObj.tracs[2]);
  console.log(muObj.trackcount);
  console.log(playlist.public);
}
// logPlayList(playlist);

playlist.name = "Hello World"; //перезапис поля
playlist.public = true; //додавання нового поля в об'єкт
// logPlayList(playlist);

// const x = {};
// console.dir(x);

// const y = [];
// console.dir(y);
//*-------------------------------02-methods-----------------------------
const playlist2 = {
  name: "My top playlist",
  rating: "5",
  tracs: [
    "1-track",
    "2-track",
    "3-track",
    "4-track",
    "5-track",
    ,
    "6-track",
    "6-track",
  ],
  trackcount: 6,

  changeName(newName) {
    this.name = newName;
  },
  changeRationg(newRating) {
    this.rating = newRating;
  },
  countsTrack() {
    this.trackcount = this.tracs.length;
    return this.trackcount;
  },
  addTrack(track) {
    this.tracs.push(track);
  },
};
// logPlayList(playlist2);
playlist2.changeName("noName");
playlist2.changeRationg(1);
logPlayList(playlist2);
console.log(playlist2.countsTrack());
//*-----------------03-iterations-------------------
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
//18

let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }
// console.log(totalFeedback);

const values = Object.values(feedback);
console.log(values);
for (const value of values) {
  console.log(value);
  totalFeedback += value;
}
console.log(totalFeedback);
//-------------------------------------------------
const friends = [
  { name: "Olha", online: true },
  { name: "Nick", online: false },
  { name: "Pueblo", online: true },
  { name: "Svitlana", online: true },
  { name: "Nadia", online: false },
  { name: "Roma", online: true },
];
console.table(friends);
function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    friend.name === friendName
      ? console.log(`Знайшли ${friendName}`)
      : console.log("Не знайшли");
  }
}
findFriendByName(friends, "Nadia");

function geyAllNames(allFriends) {
  const names = [];
  for (const friends of allFriends) {
    names.push(friends.name);
  }
}
geyAllNames(friends);
