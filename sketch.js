
//Set Up 
function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(3);
  stroke(100,0,150);
  fill(133,122,204);
  frameRate(3.5)
}

function draw() {
clear();
//Background
    var randomRed = random(200,240);
    var randomGreen = random(140,180);
    var randomBlue = random(200,255);
  background(randomRed, randomGreen, randomBlue, 200);
  
// GeneralVariables
  var margin = 10;
  var width = innerWidth - 2*margin;
  var height = innerWidth - 2*margin;
  var numSquares = 3;
  var sideLen = width/numSquares;
  var space= 20;

//ShiftVaribales
  var shift = 2
  var shift2 = 10
  
  translate (margin,margin)
  
//x y setup
  for(var y=0; y < height; y = y+sideLen){
    for(var x=0; x < width; x = x+ sideLen){

//Varying colors and size
  fill(random (randomRed + 10) , random (randomGreen - 30) , random ( randomBlue + 10), 130);
  stroke(random (255,255),180 , random (255,255), 200);
      
      

//Square coordinates (with random)
      quad(x + space + random(-shift,shift) ,y + space + random(-shift,shift),
           x + sideLen - space + random(-shift,shift),y + space + random(-shift,shift),  
           x + sideLen - space + random(-shift,shift), y + sideLen - space + random(-shift,shift), 
           x + space + random(-shift,shift), y + sideLen - space + random(-shift,shift));

//diamond underneath
 // quad(x + space + random(-shift2,shift2) ,y + space + random(-shift2,shift2),
          // x + sideLen - space + random(-shift2,shift2),y + space + random(-shift2,shift2),  
          // x + sideLen - space + random(-shift2,shift2), y + sideLen - space + random(-shift2,shift2), 
          // x + space + random(-shift2,shift2), y + sideLen - space + random(-shift2,shift2));
      
  }
}
  noLoop();
}