// Creating variables for using it
let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let isRunning = false;

// this function shows the time in the given manner
function formatTime() {
    if(isRunning){
        msec++;
        
        if(msec == 99){
            sec++;
            msec = 0;
        }
        
        if(sec == 60){
            min++;
            sec = 0;
        }

        if(min == 60){
            hour++;
            min = 0;
            sec = 0;
        }


        // accessing the class objects for manipulating DOM
        document.querySelector('.ms').innerHTML = (msec < 10) ? "0" + msec : msec;
        document.querySelector('.sec').innerHTML = (sec < 10) ? "0" + sec : sec;
        document.querySelector('.min').innerHTML = (min < 10) ? "0" + min : min;
        document.querySelector('.hour').innerHTML = (hour < 10) ? "0" + hour : hour;

        setTimeout(formatTime, 10);
    }
}

// this function starts the stopwatch timer
function startTimer() {
    isRunning = true;
    formatTime();
}

// this function stops the stopwatch timer
function stopTimer() {
    isRunning = false;
}

// this function resets the stopwatch time
function resetTimer() {
    isRunning = false;

    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;


    // after reset manipulating the DOM to show the time as 0
    document.querySelector('.ms').innerHTML = "00";
    document.querySelector('.sec').innerHTML = "00";
    document.querySelector('.min').innerHTML = "00";
    document.querySelector('.hour').innerHTML = "00";
}

// handling the click events on the buttons
document.getElementById('startbtn').addEventListener('click', startTimer);
document.getElementById('stopbtn').addEventListener('click', stopTimer);
document.getElementById('resetbtn').addEventListener('click', resetTimer);
