function loadUsers(userIds, load, done) {
    var users = [];
    let counter = 0;
    userIds.forEach((id, index) => {
        load(id, (currentValue) => {
            users[index] = currentValue;
            counter += 1;
            if(counter===userIds.length){
                return done(users);
            }
        })
    });
  }

  module.exports = loadUsers