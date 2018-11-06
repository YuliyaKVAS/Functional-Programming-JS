function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        goodUsers.some((item) => {
            submittedUsers.every(() => {
              return item.id
          })
      })
    };
  }

  module.exports = checkUsersValid