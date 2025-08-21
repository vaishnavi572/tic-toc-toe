let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newgame = document.querySelector("#new");
let msg = document.querySelector(".msg"); 
let winmsg = document.querySelector("#msg");
let turnO = true;

const arr = [
  [0, 1, 2],//this are the gaming winner indexeces
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

// Function to start/reset the game
const resetgame = () => {
  turnO = true;
  enable();
  msg.classList.add("hide"); // hide the winner message
};

// Add click event to all boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;//again reset the value
    } else {
      box.innerText = "X";
      turnO = true;//again reset the value
    }
    box.disabled = true;
    checkwinner();
  });
});

// Disable all boxes
const disable = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// Enable all boxes and clear text
const enable = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Show winner message
const showwinner = (winner) => {
  winmsg.innerText = `Congratulations, winner is ${winner}`;
  msg.classList.remove("hide"); // show the winner message
};

// Check for a winner
let checkwinner = () => {
  for (let pattern of arr) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos1 === pos3) {
        disable();
        showwinner(pos1);
      }
    }
  }
};

// Event listeners for reset and new game buttons
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
