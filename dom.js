$(document).ready(function () {

    for (let i = 0; i < 13; i++) {

        setTimeout(function () { $("#box" + i).toggleClass("animation") }, i * 100);

    }

   


    $("button#everybodyWasPlayVideo").click(function () {
        $("iframe#everybodyWas").toggleClass("hidden");

    });

    $("button#hackerPlayVideo").click(function () {
        $("iframe#hacker").toggleClass("hidden");
    });

    $("button#ondraPlayVideo").click(function () {
        $("iframe#ondra").toggleClass("hidden");
    });

    $("button#showMap").click(function () {
        $("div#map").toggleClass("hidden");
    });

    $("#showAlert").click(function () {
        alert("This is a test!")
    });

    $("#changeBackground").click(function () {
        $("body").css("background", "url('../../../cat.png') no-repeat center center fixed");
        $("body").css("background-size", "cover");
    })
});