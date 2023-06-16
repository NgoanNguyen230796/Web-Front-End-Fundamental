let element = null;
function init() {
  element = document.getElementById("coffin_dance");
  element.style.position = "relative";
  element.style.top = "0px";
  element.style.left = "0px";
}

function upArrowPressed() {
  element = document.getElementById("coffin_dance");
  element.style.top = parseInt(element.style.top) - 5 + "px";
}
function downArrowPressed() {
  element = document.getElementById("coffin_dance");
  element.style.top = parseInt(element.style.top) + 5 + "px";
}
function leftArrowPressed() {
  element = document.getElementById("coffin_dance");
  element.style.left = parseInt(element.style.left) - 5 + "px";
}
function rightArrowPressed() {
  element = document.getElementById("coffin_dance");
  element.style.left = parseInt(element.style.left) + 5 + "px";
}
function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
}

function docReady() {
  init();
  window.addEventListener("keydown", moveSelection);
}
