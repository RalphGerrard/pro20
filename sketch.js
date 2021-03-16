var fixedR, movingR;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  fixedR = createSprite(400,200,80,50);
  movingR = createSprite(600,200,50,100); 
  movingR.shapeColor = "black"; 
  movingR.debug = true; fixedR.debug = true; } 
  function draw() { 
    background("lightblue"); 
    drawSprites(); 
    movingR.y = World.mouseY; 
    movingR.x = World.mouseX; 
    //rectMode(CENTER); 
    //rect (400,200,100,100); 
    if(movingR.x - fixedR.x <= movingR.width/2 + fixedR.width/2 && 
      fixedR.x - movingR.x <= movingR.width/2 + fixedR.width/2 &&
      movingR.y - fixedR.y <= movingR.height/2 + fixedR.height/2 &&
      fixedR.y - movingR.y <= movingR.height/2 + fixedR.height/2){ 
        movingR.shapeColor = "green"; 
        fixedR.shapeColor = "green"; } 
    else{ movingR.shapeColor = "black"; 
        fixedR.shapeColor = "grey"; } }
