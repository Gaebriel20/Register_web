console.log("Hello World");

let btnRegister = document.querySelector("#btnRegister")
let btnuser = document.querySelector("#btnuser")
let btnpass = document.querySelector("#btnpass")
let confirm = document.querySelector("#confirm")
let age = document.querySelector("#age")


btnRegister.onclick = function() {
    register(btnuser.value, txtpass.value, confirm.value, age.value);
}
function register (username, password, confirmPassword, age){
    console.log(username, password, confirmPassword, age);
    //alert("Register button has been clicked")
}