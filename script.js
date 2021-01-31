let v; // velocity 
let ogAngle = 0; // original angle 
let slider; 
let selectedSpeed;

// function handleLoad() {
//   // countOnPage = document.getElementById("totals"); 
//   // textContent = "Number of infected individuals: " + infected_count; 
//   // countOnPage.textContent = textContent; 
//   // let speedSlider = document.getElementById('speedRange')
//   // let speedOutput = document.getElementById('speedValue')

// }

function setup(){
  height = 500 
  width = 500
  // translate(0, height); // move the origin to the bottom left
  // translate(height/2, width/2)
  // scale(1, -1);
  // ellipse(0, 0, 20, 20);
  canvas = createCanvas(width, height);
  canvas.parent('simulator-div')
  frameRate(10)
  rectMode(CENTER)
  ogangle = 0
  // let speedSlider = document.getElementById('speedRange')
  // let speedOutput = document.getElementById('speedValue')

  // speedOutput.innerHTML = speedSlider.value
  // v = speedSlider.value/100
  // speedSlider.oninput = function (){
  //   v = speedSlider.value/100
  //   let output = toString(speedSlider.value) + " %"
  //   speedOutput.innerHTML = output
  //   setup()
  //   draw()

  // }

}
function mouseRelease(){
  
}

function draw() {
  background(167) 
  translate(width/2, height/2)
  scale(1, -1);
  drawLightCone(); 
  let speedSlider = document.getElementById('speedRange')
  let speedOutput = document.getElementById('speedValue')

  speedOutput.innerHTML = speedSlider.value
  v = speedSlider.value/100
  speedSlider.oninput = function (){
    v = speedSlider.value/100
    // console.log('this is called ')
    let output = toString(speedSlider.value) + " %"
    speedOutput.innerHTML = output
    setup()
    draw()
    // LorentzTransform() 

  }
  // make a matrix to transform the data 
  LorentzTransform() 
}

function LorentzTransform() {
  // let v = 0.99 // percent of the speed of light
  // v = 0 
  // let step = frameCount; 
  let finalAngle = Math.atan(v)
  let step = 20; 
  if (frameCount < 20){
    step = frameCount % 20; 
  } else {
    ogAngle = finalAngle
  }

  // let step = 0; 
  // let finalAngle = Math.atan(v)
  // let angleStep = map(step, 0, 20, 0, angle);
  let angleStep = map(step, 0, 20, ogAngle, finalAngle);
  applyMatrix(Math.cosh(angleStep), Math.sinh(angleStep), Math.sinh(angleStep), Math.cosh(angleStep), 0, 0);
  gridDraw() 
  drawAxis()
  // drawBox(); 
  // rect(0, 0, 50, 50);
}
function drawAxis(){
  let labelx = 'x'
  let labely = 'ʇɔ'
  labely = 'ct'
  scale(1, -1);
  textSize(width / 15);
  text(labelx, (width/2-30), -10)
  text(labely, 10, -(height/2-30))
  scale(1, -1);
  stroke('red')
  strokeWeight(4)
  line(0, -height/2, 0, height/2 )
  stroke('blue')
  strokeWeight(4)
  line(-width/2, 0, width/2, 0)

}
function drawBox() {
  rect(30, 20, 55, 55);
}


function drawLightCone() {
  stroke(127, 255, 0)
  strokeWeight(3)
  line(-1000, -1000, 1000, 1000)
  stroke(127, 255, 0)
  strokeWeight(3)
  line(-1000, 1000, 1000, -1000)
  // circle(0, 0, 20);
}

function gridDraw() {
  for (var x = -width-1000; x < width+1000; x += (width)/10){
    for (var y = -height-1000; y < height+1000; y += (height)/10){
      stroke(0);
      strokeWeight(1);
      line( x, 0, x, height+1000);
      line( x, 0, x, -height-1000);
      line(0, y, width+1000, y); 
      line(0, y, -width-1000, y); 
    }
  }
}

// window.addEventListener('load', handleLoad)
