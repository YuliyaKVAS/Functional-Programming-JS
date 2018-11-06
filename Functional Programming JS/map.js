function doubleAll(numbers) {
    var doubles = numbers.map((item) => {
        return item*2
    });
    return doubles;
  }

  /*module.exports = function doubleAll(numbers) {
    return numbers.map(function double(num) {
      return num * 2
    })
  }*/

  module.exports = doubleAll