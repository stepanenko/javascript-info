
function UserService() {

  //this = {}

  this.getUserBySession = function (session) {
    var uuid = session.getUserUUID();

    if (uuid < 1) {
      throw new Error("User not found.");
    }

    var userDao = new UserDao();
    var user = userDao.getUser(uuid);
    user.setSession(session);
    return user;
  }

  //return this;

}

let service = new UserService();
const user = service.getUserById('1');
console.log(user);
