seconds = 0;

function goUpOrDown() {
    document.getElementById("timer").innerHTML = seconds;

    if (seconds < 0){
        alert("Cannot go below 0");
        seconds = 0;
        document.getElementById("timer").innerHTML = seconds;
    }
}

let down = null;

function startTimer(){
    let countDown = seconds;
    console.log(countDown);
    if (countDown === 0 ) {
        alert("Please set your time before pressing start!");
    }
    down = setInterval(function() {
        countDown--
        if (countDown >= 0) {
            timeLeft = document.getElementById("timer");
            timeLeft.innerHTML = countDown;
        }
        if (countDown === 0) {
            clearInterval(countDown);
            seconds = 0;

            setTimeout(function(){
                let audio = new Audio('./audio/timeUp.wav');
                audio.play();
            }, 500);
            
            setTimeout(function(){
                alert("Time's up");
            }, 1000);
        }
    }, 1000);
}

function resetTimer(){
    clearInterval(down);
    document.getElementById("timer").innerHTML = 0;
    seconds = 0;
}
