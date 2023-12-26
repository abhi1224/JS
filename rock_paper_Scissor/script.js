const boxes = document.querySelectorAll(".box")
const button = document.querySelector('.btn')
const scoreFirst = document.querySelector('.score-first')
const scoreSecond = document.querySelector('.score-second')
const choice = ['rock', 'paper', 'scissor']

let scoreYou = 0
let scoreCom = 0

const showWinner = (userWin , userChoice , comChoice) => {
    if(userWin){
        button.innerText = `You Win! Your ${userChoice} beats  ${comChoice}`
        button.style.backgroundColor = 'green'
    }
    else{
        button.innerText = `You lost ! ${userChoice} beats  your ${comChoice}`
        button.style.backgroundColor = 'red'

    }
}

const drawGame = () => {    
    button.innerHTML = "Draw Match Play Again !"
    button.style.backgroundColor = 'black'

}
const playGame = (userChoice , comChoice) => {

    console.log("user : " , userChoice + "  computer: " , comChoice);
    
    if(userChoice === comChoice){
        drawGame(userChoice, comChoice)
    }
    else{
        let userWin = true;

        if(userChoice === 'rock'){
            // paper , scissor
           userWin = comChoice === 'paper'? false : true;
        }
        else if(userChoice === 'paper'){
            // rock , scissor
            userWin = comChoice === 'scissor' ? false : true;
        }
        else{
            // rock , paper
            userWin = comChoice === 'rock' ? false : true;
        }
        showWinner(userWin , userChoice , comChoice)
    }

}

boxes.forEach((box) => {
    box.addEventListener('click' , () => {
       const userChoice = box.getAttribute('id')
        const comChoice = choice[Math.floor(Math.random() * 3)]

        playGame(userChoice , comChoice)
    })
})

