// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
var pos2 = 20;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
    //JB - we declare pageWidth to determine the inner width of the window by using the method:
    //JB - window.innerWidth.


//This array contains all the PacMan movement images
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
    //JB - We've created 2 arrays in an array. Each has 2 elements
    //JB - when called, the syntax is as follows:
            // pacArray[0][0] will be './images/PacMan1.png'
            // pacArray[0][1] will be './images/PacMan2.png'
            // pacArray[1][0] will be './images/PacMan3.png'
            // pacArray[1][1] will be './images/PacMan4.png'

//My modification. Adding Jelli
const jellyArray = [
    ['./images/Jelly1.png', './images/Jelly2.png'],
    ['./images/Jelly3.png', './images/Jelly4.png'],
  ];


// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;
var direction2 = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;
var focus2 = 1;
// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
        //JB - we're naming this function as "Run()"
  let img = document.getElementById('PacMan');
        //JB - we're declaring that img in the js file is the index.html with id "PacMan"
  let imgWidth = img.width;
        //JB - access the img tab then width element 
  focus = (focus + 1) % 2;
        //JB - so, the result of this will either be a 0 or a 1 because of the % modulus operator
        //JB - so, focus is = 0. Then add 0 to 1 then divide by 2 = .5, result is 1 because it has a remainder
        //JB - if focus is = 1. Then add 1 to 1 then divide by 2 = 1, result is 0 becuase there's no remainder
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
        //JB - these 4 arguments are used to pass into the function checkPageBounds(direction, imgWidth, pos, pageWidth)
        //JB - This way, you can create function to determine if direction is 1 or 0.
  img.src = pacArray[direction][focus];
        //img reaches document.getElementById('PacMan'), which is index.html id Pacman
        //.src is reaching for element src, in the index.html file
        //pacArray we're calling the array with the two references [ ][ ] to select from the array above
        //pacArray[0][0] would be './images/PacMan1.png'
  if (direction) {
    pos -= 20;
        //JB - this is the position of 
        //JB - we are subtracting 20px from pos. pos is initialized at 0. See top. 
        //JB - We translate it as: 0 - 20 = -20
        //JB - if pos -= 20, basically if -20
    img.style.left = pos + 'px';
        //JB - img reaches in the index.html "img" tag and element "style" then "left", meaning x axis in the position
        //JB - pos + 'px' is 1px
        //JB - this is the reverse direction (right to left)
  } else {
    pos += 20;
    img.style.left = pos + 'px';
        //JB - reverse of everything
        //JB - this is the forward direction (left to right)
  }
}

// My Modification adding Jelly
function Run2() {
    let img = document.getElementById('Jelly');
    let imgWidth = img.width;
    focus2 = (focus2 + 1) % 2;
    direction2 = checkPageBounds2(direction2, imgWidth, pos2, pageWidth);
    img.src = jellyArray[direction2][focus];
    if (direction2) {
        pos2 -= 20;
        img.style.left = pos2 + 'px';
    } else {
        pos2 += 20;
        img.style.left = pos2 + 'px';
        }
}

// TODO: Add a Javascript setInterval() method that will call the Run() function above every 200 milliseconds. Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
// method called setInterval(), so that you can have practice using this method.
// Inside of the Run() function you will also have to add an extra argument "pageWidth", which is declared on line 4 when you call the checkPageBounds() function below. 
setInterval(Run, 150)

setInterval(Run2, 300)
    //JB - we set the interval to at # milliseconds to run the function "Run" everytime

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    //JB - these 4 arguments are used to pass into the function checkPageBounds(direction, imgWidth, pos, pageWidth)
    //JB - This way, you can create function to determine if direction is 1 or 0.
    //JB - function checkPageBounds is:
    //JB - direction = 0, initialized at 0
    //JB - imgWidth = 200 as called for img.width from the index.html
    //JB - pos = 0, Pacman's image position initiated at 0
    //JB - pageWidth = whatever the size of the window as called by method window.innerWidth

  // TODO: Complete this to reverse direction upon hitting screen edge
    if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
    if (direction == 1 && pos < 0) direction = 0;
  //
  return direction;
}

//My modification adding Jelly
function checkPageBounds2(direction2, imgWidth, pos2, pageWidth) {
  // TODO: Complete this to reverse direction upon hitting screen edge
    if (direction2 == 0 && pos2 + imgWidth > pageWidth) direction2 = 1;
    if (direction2 == 1 && pos2 < 0) direction2 = 0;
  //
  return direction2;
}

//Please do not change
//module.exports = checkPageBounds;
