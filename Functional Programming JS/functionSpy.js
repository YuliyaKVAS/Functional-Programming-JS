function Spy(target, method) {
    // SOLUTION GOES HERE
    let foo = target[method];
    let result = {
        count: 0
    };

    target[method] = () => {
        result.count += 1;
        return foo.apply(target, arguments);
    }

    return result;
  }
  module.exports = Spy