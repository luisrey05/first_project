var registerBtn = document.querySelector("#register-Btn");
var DumpUsers = [["admin@admin.com", "123456", "admin", "admin"]];

var myStorage;

function registerUser() {
  var firstname = document.querySelector("#inputfname").value;
  var lastname = document.querySelector("#inputlname").value;
  var username = document.querySelector("#inputUserName").value;
  var password = document.querySelector("#inputPassword").value;
  var email = document.querySelector("#inputEmail").value;
  var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  localStorage.setItem("myStorage", JSON.stringify(DumpUsers));

  if (
    inputfname.value == "" ||
    inputlname.value == "" ||
    inputUserName.value == "" ||
    inputPassword.value == "" ||
    inputEmail.value == ""
  ) {
    alert("Please Enter the necessary values");
    return;
  }

  if (regx.test(inputEmail.value)) {
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }

  var user = JSON.parse(localStorage.getItem("myStorage"));
  console.log(user);
  for (var i = 0; i < user.length; i++) {
    if (inputUserName.value == user[i][2] || inputEmail.value == user[i][4]) {
      alert("Username or email is already exist");
      return;
    }
  }

  var newUser = [firstname, lastname, username, password, email];
  myStorage = DumpUsers;
  DumpUsers.push(newUser);
  localStorage.setItem("myStorage", JSON.stringify(DumpUsers));
  // window.location.replace("index.html");
}
registerBtn.addEventListener("click", registerUser);
