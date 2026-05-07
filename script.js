// =========================
// Tutorial 9 - JavaScript
// =========================

/* REQUIRED: function that keeps track of current day and time */
function showDateTime() {
    const now = new Date();
    document.getElementById("timeDisplay").innerText =
        "Current Date/Time: " + now.toString();
}

/* REQUIRED: call function immediately */
showDateTime();

/* REQUIRED: run function at a specified interval */
setInterval(showDateTime, 1000);


/* REQUIRED: send an alert */
alert("Welcome to Project Part 2!");


/* REQUIRED: use a Math method */
let randomNumber = Math.floor(Math.random() * 100);
document.getElementById("mathOutput").innerText =
    "Random Number (Math method): " + randomNumber;


/* REQUIRED: delay a command */
setTimeout(function() {
    console.log("This message is delayed by 3 seconds");
}, 3000);


/* REQUIRED: convert between number and text */
let num = 42;
let textVersion = num.toString(); // number → text
let backToNumber = Number(textVersion); // text → number
console.log(textVersion, backToNumber);


/* REQUIRED: countdown function that updates the page */
let countdownValue = 20;

function countdown() {
    document.getElementById("countdown").innerText =
        "Countdown: " + countdownValue;

    countdownValue--;

    if (countdownValue < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerText = "Done!";
    }
}

/* REQUIRED: interval used for countdown */
let countdownInterval = setInterval(countdown, 1000);
