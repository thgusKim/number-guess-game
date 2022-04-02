let answer = 0;
let tryNum = 5;
let goButton = document.getElementById("go-button");
let inputBox = document.getElementById("input-box");
let upDown = document.getElementById("up-down");
let chanceNum = document.getElementById("chance-num");
let resetButton = document.getElementById("reset-button");
let inputNums = [];

goButton.addEventListener("click", () => {
  let userInput = inputBox.value;

  if (userInput < 1 || userInput > 100) {
    upDown.textContent = "1~100 사이의 수를 입력하세요";
    return;
  }

  if (inputNums.includes(userInput)) {
    upDown.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요.";
    return;
  }

  inputNums.push(userInput);

  if (userInput == answer) {
    upDown.textContent = "That’s right";
    goButton.disabled = true;
  } else if (userInput < answer) {
    upDown.textContent = "Up!";
  } else {
    upDown.textContent = "Down!";
  }

  tryNum --;
  chanceNum.textContent = `남은 기회: ${tryNum}`;

  if (tryNum <= 0) {
    goButton.disabled = true;
  }
});

resetButton.addEventListener("click", () => {
  answer = 0;
  tryNum = 5;
  upDown.textContent = "죽기 싫다면 맞춰라";
  chanceNum.textContent = `남은 기회: ${tryNum}`;
  goButton.disabled = false;
  makeAnswer();
});

let makeAnswer = () => {
  answer = Math.ceil(Math.random() * 100);
  inputNums = [];
  console.log(answer);
};

makeAnswer();
