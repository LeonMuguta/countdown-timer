let clicks = 0;

function goUpOrDown() {
    document.getElementById("timer").innerHTML = clicks;
}

function startTimer(){
    let counter = clicks;
    let down = setInterval(function() {
        counter--
        if (counter >= 0) {
            timeLeft = document.getElementById("timer");
            timeLeft.innerHTML = counter;
        }
        if (counter === 0) {
            clearInterval(counter);
            alert("Time's Up!!!");
        }
    }, 1000);
}

// function resetTimer(){
//     document.getElementById("timer").innerHTML = 0;
//     clearInterval();
// }
