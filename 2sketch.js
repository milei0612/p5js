function setup() {
  createCanvas(400, 400);
  background(200); 
  noStroke();
}

function draw() {
  fill(0, 50); //fill( ) 함수의 2번째 파라미터는 투명도
  ellipse(mouseX, mouseY, 50, 50);
}