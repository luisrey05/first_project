var submitBtn = document.querySelector("#login-Btn");
var DumpUsers = JSON.parse(localStorage.getItem("myStorage"));

function login() {
  var usernameInput = document.querySelector("#inputUserName").value;
  var passwd = document.querySelector("#inputPassword").value;

  if (inputUserName.value == "" && inputPassword.value == "") {
    alert("Please enter the neccessary values");
    return;
  }

  for (var i = 0; i <= DumpUsers.length; i++) {
    if (usernameInput === DumpUsers[i][2] && passwd === DumpUsers[i][3]) {
      window.location.replace("index.html");
      break;
    }
  }
}

submitBtn.addEventListener("click", login);
