const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");

quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });

  if (correct && arrayValue.length === arrayQuote.length) {
    renderNewQuote();
  };
});

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
  startTimer();
}

let startTime;
let timerInterval;

function startTimer() {
  let seconds = 0;
  timerElement.innerText = seconds;
  startTime = new Date();
  timerInterval = setInterval(() => {
    seconds = getTimerTime();
    timerElement.innerText = seconds;

    if (seconds >= 15) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

function showResults() {
  const totalTypedCharacters = quoteInputElement.value.length;
  const correctTypedCharacters = document.querySelectorAll(".correct").length;
  const wpm = calculateWPM(totalTypedCharacters);
  const accuracy = calculateAccuracy(
    correctTypedCharacters,
    totalTypedCharacters
  );

  // box to display results
  const resultsBox = document.getElementById("resultsBox");
  resultsBox.innerHTML = `
      <p>Words Per Minute: ${wpm}</p>
      <p>Accuracy: ${accuracy}%</p>
    `;

  // Show the new test button
  const newTestButton = document.getElementById("newTestButton");
  newTestButton.style.display = "block";
}

function startNewTest() {
  const newTestButton = document.getElementById("newTestButton");
  newTestButton.style.display = "block";

  // Clear the results box
  const resultsBox = document.getElementById("resultsBox");
  resultsBox.innerHTML = "";

  renderNewQuote();
  // Set focus on the textarea
  quoteInputElement.focus();
}

function calculateWPM(totalCharacters) {
  const wordsPerMinute = Math.floor(
    totalCharacters / 5 / (getTimerTime() / 60)
  );
  return wordsPerMinute;
}

function calculateAccuracy(correctCharacters, totalCharacters) {
  const accuracyPercentage = (correctCharacters / totalCharacters) * 100;
  return accuracyPercentage.toFixed(2);
}

document.addEventListener('copy', function (e) {
  e.preventDefault();
});

document.addEventListener('cut', function (e) {
  e.preventDefault();
});

document.addEventListener('paste', function (e) {
  e.preventDefault();
});

renderNewQuote();