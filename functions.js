function timer() {
    let today = new Date();
    let now = today.getHours( )+ ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("time").innerHTML = now;
}

setInterval(timer, 1000);
