function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
       return submittedUsers.every((item) => {
           return goodUsers.some((currentItem) => {
               return item.id === currentItem.id;
           })
       })
    };
  }

  module.exports = checkUsersValid