import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function ramdonElement(array){
  let ramdonIndex = Math.floor(Math.random() * array.length);

  return array[ramdonIndex];
}

function generateExcuse(){
  let subject = ramdonElement(who);
  let verb = ramdonElement(action);
  let object = ramdonElement(what);
  let time = ramdonElement(when);

  return `${subject} ${verb} ${object} ${time}.`;
}

window.onload = function() {
  let excuse = generateExcuse();
  document.getElementById('excuse').innerHTML = excuse; 
};
