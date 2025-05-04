let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#userscore")
const compScorePara= document.querySelector("#compscore")


const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"]
    const rdIdx= Math.floor(Math.random()*3)
    return options[rdIdx];
};

const drawGame =  ()=> {
    console.log("Game was drawn")
    msg.innerText = "Draw, Play Again!"
    msg.style.backgroundColor = "#081b31"

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You Win!")
        msg.innerText = `You Win!, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"

    } else {
        compScore++;
        compScorePara.innerText= compScore;
        
        console.log("You Lose.")
        msg.innerText = `You Lost, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"

    }
}

const playgame = (userChoice) => {
    console.log("User Choice is =",userChoice)
    const compChoice= genCompChoice();
    console.log("Computer Choice is =",compChoice)

    if (userChoice===compChoice){
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;                
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;                
        } else {
            userWin = compChoice === "rock" ? false : true;                
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice)
    });
});