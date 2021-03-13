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
addPromise = function (a, b) {
  //return Promise.reject(new Error("promise error"));
  return Promise.resolve(a + b);
};
module.exports = { add, subtract, multiply, addCallback, addPromise };
