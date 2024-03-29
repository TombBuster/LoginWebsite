$(document).ready(function () {


    $("#passwordInput").keypress(function (event) {
        let key = (event.keyCode ? event.keyCode : event.which);
        if (key == '13') {
            $("#loginButton").click();
        }
    });
});

function formCheck(form) {
    const formUser = form.username.value;
    const formPass = form.password.value;
    $.getJSON("accounts.json", function (existingJson) {
        localStorage.setItem('userAccounts', JSON.stringify(existingJson))
    })
    let json = JSON.parse(localStorage.getItem('userAccounts'))
    const userList = json.users;
    isUser = false;
    for (let i = 0; i < userList.length; i++) {
        if (formUser == json.users[i].username && formPass == json.users[i].password) {
            isUser = true;
            setCookie(formUser);
            window.location.href = "index.html"
        }
    }
    if (!isUser) {
        alert("Username or password is incorrect.")
    }
}

function setCookie(username) {
    let d = new Date();
    let exmins = 1;
    d.setTime(d.getTime() + (exmins * 60 * 1000));
    let expires = "expires=" + d.toUTCString() + ";";
    document.cookie = "username=" + username + ";" + expires;
}