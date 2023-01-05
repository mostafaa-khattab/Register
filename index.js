let userName = document.getElementById("userName")
let Password = document.getElementById("password")
let BtnLogin = document.getElementById("BtnLogin")

let wrongInp = document.getElementById("wrongInp")
let wrongacc = document.getElementById("wrongacc")


let inputName = document.getElementById("inputName")
let inputEmail = document.getElementById("inputEmail")
let inputPassword = document.getElementById("inputPassword")

let nameValid = document.getElementById("nameValid")
let emailValid = document.getElementById("emailValid")
let passValid = document.getElementById("passValid")
let alertinValid = document.getElementById("alertinValid")
let disBtnSign = document.getElementById("disBtnSign")

var allUsers;

if (localStorage.getItem("users") == false) {
    allUsers = []
}
else {
    allUsers = JSON.parse(localStorage.getItem("users"))
}


function sinUp() {

    if (userValidation() == true) {

        let user = {
            name: inputName.value,
            email: inputEmail.value,
            pass: inputPassword.value
        }
        allUsers.push(user)
        localStorage.setItem("users", JSON.stringify(allUsers))
        disBtnSign.classList.replace("d-none", "d-block")
        alertinValid.classList.replace("d-block", "d-none")
    }
    else {
        disBtnSign.classList.replace("d-block", "d-none")
        alertinValid.classList.replace("d-none", "d-block")
    }
}

function userNameValid() {
    let NameRgex = /^[A-Za-z]{2,10}( [A-Za-z]{3,10})?$/

    if (NameRgex.test(inputName.value) == true) {
        inputName.classList.add("is-valid")
        inputName.classList.remove("is-invalid")
        nameValid.classList.replace("d-block", "d-none")

        return true
    }
    else {
        inputName.classList.add("is-invalid")
        inputName.classList.remove("is-valid")
        nameValid.classList.replace("d-none", "d-block")

        return false
    }
}

function userEmailValid() {
    let EmailRgex = /^[A-Za-z]{3,15}([0-9]{1,3})?@[A-Za-z]{2,5}\.[a-z]{3,5}?$/

    if (EmailRgex.test(inputEmail.value) == true) {
        inputEmail.classList.add("is-valid")
        inputEmail.classList.remove("is-invalid")
        emailValid.classList.replace("d-block", "d-none")

        return true
    }
 
    else {
        inputEmail.classList.add("is-invalid")
        inputEmail.classList.remove("is-valid")
        emailValid.classList.replace("d-none", "d-block")

        return false
    }
}


function userPasswordValid() {
    let passwordRgex = /^.{8,20}$/

    if (passwordRgex.test(inputPassword.value) == true) {
        inputPassword.classList.add("is-valid")
        inputPassword.classList.remove("is-invalid")
        passValid.classList.replace("d-block", "d-none")

        return true
    }
    else {
        inputPassword.classList.add("is-invalid")
        inputPassword.classList.remove("is-valid")
        passValid.classList.replace("d-none", "d-block")

        return false
    }
}

function userValidation() {

    userNameValid();
    userEmailValid();
    userPasswordValid();

    if (userNameValid() == true && userEmailValid() == true && userPasswordValid() == true) {

        return true
    }
    else {
        return false
    }
}


var usName = localStorage.getItem("nameUsers")
function Login() {

    if (userName.value == "" && Password.value == "") {

        wrongInp.classList.replace("d-none", "d-block")

        wrongacc.classList.replace("d-block", "d-none")

    }
    else {
        wrongInp.classList.replace("d-block", "d-none")

        for (let i = 0; i < allUsers.length; i++) {

            if (allUsers[i].email.toLowerCase() == userName.value.toLowerCase() && allUsers[i].pass.toLowerCase() == Password.value.toLowerCase()) {

                localStorage.setItem("nameUsers", allUsers[i].name)

                BtnLogin.setAttribute("href", "welcom.html")

                wrongacc.classList.replace("d-block", "d-none")

            }
            else {
                wrongacc.classList.replace("d-none", "d-block")
            }
        }
    }



}


// var usName = localStorage.getItem("nameUsers")
// function Login() {

//     if (userName.value == "" && Password.value == "") {

//         wrongInp.classList.replace("d-none", "d-block")

//         wrongacc.classList.replace("d-block", "d-none")

//     }
//     else {
//         wrongInp.classList.replace("d-block", "d-none")
//         var x = false

//         var user;

//         for (let i = 0; i < allUsers.length; i++) {

//             if (allUsers[i].email.toLowerCase() == userName.value.toLowerCase() && allUsers[i].pass.toLowerCase() == Password.value.toLowerCase()) {
//                 x = true

//                 user = allUsers[i].name
//             }
//         }

//         if (x) {
//             localStorage.setItem("nameUsers", user)

//             BtnLogin.setAttribute("href", "welcom.html")

//             wrongacc.classList.replace("d-block", "d-none")
//         } else {
//             wrongacc.classList.replace("d-none", "d-block")
//         }

//     }



// }

function displayWelcom() {
    var userName = document.getElementById("userName").innerHTML = "Welcom " + usName
}

function logout() {
    localStorage.removeItem("nameUsers")
}