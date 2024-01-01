let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let count = parseInt(timerEl.textContent);
let uniqueId = setInterval(function() {
    count = count - 1;
    if (count === 0) {
        clearInterval(uniqueId);
        timerEl.textContent = "Boom!";
    } else {
        timerEl.textContent = count;
    }
}, 1000)

defuserEl.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && defuserEl.value === "defuse") {
        clearInterval(uniqueId);
        timerEl.textContent = "You did it!";
    }
})