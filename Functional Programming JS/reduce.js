function countWords(inputWords) {
    return inputWords.reduce((previousValue, current) => {
        previousValue[current] =++ previousValue[current] || 1;
        return previousValue;
    }, {})
  }

  module.exports = countWords