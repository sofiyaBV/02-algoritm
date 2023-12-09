function fnA(value, callback) {
  callback(2);
  console.log(value);
  // const res = value *
}

///callback
function fnB(item) {
  console.log("This is Callback - ", item);
}

fnA(23, fnB);

function doMath(a, b, callback) {
  const res = callback(a, b);
  return res;
}

function add(a, b) {
  return a + b;
}
console.log(doMath(2, 3, add));

function onGetPositionSuccess(position) {
  console.log("Це виклик onGetPositionSuccess");
  console.log(position);
}

function onGetPositionError(error) {
  console.log("Це виклик onGetPositionError ");
  console.log(error);
}
// console.dir(window);
window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);
