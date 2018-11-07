function duckCount() {
    // SOLUTION GOES HERE
    let result = Array.prototype.slice.call(arguments).filter((item) => {
         return Object.prototype.hasOwnProperty.call(item, 'quack');
    });
    return result.length;
  }

  module.exports = duckCount