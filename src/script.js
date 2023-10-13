var angle = 0;
var w = 20;
var xRot;
var maxDist;

function setup() {
  createCanvas(400, 400, WEBGL);
  background(100, 200, 200);
  xRot = atan(1/sqrt(2));
  maxDist = dist(0, 0, 200, 200);
}

function draw() {
  background(100, 200, 200);
  ambientLight(240, 10, 240);
  
  ortho(-400, 400, -400, 400, -400, 1000);
  
  rotateX(-xRot);
  rotateY(-PI/4);
  
  
  for (let x = 0; x < width; x += w){
    for(let z = 0; z < height; z += w){
      push();
      let d = dist(x, z, width/2, height/2);
      let offset = map(d, 0, maxDist, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 50, 350));
      translate(x - width/2, 0, z - height/2);
      normalMaterial();
      box(w, h, w);
      pop();
    }
  }
  
  angle += 0.035;
}