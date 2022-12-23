console.log("Welcome to tictaktoe");

let turn = "⭐"
let ingameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "⭐" ? "🎵" : "⭐"
}
//Function to check for a win
const checkWin = () => {
    let textBox = document.getElementsByClassName('textBox');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if ((textBox[e[0]].innerText === textBox[e[1]].innerText) && (textBox[e[2]].innerText === textBox[e[1]].innerText) && (textBox[e[0]].innerText !== "") ) {
            document.querySelector('.info').innerText = textBox[e[0]].innerText + "won"
        ingameover = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ='200px'
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let textBox = element.querySelector('.textBox');
    element.addEventListener('click', () => {
        if (textBox.innerText === '') {
            textBox.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!ingameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }

        }
    })
})

//ADD on click listerner to reset  button
reset.addEventListener('click',()=>{
    let textBox = document.querySelectorAll('.textBox');
    Array.from(textBox).forEach(element =>{
        element.innerText =""
    });
    
    turn = "⭐";
    ingameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;
    
})

