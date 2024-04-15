
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1);

function setup() {
  createCanvas(500, 300); // Create canvas dimensions
  dots[0] = new Dot(width/2, height/2); // Set dot at the center of the canvas
}

function draw() {
  background(200); // Background color
  
  for(let i = 0; i < dots.length; i++){
    dots[i].move(); // Move the dot 
    dots[i].display(); // Display the dot 
  }
  textSize(24);
  fill(100, 0, 200);
  text("'dots' array length: " + dots.length, 100, 100);

}

function mousePressed(){
  let obj = new Dot(mouseX, mouseY); // Create a new dot object at the mouse position
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */
 dots.push(obj);

}


function Dot(X, Y){
  
  this.x = X;
  this.y = Y;
  this.w = random (20, 50); // Set a random width for the dot
  this.sx = random(-5, 5); // Set a random horizontal speed for the dot 
  this.sy = random(-5, 5); // Set a ranfom vertical speed for the dot
  this.r = random(0, 255); // Set a random red color for the dot
  this.g = random(0, 255); // Set a random green color for the dot 
  this.b = random(0, 255); // Set a random blue color for the dot
  
  this.display = function(){
    fill(this.r, this.g, this.b); // Set fill color
    ellipse(this.x, this.y, this.w, this.w); // Draw an eclipse
  }
  
  this.move = function(){
    this.x += this.sx; // Show horizontal position
    this.y += this.sy; // Show vertical position
    
    if (this.x < 0 || this.x > width){
        this.sx *= -1;
    }
    if (this.y < 0 || this.y > height){
        this.sy *= -1;
    }
  }
    
}
