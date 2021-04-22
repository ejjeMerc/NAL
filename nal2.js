let x,y,r;


function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/4;
  r = 10;
}

function draw() {
  background(220);
ellipse(x,y,r,r);
  line(x,y,x+10,y+100);
}
