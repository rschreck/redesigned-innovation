add = function (a, b) {
  return a + b;
};
subtract = function (a, b) {
  return a - b;
};
multiply = function (a, b) {
  return a * b;
};
addCallback = function (a, b, callback) {
  setTimeout(() => {
    return callback(null, a + b);
  }, 500);
};
module.exports = { add, subtract, multiply, addCallback };
