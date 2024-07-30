'use Strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct no';
// document.querySelector('.number').textContent=19;
// document.querySelector('.score').textContent=16;
// document.querySelector('.guess').value=1;
let secretNumber =Math.trunc(Math.random()*20)+1;
let score = 20
let highScore=0
const displayMessage=function(message){
    document.querySelector('.message').textContent=message
}
document.querySelector('.check').addEventListener('click',
   function(){
   const guess=Number( document.querySelector('.guess').value)
//   ........ when no input.........
if (!guess){
   displayMessage('no number')
}
// ....when right guess..........
else if(guess===secretNumber){
    // 
    displayMessage('correct no')
    document.querySelector('body').style.backgroundColor='red'

  
    if (score>highScore){
highScore=score
document.querySelector('.highscore').textContent=highScore
}}
// ....guess is wrong...........
else if(guess!==secretNumber){
    if(score>1){
     document.querySelector('.message').textContent=guess>secretNumber ? 'too high':'too low'
     score--
     document.querySelector('.score').textContent=score}
     else{
        // document.querySelector('.message').textContent='you loss the game'
        displayMessage('you loss the game')
        document.querySelector('.score').textContent=0
     }}

// ...when gues is high................
// else if(guess>secretNumber){
//     if(score>1){
//  document.querySelector('.message').textContent=' too high'
//  score--
//  document.querySelector('.score').textContent=score}
//  else{
//     document.querySelector('.message').textContent='you loss the game'
//     document.querySelector('.score').textContent=0
//  }}
// // ....when guess is low..........
// else if(guess<secretNumber){
//     if(score>1){
//  document.querySelector('.message').textContent=' too low'
//  score--
//  document.querySelector('.score').textContent=score}
//  else{
//     document.querySelector('.message').textContent='you loss the game'
//     document.querySelector('.score').textContent=0
//  }}
})
// ...........again button handler.....................
document.querySelector('.again').addEventListener('click',
  function() {
    document.querySelector('.score').textContent=score
    document.querySelector('.guess').value=''
    // document.querySelector('.message').textContent='Start guessing...'
displayMessage('Start guessing......')
    document.querySelector('.number').textContent='?'
    document.querySelector('body').style.backgroundColor='#222'

  } 
)


