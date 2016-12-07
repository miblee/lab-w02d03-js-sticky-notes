 // JavaScript goes here

var board = document.querySelector('.board')

var count = document.querySelector('span.count');
var countStickies = function(event){
  var counter = document.querySelectorAll('.sticky').length;
  count.textContent = counter;
}

// MAKE EVENT HANDLER FOR CLICKING REMOVE 'X'
// var xButton = document.querySelectorAll('.remove');
var handleXClick = function(event){
  event.target.parentNode.remove();
}

var button = document.querySelector('button');
var handleButtonClick = function(event){
  // (1) CREATE STICKY
  var sticky = document.createElement('div');
  sticky.classList.add('sticky');
  // (3) APPEND STICKY TO STICKYBOARD
  board.appendChild(sticky);
  // (4) CALL FUNCTION TO COUNT # OF STICKIES
  countStickies();
  // STILL NEED TO ADD .REMOVE SPAN::
  // CREATE SPAN ELEM
  var remove = document.createElement('span');
  // CLASSLIST.ADD 'REMOVE' CLASS TO SPAN
  remove.classList.add('remove');
  // SPAN TEXT CONTENT = X (TO REMOVE)
  remove.textContent = 'X';
  // APPEND SPAN .REMOVE TO STICKY
  sticky.appendChild(remove);
  remove.addEventListener('click', handleXClick);

  // (2) MAKE CONTENT EDITABLE IN STICKY INNER DIV
  var writingSection = document.createElement('div');
  writingSection.classList.add('writingSection');
  writingSection.setAttribute("contenteditable", "true");
  sticky.appendChild(writingSection)
}


// ATTACH EVENT LISTENER ON BUTTON CLICK TO CREATE FULL STICKY + BOARD
button.addEventListener('click', handleButtonClick)



