let clock = document.getElementById("clock") as HTMLElement;

setInterval(function() {
    let date = new Date()
    clock.innerText = date.toLocaleTimeString()
},1000)

