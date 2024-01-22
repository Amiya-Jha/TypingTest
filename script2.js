const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "All that glitters is not gold.",
  "Actions speak louder than words.",
  "In the midst of chaos, there is also opportunity.",
  "To be or not to be, that is the question.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Life is what happens when you're busy making other plans.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The best way to predict the future is to create it.",
  "The sky was clear, and the stars shone brightly.",
  "He couldn't believe his luck when he found a hidden treasure.",
  "The old oak tree stood tall, casting a shadow on the grass.",
  "Laughter echoed through the room as friends shared stories.",
  "The smell of freshly baked cookies filled the kitchen.",
  "The waves crashed against the rocks, creating a soothing melody.",
  "In the distance, a lone wolf howled at the full moon.",
  "Time seemed to stand still as they danced under the twinkling lights.",
  "The mountain peak was covered in a blanket of snow.",
  "A rainbow appeared after the rain, painting the sky with vibrant colors.",
  "The ancient castle stood in ruins, a reminder of a bygone era.",
  "Her eyes sparkled with mischief as she played a prank on her friend.",
  "The aroma of coffee wafted through the air in the cozy cafe.",
  "The gentle breeze rustled the leaves, creating a symphony of nature.",
  "A shooting star streaked across the night sky, granting wishes.",
  "The meadow was alive with the buzzing of bees and the chirping of crickets.",
  "A soft blanket of fog covered the city, creating an ethereal atmosphere.",
  "The bookshelf was filled with stories waiting to be discovered.",
  "The sound of children's laughter echoed in the playground.",
  "The ancient ruins held secrets waiting to be unveiled.",
  "The scent of blooming flowers permeated the air in the spring garden.",
  "The city skyline glittered with lights as night fell.",
  "The wise old owl perched on a branch, observing the world below.",
  "A gentle rain tapped on the window, lulling everyone to sleep.",
  "The bustling market was filled with the hustle and bustle of shoppers.",
  "The sun dipped below the horizon, painting the sky in hues of orange and pink.",
  "The snowflakes danced in the air, creating a winter wonderland.",
  "The carnival was a kaleidoscope of colors and sounds.",
  "The campfire crackled, casting a warm glow on the faces around it.",
  "The desert stretched out endlessly, with dunes as far as the eye could see.",
  "The violin's melody filled the concert hall, captivating the audience.",
  "The gentle stream meandered through the forest, glistening in the sunlight.",
  "A wise elder shared ancient tales around the campfire.",
  "The cityscape transformed into a sea of lights as evening descended.",
  "The butterfly fluttered from flower to flower, sipping nectar.",
  "The lighthouse guided ships safely through the stormy seas.",
  "The ancient scroll held the key to a forgotten civilization.",
  "The distant thunder heralded an approaching storm.",
  "The painter dipped the brush into vibrant colors, creating a masterpiece.",
  "The morning dew adorned the grass like a glistening diamond necklace.",
  "The choir's harmonious voices resonated in the cathedral.",
  "The scent of pine filled the air in the evergreen forest.",
  "The astronaut marveled at the beauty of Earth from space.",
  "The clock's ticking echoed in the silent room.",
  "The symphony of crickets serenaded the night.",
  "The smartphone revolutionized communication, making it accessible at our fingertips.",
  "Artificial intelligence is reshaping industries, bringing automation and innovation.",
  "Virtual reality transports users to immersive digital worlds for unique experiences.",
  "Blockchain technology is revolutionizing secure and transparent transactions.",
  "The Internet of Things connects devices, creating a network for smart living.",
  "Cybersecurity measures are crucial in protecting sensitive information online.",
  "Machine learning algorithms analyze vast datasets to derive valuable insights.",
  "Augmented reality enhances real-world environments with digital overlays.",
  "Biometric authentication, like fingerprint and facial recognition, ensures secure access.",
  "Drones are utilized for aerial surveillance, photography, and even delivery services.",
  "Cryptocurrencies, such as Bitcoin, are changing the landscape of traditional finance.",
  "Quantum computing holds the potential to solve complex problems at unprecedented speeds.",
  "3D printing technology transforms digital designs into tangible objects.",
  "Renewable energy solutions, like solar and wind power, address environmental concerns.",
  "Genetic engineering allows for precise manipulation of an organism's DNA.",
  "The Sicilian Defense is a popular chess opening known for its strategic complexity.",
  "En passant is a unique chess move where a pawn captures another pawn that has moved two squares forward.",
  "The chess endgame requires precise calculation and strategic maneuvering.",
  "Castling is a crucial chess move that involves the king and a rook for better safety.",
  "Chess grandmasters employ various opening strategies to gain a positional advantage.",
  "A well-executed cover drive in cricket is a delight to watch, combining elegance and precision.",
  "Spin bowlers use their wrist skills to impart spin on the cricket ball, making it challenging for the batsman.",
  "Cricket matches often feature nail-biting moments, keeping fans on the edge of their seats.",
  "A century in cricket, scoring 100 runs, is a milestone celebrated by players and fans alike.",
  "The Ashes series between England and Australia is one of cricket's most historic and fiercely contested rivalries.",
  "Diwali, the festival of lights, is celebrated with joy and fervor across India.",
  "The Ganges River holds immense spiritual significance and is considered sacred in Hinduism.",
  "India's diverse cuisine, from spicy curries to sweet desserts, is a gastronomic delight.",
  "Bollywood, India's film industry, produces a vast array of movies that captivate audiences worldwide.",
  "Judit Polgar, a chess legend, is widely regarded as one of the greatest female players in history.",
  "Polgar defeated multiple World Chess Champions, showcasing her exceptional skills in the game.",
  "Carlsen's dynamic playing style and endgame expertise set him apart in the world of chess.",
  "In 2019, Gukesh became the world's second-youngest grandmaster at the age of 12 years and 7 months.",
  "Vishy Anand, from India, is a former World Chess Champion known for his strategic brilliance.",
  "The move 'Anand's Immortal' is a famous chess game played by Vishy Anand against Aleksandar Lesiege.",
  "Anand's rapid chess skills make him a formidable opponent in faster time controls.",
  "Praggnanandhaa, often referred to as Pragg, is a young chess prodigy from India who achieved the title of grandmaster at age 12."
  
  // Add more sentences...
];

function getRandomParagraph() {
  const paragraph = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    paragraph.push(sentences[randomIndex]);
  }
  return paragraph.join(" ");
}

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
    showResults();
  }
});

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


let startTime;
let timerInterval;

function startTimer() {
  let seconds = 0;
  timerElement.innerText = seconds;
  startTime = new Date();

  // Clear existing timer, if any
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    seconds = getTimerTime();
    timerElement.innerText = seconds;

    if (seconds >= 60) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

async function renderNewQuote() {
  const paragraph = getRandomParagraph();
  quoteDisplayElement.innerHTML = "";
  paragraph.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  startTimer();
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

// Initial rendering of a new quote
renderNewQuote();
