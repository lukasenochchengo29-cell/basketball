const minusOne = document.getElementById("minusOne");
const plusTwo = document.getElementById("plusTwo");
const plusThree = document.getElementById("plusThree");
const minusOne2 = document.getElementById("minusOne2");
const plusTwo2 = document.getElementById("plusTwo2");
const plusThree2 = document.getElementById("plusThree2");
const foulAddTeamA = document.getElementById("foulAddTeamA");
const foulSubtractTeamA = document.getElementById("foulSubtractTeamA");
const foulAddTeamB = document.getElementById("foulAddTeamB");
const foulSubtractTeamB = document.getElementById("foulSubtractTeamB");
const reset = document.getElementById("resetBtn");
let count = 0;
let count1 = 0;
let foul = 0;
let foul1 = 0;

minusOne.onclick = function () {
  count--;
  document.getElementById("resultsOne").textContent = count;
};
plusTwo.onclick = function () {
  count = count + 2;
  document.getElementById("resultsOne").textContent = count;
};
plusThree.onclick = function () {
  count = count + 3;
  document.getElementById("resultsOne").textContent = count;
};
minusOne2.onclick = function () {
  count1--;
  document.getElementById("resultsTwo").textContent = count1;
};
plusTwo2.onclick = function () {
  count1 = count1 + 2;
  document.getElementById("resultsTwo").textContent = count1;
};
plusThree2.onclick = function () {
  count1 = count1 + 3;
  document.getElementById("resultsTwo").textContent = count1;
};
foulAddTeamA.onclick = function () {
  foul++;
  document.getElementById("foulA").textContent = foul;
};
foulSubtractTeamA.onclick = function () {
  foul--;
  document.getElementById("foulA").textContent = foul;
};
foulAddTeamB.onclick = function () {
  foul1++;
  document.getElementById("foulB").textContent = foul1;
};
foulSubtractTeamB.onclick = function () {
  foul1--;
  document.getElementById("foulB").textContent = foul1;
};
reset.onclick = function () {
  count = 0;
  count1 = 0;
  foul = 0;
  foul1 = 0;
  document.getElementById("resultsOne").textContent = count;
  document.getElementById("resultsTwo").textContent = count1;
  document.getElementById("foulA").textContent = foul;
  document.getElementById("foulB").textContent = foul1;
};

//vibe coded
let countdown;
let timeLeft;
let isPaused = false;

const timerDisplay = document.getElementById("timer-display");
const minutesInput = document.getElementById("minutesInput");
const setTime = document.getElementById("setTime");
const startBtn = document.getElementById("startBtn");
const resetBtnTime = document.getElementById("resetBtnTime");
const pause = document.getElementById("pause");

function updateDisplay(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  timerDisplay.textContent = `${m < 10 ? "0" : ""}${m}:${
    s < 10 ? "0" : ""
  }${s}`;
}

setTime.addEventListener("click", () => {
  clearInterval(countdown);
  const mins = parseInt(minutesInput.value);
  if (!isNaN(mins) && mins > 0) {
    timeLeft = mins * 60;
    updateDisplay(timeLeft);
  }
});

startBtn.addEventListener("click", () => {
  if (!timeLeft || (countdown && !isPaused)) return;

  isPaused = false;
  clearInterval(countdown);

  countdown = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(countdown);
    }
  }, 1000);
});

pause.addEventListener("click", () => {
  isPaused = true;
  clearInterval(countdown);
});

resetBtnTime.addEventListener("click", () => {
  clearInterval(countdown);
  timeLeft = 0;
  updateDisplay(0);
  minutesInput.value = "0";
});
