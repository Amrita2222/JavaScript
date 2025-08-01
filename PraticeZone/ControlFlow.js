/* Student grade logic:
 Write a program that prints A, B, C, D, or F based on marks
 */
let marks = 85;
if(marks >= 90){
    console.log('grade A');
}
else if(marks >= 80){
    console.log('grade B')
}
else if(marks >= 70){
    console.log('grade C');
}
else if(marks >= 60){
     console.log('grade D');
}
else if(marks >= 50){
     console.log('grade F');
}
else{
    console.log('fail'); 
}

/* Rock-paper-scissors:
 Given player1 and player2's choice, print winner or draw
*/

let player1 = 'rock';
let player2 = 'scissors';

console.log(`player 1: ${player1}`);
console.log(`player 2: ${player2}`);

if(player1 === player2){
    console.log('Result: match is draw');
}
else if((player1 === 'rock' && player2 === 'scissors') || (player1 == 'scissors' && player2 === 'rock' ) || (player1 === 'paper' && player2 === 'rock')){
     console.log('Player 1 is wins the match');
}
else{
    console.log('Player 2 is wins the match'); 
}