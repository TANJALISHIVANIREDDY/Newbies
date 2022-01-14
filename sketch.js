let button;
let slider;
let input;
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  button = createButton('click me');
  button.position(0, 0);
  button.size(100,50);
  button.mousePressed(changeBG);
  //slider
  slider = createSlider(0, 1000, 10);
  slider.position(10, 85);
  slider.style('width', '150px');
    slider.style('height', '105px');
  //input text
  input= createInput()
  input.position(166,30);
  //html text p
  let p = createP('this is some text');
p.style('font-size', '16px');
p.position(100, 0);

}
function draw() {
  //slider
  ellipse(width/2,height/2, slider.value(), slider.value())
  //input text
  stroke(24);
  fill(156);
  //p html
  p.html(input.value());
 text(input.value(), 100, 28)
}
function changeBG() {
  let val = random(255);
  background(val);

}