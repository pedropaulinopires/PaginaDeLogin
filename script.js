document.getElementById("eyeActive").addEventListener("click", eyeClick);
function eyeClick() {
  const eye = document.getElementById("eye");
  const eyeView = document.getElementById("eyeView");
  eye.classList.toggle("active");
  eyeView.classList.toggle("active");
  const input = document.getElementById("password");
  let typeInput = input.getAttribute("type");
  if (typeInput == "password") {
    // type text
    input.type = "text";
  } else {
    //type password
    input.type = "password";
  }
}

document.getElementById("btnSubmit").addEventListener("click", checkSubmit);
function checkSubmit() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const spin = document.querySelector(".spin");
  const success = document.querySelector(".success");
  const msgUsername = document.getElementById("msgUsername");
  const msgPassword = document.getElementById("msgPassword");
  const msgInvalid = document.getElementById("msgInvalid");
  if (username.value.length == 0 && password.value.length == 0) {
    username.classList.add("error");
    password.classList.add("error");
    msgPassword.classList.add("active");
    msgUsername.classList.add("active");
    msgInvalid.classList.remove("active");
  } else if (username.value.length == 0) {
    username.classList.add("error");
    password.classList.remove("error");
    msgPassword.classList.remove("active");
    msgUsername.classList.add("active");
    msgInvalid.classList.remove("active");
  } else if (password.value.length == 0) {
    username.classList.remove("error");
    password.classList.add("error");
    msgPassword.classList.add("active");
    msgUsername.classList.remove("active");
    msgInvalid.classList.remove("active");
  } else if (!(username.value == "pedro" && password.value == "pedro123")) {
    username.classList.remove("error");
    password.classList.remove("error");
    msgPassword.classList.remove("active");
    msgUsername.classList.remove("active");
    msgInvalid.classList.add("active");
    password.value = "";
  } else {
    username.classList.remove("error");
    password.classList.remove("error");
    msgPassword.classList.remove("active");
    msgUsername.classList.remove("active");
    msgInvalid.classList.remove("active");
    spin.classList.add("active");
    success.classList.add("active");
    document.body.style.pointerEvents = "none";
  }
}


window.addEventListener("keypress", function (event){
    if (event.key == "Enter") {
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const spin = document.querySelector(".spin");
        const success = document.querySelector(".success");
        const msgUsername = document.getElementById("msgUsername");
        const msgPassword = document.getElementById("msgPassword");
        const msgInvalid = document.getElementById("msgInvalid");
        if (username.value.length == 0 && password.value.length == 0) {
          username.classList.add("error");
          password.classList.add("error");
          msgPassword.classList.add("active");
          msgUsername.classList.add("active");
          msgInvalid.classList.remove("active");
        } else if (username.value.length == 0) {
          username.classList.add("error");
          password.classList.remove("error");
          msgPassword.classList.remove("active");
          msgUsername.classList.add("active");
          msgInvalid.classList.remove("active");
        } else if (password.value.length == 0) {
          username.classList.remove("error");
          password.classList.add("error");
          msgPassword.classList.add("active");
          msgUsername.classList.remove("active");
          msgInvalid.classList.remove("active");
        } else if (!(username.value == "pedro" && password.value == "pedro123")) {
          username.classList.remove("error");
          password.classList.remove("error");
          msgPassword.classList.remove("active");
          msgUsername.classList.remove("active");
          msgInvalid.classList.add("active");
          password.value = "";
        } else {
          username.classList.remove("error");
          password.classList.remove("error");
          msgPassword.classList.remove("active");
          msgUsername.classList.remove("active");
          msgInvalid.classList.remove("active");
          spin.classList.add("active");
          success.classList.add("active");
          document.body.style.pointerEvents = "none";
        }
      }
});


