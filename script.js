function showAlert() {
    alert("Hello! This is a JavaScript alert.");
}

// Run alert once page loads
showAlert();

function updateTime() {
    const now = new Date();
    const el = document.getElementById("datetime");

    if (el) {
        el.innerHTML = "Current Date & Time: " + now.toLocaleString();
    }
}

setInterval(updateTime, 1000);
updateTime();

let count = 10;

function countdown() {
    const el = document.getElementById("countdown");

    if (!el) return;

    if (count >= 0) {
        el.innerHTML = "Countdown: " + count;
        count--;
    } else {
        el.innerHTML = "Done!";
        clearInterval(timer);
    }
}

let timer = setInterval(countdown, 1000);

// Math method
let randomNumber = Math.floor(Math.random() * 100);
console.log("Random:", randomNumber);

// Delay
setTimeout(() => {
    console.log("Delayed message (3 seconds)");
}, 3000);

// Convert number/text
let num = 123;
console.log("String:", num.toString());
console.log("Number:", Number("123"));