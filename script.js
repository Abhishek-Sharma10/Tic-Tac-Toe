let boxes = document.querySelectorAll(".game-box");
let resetButton = document.querySelector("#reset-game");
let newButton = document.querySelector("#new-game");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

let disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

let enableBoxes = () => {
    for(let box of boxes ){
        box.disabled = false;
        box.innerText="";
        msgCont.classList.add("hide");
    }
}

let showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

let checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != ""&& pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
};

let resetGame = () => {
    turnO = true;
    enableBoxes();
}

newButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);