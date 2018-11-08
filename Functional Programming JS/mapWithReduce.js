module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce((accumulator, currentValue, index, arr) => {
        return accumulator.concat([fn(currentValue, index, arr)])
    }, [])
  }