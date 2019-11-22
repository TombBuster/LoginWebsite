$(document).ready(function () {

    $("#passwordInput").keypress(function (event) {
        let key = (event.keyCode ? event.keyCode : event.which);
        if (key == '13') {
            $("#loginButton").click();
        }
    });
});

function formCheck(form) {
    if (form.username.value == "admin" && form.password.value == "admin") {
        setCookie(form.username.value);
        window.location.href = "index.html"
    }
    else {
        alert("Error Password or Username")
    }
}

function setCookie(username) {
    var d = new Date();
    var exmins = 1;
    d.setTime(d.getTime() + (exmins * 60 * 1000));
    var expires = "expires=" + d.toUTCString() + ";";
    document.cookie = "username=" + username + ";" + expires;
}