$(document).ready(function () {


    $("#password2Input").keypress(function (event) {
        let key = (event.keyCode ? event.keyCode : event.which);
        if (key == '13') {
            $("#registerButton").click();
        }
    });
});

function formCheck(form) {
    const formUser = form.username.value;
    const formPass1 = form.password1.value;
    const formPass2 = form.password2.value;

    if (formPass1 != formPass2) {
        alert("Passwords do not match!")
        window.location.href = "register.html";
    } else if (formUser == "" | formPass1 == "") {
        alert("Please fill in all fields!")
    }
    else {
        $.getJSON("accounts.json", function (json) {
            const userList = json.users;
            isUser = false;
            for (let i = 0; i < userList.length; i++) {
                if (formUser == userList[i].username) {
                    isUser = true;
                }
            }
            if (!isUser) {
                let newUser = {
                    "id": userList.length,
                    "username": formUser,
                    "password": formPass1
                }
                json.users.push(newUser);
                localStorage.setItem('userAccounts', JSON.stringify(json))

            }
            window.location.href = "login.html"

        });
    }
}
