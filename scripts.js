// Nav menu bar
// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }

let menuImage = document.querySelector(".mob-wrapper");
let menuLinks = document.querySelector(".mob-nav");

menuImage.addEventListener("click", function () {
  let value = menuLinks.classList.contains("navAppear");

  if (value) {
    menuLinks.classList.remove("navAppear");
  } else {
    menuLinks.classList.add("navAppear");
  }
});

// Game Scroll Feature
function scrollGame() {
  let game = document.querySelectorAll(".game");

  game.forEach((listTwo) => {
    let gameOnePosition = listTwo.getBoundingClientRect().top;
    let gameOneScroll = window.innerHeight / 1.5;
    if (gameOnePosition < gameOneScroll) {
      listTwo.classList.add("gameAppear");
    }
  });
}

window.addEventListener("scroll", scrollGame);

// Console Game

function scrollConsole() {
  let consoleOne = document.querySelectorAll(".console");
  let consoleText = document.querySelectorAll(".consoleText");

  consoleOne.forEach((consoleDevices) => {
    let consoleScroll = consoleDevices.getBoundingClientRect().top;
    let consolePosition = window.innerHeight / 5.0;
    if (consoleScroll < consolePosition) {
      consoleDevices.classList.add("consoleAppear");
    }
  });

  consoleText.forEach((consoleLetters) => {
    let consoleScroll = consoleLetters.getBoundingClientRect().top;
    let consolePosition = window.innerHeight / 5.0;
    if (consoleScroll < consolePosition) {
      consoleLetters.classList.add("consoleAppear");
    }
  });
}

window.addEventListener("scroll", scrollConsole);

// Accessories

function scrollAccessories() {
  let accessory = document.querySelectorAll(".accessory");
  let accessoryText = document.querySelectorAll(".accessoryText");

  accessory.forEach((accessoryItems) => {
    let accessoryPosition = accessoryItems.getBoundingClientRect().top;
    let accessoryScroll = window.innerHeight / 5.0;

    if (accessoryPosition < accessoryScroll) {
      accessoryItems.classList.add("accessoryAppear");
    }
  });

  accessoryText.forEach((accessoryLetters) => {
    let accessoryTextPosition = accessoryLetters.getBoundingClientRect().top;
    let accessoryTextScroll = window.innerHeight / 5.0;

    if (accessoryTextPosition < accessoryTextScroll) {
      accessoryLetters.classList.add("accessoryAppear");
    }
  });
}

window.addEventListener("scroll", scrollAccessories);

// Table & Mobile consoles/acessories
function mobileFunction() {
  let mobileScroll = document.querySelectorAll(".mobileScroll");
  let mobileScrollText = document.querySelectorAll(".mobileScrollText");

  mobileScroll.forEach((mobileConsoleScroll) => {
    let mobileScrollPosition = mobileConsoleScroll.getBoundingClientRect().top;
    let mobileScrollTextWindow = window.innerHeight / 5.0;

    if (mobileScrollPosition < mobileScrollTextWindow) {
      mobileConsoleScroll.classList.add("mobileScrollAppear");
    }
  });

  mobileScrollText.forEach((mobileText) => {
    let mobileTextPosition = mobileText.getBoundingClientRect().top;
    let mobileTextWindow = window.innerHeight / 1.5;

    if (mobileTextPosition < mobileTextWindow) {
      mobileText.classList.add("mobileScrollAppear");
    }
  });
}
window.addEventListener("scroll", mobileFunction);
