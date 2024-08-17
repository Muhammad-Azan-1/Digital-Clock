var clock = document.getElementById("clock");
setInterval(function () {
    var date = new Date();
    clock.innerText = date.toLocaleTimeString();
}, 1000);
