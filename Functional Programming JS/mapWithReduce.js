module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce((accumulator, currentValue, index, arr) => {
        return accumulator.concat([fn(currentValue, index, arr)])
    }, [])
  }


  //official solution

 /* module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
      acc.push(fn.call(thisArg, item, index, arr))
      return acc
    }, [])
  }*/