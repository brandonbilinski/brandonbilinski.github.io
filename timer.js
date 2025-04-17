let timer;
let workTime = 25 * 60; // 25 minutes
let restTime = 5 * 60; // 5 minutes
let timeLeft = workTime;
let isRunning = false;
let isWorkSession = true; // True = work session, False = break session

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;

                if (isWorkSession) {
                    alert("Work session complete! Time for a 5-minute break.");
                    timeLeft = restTime;
                    isWorkSession = false; // Switch to break session
                } else {
                    alert("Break is over! Back to work.");
                    timeLeft = workTime;
                    isWorkSession = true; // Switch to work session
                }
                
                updateDisplay();
                startTimer(); // Auto-start the next session
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isWorkSession = true; // Reset to work session
    timeLeft = workTime;
    updateDisplay();
}

// Event listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();