let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#newButton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });  
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            box.style.color = "#E76F51";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#DBAA2E";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}!`;    
    msgContainer.classList.remove("hide");
};

const showDraw = () => {
    msg.innerText = `This match is drawn`;    
    msgContainer.classList.remove("hide");
};

const checkWinner = ()=>{
    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != ""){
            if (val1 === val2 && val2 === val3) {
                console.log("Winner", val1.innerText);
                showWinner(val1);
            }
        }
    }
};