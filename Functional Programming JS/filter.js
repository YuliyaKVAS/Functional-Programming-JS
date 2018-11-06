function getShortMessages(messages) {
    var subres = messages.filter((item) => {
        return item.message.length<50
    })

    return subres.map((item) => {
        return item.message
    })
  }

  /*module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
  }*/

  module.exports = getShortMessages