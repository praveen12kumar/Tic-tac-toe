let currentPlayer = "X";
let arr = Array(9).fill(null);
 

function checkWinner(arr) {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        setTimeout(() => {
            alert("Winner is " + currentPlayer);
        }, 0);
        return true;
    }
    return false;
}

function resetGame(){
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
    });
    arr = Array(9).fill(null); 
    currentPlayer = "X";
    turn = true;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const resetBtn = document.createElement("button");
    const container = document.querySelector(".container");
    container.appendChild(resetBtn);

    resetBtn.textContent = "Reset";
    resetBtn.classList.add("reset-btn");

    let player1 = "X";
    let player2 = "O";
    let turn = true;


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let index = Number(btn.value);

            if(turn){
                arr[index] = player1;
                btn.textContent = player1;
                turn = false;
                currentPlayer = player1;
            }else{
                arr[index] = player2;
                btn.textContent = player2;
                turn = true;
                currentPlayer = player2;
            }
            btn.disabled = true;

            if(checkWinner(arr)){
                buttons.forEach(btn => {
                    btn.disabled = true;  // Disabled all buttons if there is a winner
                }) 
            }
        })
    })
    resetBtn.addEventListener("click", resetGame)
});
