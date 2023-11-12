console.log("i hope im connected");
// console.log("I am connected");

window.alert("Let's play Rock, Paper, Scissors!");

//Create tie, win, lose to store scores
var tie = 0;
var win= 0;
var lose= 0; 

let gameBegin = function(){
    var promptChoice = prompt("Enter R for Rock, P for Paper, or S for Scissors");
    let personChoice = promptChoice.toUpperCase();
    console.log(`this is person choice ${personChoice}`);
  
   
    let randomLetter = ["Rock","Paper","Scissors"];
    function compChoice(){
        var compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
        console.log(compChoice);//Scissors
        let letter = compChoice.charAt(0);//.charAt(selects one letter)
        console.log(letter); // S

        if(personChoice === letter){
            alert(`The computer chose: ${compChoice}, it is a tie`); tie++;  
        }else if((personChoice === "R" && letter === "S") ||(personChoice === "P" && letter === "R") || (personChoice === "S" && letter === "P")){
            alert(`The computer chose ${compChoice}, you win!`);win++;
        }else{
            alert(`The computer chose: ${compChoice} you lose.`); lose ++;
         };
        alert(`Status: \n Your Total wins = ${win} \n Your Total losses = ${lose} \n Your Total Ties = ${tie}`); 
    };
   compChoice();

    var repeat = window.confirm("Do you want to play more?");
         if(repeat === true){
            gameBegin();
         }else{
            alert("Game over")
         }
};
gameBegin();