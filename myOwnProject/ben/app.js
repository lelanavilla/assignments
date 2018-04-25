
var leftArm = '/images/leftArm.png';
var legs = '/images/legs.png';
var torso = '/images/torso.png';
var rightArm = '/images/rightArm.png';
var head = '/images/head.png';
var hair = '/images/hair.png;'




//create a new object to hold our image references
var images = {};
//load each of our character parts via the loadImage function with the parameter corresponding to the part name
loadImage("leftArm");
loadImage("legs");
loadImage("torso");
loadImage("rightArm");
loadImage("head");
loadImage("hair");
// use the loadImage function will create
// a new image object that points to each body part you need
//loadImage will also apply the onload () on every
//image, and as a result call the resourceLoaded()
function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  //set the path by deconstructing the paths route
  images[name].src = "images/" + name + ".png";
}

//set some variables so you can track the
//image loading process and figure out how many
//times youll need the redraw () per second, and set a variable
//equal to the number you decided
var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;

//create a function that checks to make sure all
// the images are being loaded
//then create a timer
function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
  console.log(resourcesLoaded());
}

//IMPORTANT!! The order in which the body parts are loaded is EXTREMELY important!
//the body parts need to be loaded- start with the body part that will be farthest away

var context = document.getElementById('canvas').getContext("2d");
//Layer by layer, each body part's image is positioned and then drawn on an HTML5 canvas.

//set your cartoon image to the x/y coordinates it
//will live at
var charX = 245;
var charY = 185;
  
function redraw() {

  var x = charX;
  var y = charY;

  canvas.width = canvas.width; // clears the canvas

   //drawImage takes three parameters- what your referencing
   //your image by, the x position, and the y-position
   //NOTE:the top left hand corner is the point the images will be relative to
   //on the screen                
  context.drawImage(images["leftArm"], x + 40, y - 42);
  context.drawImage(images["legs"], x, y);
  context.drawImage(images["torso"], x, y - 50);
  context.drawImage(images["rightArm"], x - 15, y - 42);
  context.drawImage(images["head"], x - 10, y - 125);
  context.drawImage(images["hair"], x - 37, y - 138);
}

//EYES

//dymanically create bens eyes once the images are all rendered to
//the screen
//drawEllipse() takes four params - the two dimensions/ two positions
function redraw() {
    // ...
    drawEllipse(x + 47, y - 68, 8, 14); // Left Eye
    drawEllipse(x + 58, y - 68, 8, 14); // Right Eye
  }
  function drawEllipse(centerX, centerY, width, height) {
	
    context.beginPath();
    
    context.moveTo(centerX, centerY - height/2);
    
    context.bezierCurveTo(
      centerX + width/2, centerY - height/2,
      centerX + width/2, centerY + height/2,
      centerX, centerY + height/2);
  
    context.bezierCurveTo(
      centerX - width/2, centerY + height/2,
      centerX - width/2, centerY - height/2,
      centerX, centerY - height/2);
   
    context.fillStyle = "black";
    context.fill();
    context.closePath();	
  }
//create a shadow to create a 3d effect for cartoon
//set the shadow layer on the bottm layer
function redraw() {
    // ...
    canvas.width = canvas.width; // clears the canvas 
    
    drawEllipse(x + 40, y + 29, 160, 6);
    // ...
  }  

  //CODE LIFE INTO THE CHARACTER

  //BREATHE

  var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);

//create a function take increases the breatheAmt(inhale) to the breathMax 
//then changes direction(exhale)

function updateBreath() { 
                        
  if (breathDir === 1) {  // breath in
    breathAmt -= breathInc;
    if (breathAmt < -breathMax) {
      breathDir = -1;
    }
  } else {  // breath out
    breathAmt += breathInc;
    if(breathAmt > breathMax) {
      breathDir = 1;
    }
  }
}

//create a helper function with redraw() for the updateBreath that will 
//vary the position of certain body parts   

//subtract the vertical location by the value of the variable breathAmt 
//for all the pieces we want to oscillate.
// Reflect this vertical motion in the shadow by creating a change in width in the shadow

function redraw() {
                        
    canvas.width = canvas.width; // clears the canvas 
  
    drawEllipse(x + 40, y + 29, 160 - breathAmt, 6); // Shadow
  
    context.drawImage(images["leftArm"], x + 40, y - 42 - breathAmt);
    context.drawImage(images["legs"], x, y);
    context.drawImage(images["torso"], x, y - 50);
    context.drawImage(images["head"], x - 10, y - 125 - breathAmt);
    context.drawImage(images["hair"], x - 37, y - 138 - breathAmt);
    context.drawImage(images["rightArm"], x - 15, y - 42 - breathAmt);
      
    drawEllipse(x + 47, y - 68 - breathAmt, 8, 14); // Left Eye
    drawEllipse(x + 58, y - 68 - breathAmt, 8, 14); // Right Eye
  }

  //make the character blink
//set some global variables
  var maxEyeHeight = 14;// eyes height when the eyes are wide open
  var curEyeHeight = maxEyeHeight;//current height of the characters eyes while blinking
  var eyeOpenTime = 0;//milliseconds since the last blink
  var timeBtwBlinks = 4000;//milliseconds between blinks
  var blinkUpdateTime = 200;//milliseconds before you update the blink status                    
  var blinkTimer = setInterval(updateBlink, blinkUpdateTime);// create a timer and set an amount of time
  //in milliseconds that will be the length of time until the updateBlink() is called

 // Update the redraw function so the height corresponds with the new variable curEyeHeight

 function redraw() {
    // ...
    drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight);
    drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight);
  }
  //create a function that every few seconds checks to see if its time to blink
    function updateBlink() { 
    eyeOpenTime += blinkUpdateTime;
      
    if(eyeOpenTime >= timeBtwBlinks){
      blink();
    }
  }

//MAIN BLINK FUNCTION
  //create the main blink function which should :
  // updateBlink function should update time by increasing the variable eyeOpenTime
  // and check if the eye open time is greater than the timeBtwBlinksvalue
  
  //decrement the current eye height until reaching zero.
  // When the eyes are closed set the eye height to maximum 
  //and reset the eye open time.

  function blink() {

    curEyeHeight -= 1;
    if (curEyeHeight <= 0) {
      eyeOpenTime = 0;
      curEyeHeight = maxEyeHeight;
    } else {
      setTimeout(blink, 10);
    }
  }
  