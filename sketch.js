function setup() {
  createCanvas(800,400);
  rec1=createSprite(40,50,30,20)
  rec2=createSprite(80,100,30,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rec1.x=mouseX
  rec1.y=mouseY
}