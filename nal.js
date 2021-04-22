let x,y,r;
let cirkler = [];
let cirkel;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/4;
  r = 10;
}

function draw() {
  background(220);
  for(let i = 0; i < cirkler.length; i++) {
    stroke(30);
    strokeWeight(2);
    if(i < cirkler.length-1) {
      
      line(cirkler[i+1].x,cirkler[i+1].y,cirkler[i].x,cirkler[i].y)
    }  else {
      line(cirkler[i].x,cirkler[i].y,cirkler[0].x,cirkler[0].y);
    }  
    stroke(255,0,255);
    strokeWeight(4);
    circle(cirkler[i].x,cirkler[i].y,2*r)
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
  cirkel = createVector(x,y);
  cirkler.push(cirkel);
  print(cirkler.length);
}
