 // JavaScript goes here

// var count = document.querySelector('.count');
// var updateCount = function(){
//   count.textContent = //count of stickies
// }


var board = document.querySelector('.board')

var count = document.querySelector('.count');
var countStickies = function(event){
  var counter = document.querySelectorAll('.sticky').length;
  count.textContent(counter);
}

var button = document.querySelector('button');
var handleButtonClick = function(event){
  var sticky = document.createElement('div');
  sticky.classList.add('sticky');
  sticky.setAttribute("contenteditable",'true');
  board.appendChild(sticky);
  countStickies();
}

button.addEventListener('click', handleButtonClick)

