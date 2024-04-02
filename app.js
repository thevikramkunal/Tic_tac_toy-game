let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");
let newgameBtn = document.querySelector("#restart");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame =()=>{
  turnO= true;
  eneabledBoxes();
  msgcontainer.classList.add("hide")
}

// Define disabledboxes function outside forEach loop
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const eneabledBoxes = () => {
  for (let box of boxes) {
      box.disabled = false;
      box.innerText ="";
  }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes(); // Call disabledboxes here
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner is 🎉🎉👉🏻", pos1val);
                showwinner(pos1val);
            }
        }
    }
};
newgameBtn.addEventListener("click", resetgame);
resetBtn.forEach(btn => {
    btn.addEventListener("click", resetgame);
});

