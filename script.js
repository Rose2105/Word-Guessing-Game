// List of possible secret words
const words = ["apple", "banana", "grape", "mango", "orange", "peach", "kiwi", "papaya", "pear", "lemon"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let maxAttempts = 5;
let attemptsLeft = maxAttempts;

console.log("Secret word (for testing):", secretWord); // For testing

// DOM elements
const input = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const hint = document.getElementById("hint");

hint.textContent = `Hint: The word starts with "${secretWord[0].toUpperCase()}" and has ${secretWord.length} letters.`;

// Event listeners
submitBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", restartGame);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleGuess();
  }
});

function handleGuess() {
  const userGuess = input.value.trim().toLowerCase();

  if (!userGuess) {
    showMessage(`Incorrect guess. You have ${--attemptsLeft} attempts left. Try again!`);
    checkGameOver();
    return;
  }

  if (userGuess === secretWord) {
    showMessage("🎉 Congratulations! You guessed the secret word!", "win");
    document.body.style.backgroundColor = 'Grey';
    endGame()

  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      showMessage(`❌ Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`);
    } else {
      showMessage(`💀 Game over! The secret word was "${secretWord}".`, "lose");
      endGame();
    }
  }

  input.value = "";
}

function showMessage(msg, status = "") {
  message.textContent = msg;
  message.className = status;
}

function endGame() {
  input.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  console.log("New secret word (for testing):", secretWord);
  attemptsLeft = maxAttempts;

  input.disabled = false;
  submitBtn.disabled = false;
  restartBtn.style.display = "none";
  input.value = "";
  message.textContent = "";
  message.className = "";
  hint.textContent = `Hint: The word starts with "${secretWord[0].toUpperCase()}" and has ${secretWord.length} letters.`;
  document.body.style.backgroundColor = "";
}
function endGame(isWin = false) {
    input.disabled = true;
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  }
  