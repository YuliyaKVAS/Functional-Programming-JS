function reduce(arr, fn, initial) {
    if(arr.length === 0){
        return initial;
    }
    if(arr.length === 1){
        return fn(initial, arr[0]);
    }else{
        return reduce(arr.slice(1), fn, fn(initial, arr[0]))
    }
  }

  module.exports = reduce


/* EXAMPLE OF RECURSION
function toUpperArray(items) {
     if (!items.length) return []             // end condition
        var head = items[0]                      // item to operate on
        head = head.toUpperCase()                // perform action
        var tail = items.slice(1)                // next
        return [head].concat(toUpperArray(tail)) // recursive step
     }
 
     toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']
     */