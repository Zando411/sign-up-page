function checkPass() {
  let pass = document.getElementById("user_password").value;
  let confirmPass = document.getElementById("confirm_password").value;

  console.log(pass, confirmPass);
  let message = document.getElementById("passwordCheck");

  if (pass.length != 0 && pass == confirmPass) {
    message.innerHTML = "They match!";
    message.style.color = "green";
  } else {
    message.innerHTML = "Password doesn't match!";
    message.style.color = "red";
  }
}
