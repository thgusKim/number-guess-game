let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(`정답: ${computerNum}`)
}

function play() {
    let userValue = userInput.value;

    if(userValue<1 || userValue>100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해주세요";
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
        return;
    }

    chances --;
    chanceArea.textContent = `남은 기회: ${chances}번`
    
    if(userValue < computerNum) {
        resultArea.textContent = "UP!";
    }else if(userValue > computerNum) {
        resultArea.textContent = "Down!";
    }else {
        resultArea.textContent = "정답입니다!";
    }

    history.push(userValue);

    if(chances < 1) {
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    chances = 5;
    chanceArea.textContent = "남은 기회: 5";
    history = [];
}

pickRandomNum();

