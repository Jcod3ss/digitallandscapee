function setup() {
createCanvas(windowWidth, windowHeight)
}

function draw(){
  //sky
  background(135,206,250);
  
  //sun
  fill(255,220,80);
  circle(width * 0.8, height * 0.2, 70);
  
  //mountains
  fill(90,100,170);
 triangle(
  width * 0.05, height * 0.75,
    width * 0.3, height * 0.3,
  width * 0.55, height * 0.75);
  
  triangle(
  width * 0.4, height * 0.75,
  width * 0.7, height * 0.35,
  width * 0.97, height * 0.75);
  
  //floor
  fill(60, 170, 100);
  rect(0, height * 0.75, width, height * 0.25);
}
