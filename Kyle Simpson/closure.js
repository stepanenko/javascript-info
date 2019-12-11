
function User() {
  let username, password;
  const notif = ` has been logged in successfully`

  function loginFn(name, pw) {
    username = name;
    password = pw;
    console.log(name + notif);
  }

  const publicAPI = {
    login: loginFn
  }

  return publicAPI;
}

let kevin = User();

kevin.login('Kevin', 'kev1234');
