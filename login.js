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
        window.open('index.html')
    }
    else {
        alert("Error Password or Username")
    }
}