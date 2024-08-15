let cor;
let vertical;
let horizontal;

function setup() {
  createCanvas(1000, 800);
  background("black");
  cor=color(random(0,225), random(0,225),random(0,225));
  vertical=400;
  horizontal=0;
}

function draw() {
  
  circle(horizontal,vertical,50);
  fill(cor);
  
  horizontal+= random(0,3);
  vertical+= random(-3,3);

  if(mouseIsPressed){
cor=color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
}
