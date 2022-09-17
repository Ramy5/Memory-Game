"use strict";

//////// DATA LEVELS ////////
// constructor function
// const Data = function (level, time, tries, [...icons]) {
//   this.level = level;
//   this.time = time; // in second
//   this.tries = tries;
//   this.icons = icons;
// };

// class ES6
class Data {
  constructor(level, time, tries, [...icons]) {
    this.level = level;
    this.time = time; // in second
    this.tries = tries;
    this.icons = icons;
  }
}

const easy = new Data("easy", 150, 10, [
  `<i class="fa-solid fa-magnifying-glass" data-icon="search"></i>`,
  `<i class="fa-brands fa-facebook" data-icon="facebook"></i>`,
  `<i class="fa-solid fa-user" data-icon="user"></i>`,
  `<i class="fa-solid fa-image" data-icon="image"></i>`,
  `<i class="fa-solid fa-star" data-icon="star"></i>`,
  `<i class="fa-solid fa-heart" data-icon="heart"></i>`,
  `<i class="fa-solid fa-location-dot" data-icon="location"></i>`,
  `<i class="fa-brands fa-github" data-icon="github"></i>`,
  `<i class="fa-solid fa-phone" data-icon="phone"></i>`,
  `<i class="fa-solid fa-music" data-icon="music"></i>`,
  `<i class="fa-solid fa-magnifying-glass" data-icon="search"></i>`,
  `<i class="fa-brands fa-facebook" data-icon="facebook"></i>`,
  `<i class="fa-solid fa-user" data-icon="user"></i>`,
  `<i class="fa-solid fa-image" data-icon="image"></i>`,
  `<i class="fa-solid fa-star" data-icon="star"></i>`,
  `<i class="fa-solid fa-heart" data-icon="heart"></i>`,
  `<i class="fa-solid fa-location-dot" data-icon="location"></i>`,
  `<i class="fa-brands fa-github" data-icon="github"></i>`,
  `<i class="fa-solid fa-phone" data-icon="ph one"></i>`,
  `<i class="fa-solid fa-music" data-icon="music"></i>`,
]);

const normal = new Data("normal", 150, 12, [
  `<i class="fa-solid fa-magnifying-glass" data-icon="search"></i>`,
  `<i class="fa-brands fa-facebook" data-icon="facebook"></i>`,
  `<i class="fa-solid fa-user" data-icon="user"></i>`,
  `<i class="fa-solid fa-image" data-icon="image"></i>`,
  `<i class="fa-solid fa-star" data-icon="star"></i>`,
  `<i class="fa-solid fa-heart" data-icon="heart"></i>`,
  `<i class="fa-solid fa-location-dot" data-icon="location"></i>`,
  `<i class="fa-brands fa-github" data-icon="github"></i>`,
  `<i class="fa-solid fa-phone" data-icon="phone"></i>`,
  `<i class="fa-solid fa-music" data-icon="music"></i>`,
  `<i class="fa-brands fa-instagram" data-icon="instagram"></i>`,
  `<i class="fa-brands fa-twitter" data-icon="twitter"></i>`,
  `<i class="fa-brands fa-tiktok" data-icon="tiktok"></i>`,
  `<i class="fa-brands fa-linkedin" data-icon="linkedin"></i>`,
  `<i class="fa-solid fa-magnifying-glass" data-icon="search"></i>`,
  `<i class="fa-brands fa-facebook" data-icon="facebook"></i>`,
  `<i class="fa-solid fa-user" data-icon="user"></i>`,
  `<i class="fa-solid fa-image" data-icon="image"></i>`,
  `<i class="fa-solid fa-star" data-icon="star"></i>`,
  `<i class="fa-solid fa-heart" data-icon="heart"></i>`,
  `<i class="fa-solid fa-location-dot" data-icon="location"></i>`,
  `<i class="fa-brands fa-github" data-icon="github"></i>`,
  `<i class="fa-solid fa-phone" data-icon="phone"></i>`,
  `<i class="fa-solid fa-music" data-icon="music"></i>`,
  `<i class="fa-brands fa-instagram" data-icon="instagram"></i>`,
  `<i class="fa-brands fa-twitter" data-icon="twitter"></i>`,
  `<i class="fa-brands fa-tiktok" data-icon="tiktok"></i>`,
  `<i class="fa-brands fa-linkedin" data-icon="linkedin"></i>`,
]);

const hard = new Data("hard", 90, 10, [
  `<i class="fa-solid fa-magnifying-glass" data-icon="search"></i>`,
  `<i class="fa-brands fa-facebook" data-icon="facebook"></i>`,
  `<i class="fa-solid fa-user" data-icon="user"></i>`,
  `<i class="fa-solid fa-image" data-icon="image"></i>`,
  `<i class="fa-solid fa-star" data-icon="star"></i>`,
  `<i class="fa-solid fa-heart" data-icon="heart"></i>`,
  `<i class="fa-solid fa-location-dot" data-icon="location"></i>`,
  `<i class="fa-brands fa-github" data-icon="github"></i>`,
  `<i class="fa-solid fa-phone" data-icon="phone"></i>`,
  `<i class="fa-solid fa-music" data-icon="music"></i>`,
  `<i class="fa-brands fa-instagram" data-icon="instagram"></i>`,
  `<i class="fa-brands fa-twitter" data-icon="twitter"></i>`,
  `<i class="fa-brands fa-tiktok" data-icon="tiktok"></i>`,
  `<i class="fa-brands fa-linkedin" data-icon="linkedin"></i>`,
  `<i class="fa-brands fa-apple" data-icon="apple"></i>`,
  `<i class="fa-solid fa-car" data-icon="car"></i>`,
  `<i class="fa-solid fa-magnifying-glass" data-icon="search"></i>`,
  `<i class="fa-brands fa-facebook" data-icon="facebook"></i>`,
  `<i class="fa-solid fa-user" data-icon="user"></i>`,
  `<i class="fa-solid fa-image" data-icon="image"></i>`,
  `<i class="fa-solid fa-star" data-icon="star"></i>`,
  `<i class="fa-solid fa-heart" data-icon="heart"></i>`,
  `<i class="fa-solid fa-location-dot" data-icon="location"></i>`,
  `<i class="fa-brands fa-github" data-icon="github"></i>`,
  `<i class="fa-solid fa-phone" data-icon="phone"></i>`,
  `<i class="fa-solid fa-music" data-icon="music"></i>`,
  `<i class="fa-brands fa-instagram" data-icon="instagram"></i>`,
  `<i class="fa-brands fa-twitter" data-icon="twitter"></i>`,
  `<i class="fa-brands fa-tiktok" data-icon="tiktok"></i>`,
  `<i class="fa-brands fa-linkedin" data-icon="linkedin"></i>`,
  `<i class="fa-brands fa-apple" data-icon="apple"></i>`,
  `<i class="fa-solid fa-car" data-icon="car"></i>`,
]);

const levels = [easy, normal, hard];

//////// SELECTION ////////
const startGameOverlay = document.querySelector(".start__game");
const levelSelect = document.querySelector(".select__level");
const userNameInput = document.querySelector(".input__name");
const startBtn = document.querySelector(".start__btn");
const userName = document.querySelector(".name");
const timeOut = document.querySelector(".time");
const tries = document.querySelector(".try");
const gameContainer = document.querySelector(".game__container");
const endGame = document.querySelector(".end__game");
const gameResult = document.querySelector(".result");
const closeBtn = document.querySelector(".close");
const playAgain = document.querySelector(".again");
const duration = 1000;
let currentLevel, timer;

// sounds
let clickSound = document.getElementById("click");
let correctSound = document.getElementById("correct");
let startSound = document.getElementById("start");
let winSound = document.getElementById("win");
let loseSound = document.getElementById("lose");

//////// functions ////////
const generateName = function () {
  const name = userNameInput.value.split("");
  const formatName =
    userNameInput.value !== ""
      ? name[0].toUpperCase() + name.slice(1).join("")
      : "Player";

  // add name to page
  userName.textContent = formatName;
};

let tick;
const generateTime = function (level) {
  let levelTime = level.time;
  tick = function () {
    const min = String(Math.trunc(levelTime / 60)).padStart(2, 0);
    const sec = String(levelTime % 60).padStart(2, 0);

    timeOut.textContent = `${min}:${sec}`;

    if (levelTime === 0) {
      clearInterval(timer);
      endGame.classList.remove("hidden");
      document
        .querySelectorAll(".block")
        .forEach((block) => block.classList.add("stop__click"));

      winAndLose("lose-btn", "lose", "Game Over"); // when lose
    }

    levelTime--;
  };

  tick();
  timer = setInterval(tick, 1000);
  return timer;
};

// shuffle my array (swap them) every refersh page
const shuffle = function (arr) {
  let current = arr.length,
    random;

  while (current != 0) {
    random = Math.floor(Math.random() * current);

    current--;

    [arr[current], arr[random]] = [arr[random], arr[current]];
  }

  return arr;
};

const generateBlocks = function (level) {
  const orderlength = new Array(level.icons.length); // make empty array
  const orderNumber = [...orderlength.keys()]; // get the keys (numbers)
  shuffle(orderNumber); // shuffle them

  gameContainer.innerHTML = "";
  for (let i = 0; i < level.icons.length; i++) {
    const html = `
      <div class="block">
        <div class="face front"></div>
        <div class="face back">${level.icons[orderNumber[i]]}</div>
      </div>
    `;

    gameContainer.insertAdjacentHTML("beforeend", html);
  }
};

//////// create page function depend on select value ////////
const generatePage = function () {
  // find object level
  currentLevel = levels.find((obj) => obj.level === levelSelect.value);

  // generate block
  generateBlocks(currentLevel);

  // generate name
  generateName();

  // generate time
  generateTime(currentLevel);

  // add tries to page
  tries.textContent = currentLevel.tries;
};

// function when lose or win
const winAndLose = function (valBtn, res, txt) {
  closeBtn.classList.add(valBtn);
  gameResult.classList.add(res);
  gameResult.textContent = txt;
  playAgain.classList.add(valBtn);
};

// function to reset when lose or win
const winAndLoseReset = function (valBtn, res) {
  closeBtn.classList.remove(valBtn);
  gameResult.classList.remove(res);
  playAgain.classList.remove(valBtn);
};

//////// click start button event ////////
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  startSound.play();

  // generate page
  generatePage();

  // remove popup start game => overlay
  startGameOverlay.classList.add("hidden");

  // when the game is beganing rotate all block then after specific period and hide them again
  setTimeout(() => {
    gameContainer.classList.add("stop__click");
    document
      .querySelectorAll(".block")
      .forEach((block) => block.classList.add("flipped"));
  }, 250);

  setTimeout(() => {
    document
      .querySelectorAll(".block")
      .forEach((block) => block.classList.remove("flipped"));
    gameContainer.classList.remove("stop__click");
  }, 4000);
});

//////// click event on blocks ////////
// function for check if the flipping element has the same dataset or no
let winning = []; // to add blocks that contain match class (win game)
const check = function (first, second) {
  if (
    first.querySelector(".back svg").dataset.icon ===
    second.querySelector(".back svg").dataset.icon
  ) {
    correctSound.play();
    first.classList.remove("flipped");
    second.classList.remove("flipped");

    // add class match
    first.classList.add("match");
    second.classList.add("match");

    // push these two element that contain match class to winning array
    winning.push(first);
    winning.push(second);

    // win game
    if (winning.length === currentLevel.icons.length) {
      winSound.play();
      endGame.classList.remove("hidden");

      winAndLoseReset("lose-btn", "lose"); // reset
      winAndLose("win-btn", "win", "Awesome"); // win game

      clearInterval(timer);
    }
  } else {
    setTimeout(() => {
      first.classList.remove("flipped");
      second.classList.remove("flipped");
      // decrese tries
      tries.textContent--;

      // lose game
      if (+tries.textContent <= 0) {
        loseSound.play();
        tries.textContent = 0;
        endGame.classList.remove("hidden");
        document
          .querySelectorAll(".block")
          .forEach((block) => block.classList.add("stop__click"));

        clearInterval(timer);

        winAndLoseReset("win-btn", "win"); // reset
        winAndLose("lose-btn", "lose", "Game Over"); // win lose
      }
    }, duration);
  }

  setTimeout(() => {
    gameContainer.classList.remove("stop__click");
  }, duration);
  flipping = []; // empty the array to start check again
};

let flipping = []; // two blocks that contain flipped class (use to check)
gameContainer.addEventListener("click", function (e) {
  const target = e.target.closest(".block");

  // add filpped class when click and push the element in flipping array
  if (target) {
    clickSound.play();
    target.classList.add("flipped");
    flipping.push(target);
  }

  // check length of flipping and stop clicking
  if (flipping.length === 2) {
    gameContainer.classList.add("stop__click");
    // function for check same icons
    check(flipping[0], flipping[1]);
  }
});

//////// click event on close btn ////////
closeBtn.addEventListener("click", () => endGame.classList.add("hidden"));

//////// click event on play again btn ////////
playAgain.addEventListener("click", function () {
  startSound.play();
  // hidden end game
  endGame.classList.add("hidden");

  // reset array that contain all blocks with match class
  winning = [];

  startBtn.click();
});
