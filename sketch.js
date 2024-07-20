let thickness = 10,
    c="black",
    mode = 1, 
    circlesize=25,
    pcol,
    usingcp,
    a = 255, 
    bgcolor = "white",
    fixedRandC
    

function setup() {
  canvas = createCanvas(windowWidth+900, windowHeight);
  cpicker = createColorPicker();
  cpicker.position(560, 35)
  cpicker.size(30, 30)
  bgcp = createColorPicker('white');
  bgcp.position(890, 35)
  bgcp.size(30, 30)

  
  alphaInput = createInput("255", "number");
  alphaInput.position(620, 35);
  alphaInput.size(40, 20);
  
  
  alphaInput.input(() => {
    a = int(alphaInput.value());
    a = constrain(a, 0, 255);
    alphaInput.value(a);
  });
  

  thicknessInput = createInput("10", "number");
  thicknessInput.position(800, 35);
  thicknessInput.size(40, 20);
  
  
  thicknessInput.input(() => {
    thickness = int(thicknessInput.value());
    thickness = constrain(thickness, 1, 100);
    thicknessInput.value(thickness);
  });
  
  textFont("Oleo Script")
}



function draw() {

  if (bgcolor != bgcp.value()) {
    bgcolor = bgcp.value();
    background(bgcolor);
  }
  
  fill(255, 255,255)
  stroke(0, 0, 0)
  strokeWeight(0.5)
  rect(0, 0, width, 100)

  
  //rgbvalues
  
  let r = red(c)
  let b = blue(c)
  let g = green(c)
  
  fill(0)
  textSize(11)
  text(r + ", " + g + ", " + b + ", " + a, 500, 75)
  
  fill(0, 0, 0)
  textSize(15)
  textAlign(CENTER)
  c = color(r, g, b, a)
  

  
  //rect for pen colour
  
  fill(c);
  strokeWeight(1);
  rect(485, 32, 30, 30, 10);

  //text labels
  
  strokeWeight(0)
  fill(0, 0, 0)
  textSize(12)
  textAlign(CENTER)
  text("Pen\ncolour:", 500, 13)
  
  text("Colour\npicker(pen):", 575, 13)
  
  text("Opacity:\n(0 to 255)", 643, 13)
  
  text("Thickness:\n(1 to 100)", 825, 13)
  
  text("Colour picker:\n(background)", 910, 13)

  
  
  //modes
  if (mouseY > 100) {
    if(mouseIsPressed && mode == 0){
      fill(c)
      strokeWeight(0)
      ellipse(mouseX, mouseY, thickness)
    }
    else if (mouseIsPressed && mode == 2){
      fill(c)
      noStroke()
      square(mouseX - thickness/2, mouseY - thickness/2, thickness)

    }
    else if(mouseIsPressed && mode == 1){
      strokeWeight(thickness)
      stroke(c)
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
    else if(mouseIsPressed && mode == 3){
      fill(c);
      noStroke();
      triangle(mouseX, mouseY - thickness * sqrt(3)/4, 
         mouseX + thickness/2, mouseY + thickness * sqrt(3)/4, 
         mouseX - thickness/2, mouseY + thickness * sqrt(3)/4);

    }
    else if(mouseIsPressed && mode == 4){
      let radius = thickness * 0.5;
      for (let i = 0; i < thickness * 5; i++) {
      let x = mouseX + random(-radius, radius);
      let y = mouseY + random(-radius, radius);
      let opacity = random(50, 150); 

      fill(c);
      noStroke();
      ellipse(x, y, 2, 2);
      }
    }
  }
  
  
  //COLOURS
  
  //black
  strokeWeight(0)
  fill(0, 0, 0)
  if (dist(mouseX, mouseY, 30, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(0, 0, 0)
      pcol = 0
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*0, 20, circlesize)
  
  //brown
  strokeWeight(0)
  fill(170, 0, 0)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*1, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(170, 0, 0)
      pcol = 1
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*1, 20, circlesize)
  
  //red
  strokeWeight(0)
  fill(255, 0, 0)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*2, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(255, 0, 0)
      pcol = 2
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*2, 20, circlesize)
  
  //orange
  strokeWeight(0)
  fill(255, 147, 0)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*3, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(255, 147, 0)
      pcol = 3
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*3, 20, circlesize)
  
  //yellow
  strokeWeight(0)
  fill(255, 255, 31)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*4, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(255, 255, 31)
      pcol = 4
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*4, 20, circlesize)
  
  //green
  strokeWeight(0)
  fill(0, 255, 62)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*5, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(0, 255, 62)
      pcol = 5
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*5, 20, circlesize)
  
  //cyan
  strokeWeight(0)
  fill(0, 255, 255)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*6, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(0, 255, 255)
      pcol = 6
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*6, 20, circlesize)
  
  //darkblue
  strokeWeight(0)
  fill(0, 4, 253)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*7, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(0, 4, 253)
      pcol = 7
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*7, 20, circlesize)

  //purple
  strokeWeight(0)
  fill(167, 0, 252)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*8, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(167, 0, 252)
      pcol = 8
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*8, 20, circlesize)
  
  //pink
  strokeWeight(0)
  fill(255, 0, 249)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*9, 20) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(255, 0, 249)
      pcol = 9
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*9, 20, circlesize)
  
    //grey
  strokeWeight(0)
  fill(130)
  if (dist(mouseX, mouseY, 30, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(130)
      pcol = 10
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*0, 55, circlesize)
  
  //light magenta
  strokeWeight(0)
  fill(221, 126, 107)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*1, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(221, 126, 107)
      pcol = 11
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*1, 55, circlesize)
  
  //light red
  strokeWeight(0)
  fill(234, 153, 153)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*2, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(234, 153, 153)
      pcol = 12
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*2, 55, circlesize)
  
  //light orange
  strokeWeight(0)
  fill(249, 203, 156)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*3, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(249, 203, 156)
      pcol = 13
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*3, 55, circlesize)
  
  //light yellow
  strokeWeight(0)
  fill(255, 229, 153)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*4, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(255, 229, 153)
      pcol = 14
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*4, 55, circlesize)
  
  //light green
  strokeWeight(0)
  fill(182, 215, 168)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*5, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(182, 215, 168)
      pcol = 15
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*5, 55, circlesize)
  
  //light cyan
  strokeWeight(0)
  fill(159, 197, 232)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*6, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(159, 197, 232)
      pcol = 16
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*6, 55, circlesize)
  
  //light blue
  strokeWeight(0)
  fill(138, 142, 255)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*7, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(138, 142, 255)
      pcol = 17
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*7, 55, circlesize)

  //light purple
  strokeWeight(0)
  fill(194, 168, 255)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*8, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(194, 168, 255)
      pcol = 18
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*8, 55, circlesize)
  
  //light pink
  strokeWeight(0)
  fill(255, 173, 213)
  if (dist(mouseX, mouseY, 30+(circlesize*7/6)*9, 55) < 20){
    strokeWeight(1)
    stroke(color(147, 147, 147))
    if(mouseIsPressed){
      c = color(255, 173, 213)
      pcol = 19
      usingcp = 0
    }
  }
  circle(30+(circlesize*7/6)*9, 55, circlesize)
  

  //Eraser
  strokeWeight(1)
  fill(255, 255, 255)
  stroke(0)
  if (mouseX > 700 && mouseX < 750 && mouseY > 30 && mouseY < 100){
    strokeWeight(2)
    stroke(color(0, 0, 0))
    if(mouseIsPressed){
      c = bgcolor
      pcol = 21
      usingcp = 0
    }
  }
  fill('pink')
  rect(700, 30, 30, 47, 10)
  fill("white")
  rect(700, 50, 30, 50)
  
  //random
  if (pcol == 22) {
    c = color(int(random(255)), int(random(255)), int(random(255)));
    fill(0)
    strokeWeight(0)
    text("Random colour\n(continuous)", 350, 60)
  }
  
  noStroke()

  if(dist(mouseX, mouseY, 350, 30) < 15){
    fill(0)
    strokeWeight(0)
    text("Random colour\n(continuous)", 350, 60)
    strokeWeight(1)
    stroke(0)
    if(mouseIsPressed){
      c = color(int(random(255)), int(random(255)), int(random(255)))
    }
  }
  fill(color(int(random(255)), int(random(255)), int(random(255))))
  circle(350, 30, 30)
  
  //fixedrandom
  strokeWeight(1)
  fill(0)
  if(dist(mouseX, mouseY, 430, 30) < 15){
    fill(0)
    text("Random color\n(fixed)", 430, 60)
    strokeWeight(1)
    stroke(0)

  }
  if (pcol == 23)
    fill(c)
    circle(430, 30, 30)
  
  
  //outline of colour
  strokeWeight(2)
  stroke(0, 0, 0)
  noFill()
  if(pcol/10 < 1){
    circle(30+(circlesize*7/6)*(pcol % 10), 20, circlesize+5)
  }
  else if (pcol/10 < 2){
    circle(30+(circlesize*7/6)*(pcol % 10), 55, circlesize+5)
  }
  else if (pcol == 21){
    strokeWeight(3)
    rect(700, 30, 30, 47, 10)
    fill('white')
    rect(700, 50, 30, 50)
  }
  else if (pcol == 22){
    strokeWeight(2)
    circle(350, 30, 30)
  }
  else if (pcol == 23){
    strokeWeight(2)
    circle(430, 30, 30)
    fill(0)
    strokeWeight(0)
    text("Random color\n(fixed)", 430, 60)
  }

  

  
  
  //save button
  noStroke()
  strokeWeight(2)
  
  if(mouseX > 1400 && mouseX < 1450 && mouseY > 1 && mouseY < 48){
    noStroke()
    fill(0)
    text("Save drawing\n(press S)" , 1425, 65)
    strokeWeight(4)   
  }
  
  fill(0)
  stroke(0)
  line(1425, 10, 1425, 30)
  line(1425, 30, 1417, 23)
  line(1425, 30, 1433, 23)
  line(1415, 38, 1435, 38)
  line(1415, 38, 1413, 33)
  line(1435, 38, 1437, 33)
  noFill()
  rect(1400, 2, 50, 48, 10)
  
  //clear button

  strokeWeight(2)
  if(mouseX > 1500 && mouseX < 1550 && mouseY > 1 && mouseY < 48){
    noStroke()
    fill(0)
    text("Clear canvas\n(press c)" , 1525, 65)
    strokeWeight(4)   
  }
  
  fill(0)
  stroke(1)
  line(1510, 10, 1540, 40)
  line(1510, 40, 1540, 10)
  noFill()
  rect(1500, 2, 50, 48, 10)

  
  //brush types
  
  //circle
  strokeWeight(1)
  textSize(16)
  fill(255)
  stroke(0)
  if(dist(mouseX, mouseY, 1000, 50) < 20){
    fill(0)
    strokeWeight(0)
    text("Circle", 1000, 90)
    strokeWeight(2)
    fill(255)
  }
  circle(1000, 50, 40)
  
  //line
  strokeWeight(1)
  if(mouseX > 1050 && mouseX < 1090 && mouseY > 30 && mouseY < 70){
    fill(0)
    strokeWeight(0)
    text("Line", 1070, 90)
    strokeWeight(2)
    fill(255)
  }
  
  rect(1050, 30, 40)
  line(1055, 35, 1085, 65)
  
  //square
  strokeWeight(1)
  if(mouseX > 1120 && mouseX < 1160 && mouseY > 30 && mouseY < 70){
    fill(0)
    strokeWeight(0)
    text("Square", 1140, 90)
    strokeWeight(2)
    fill(255)
  }
  square(1120, 30, 40)
  
  //triangle
  strokeWeight(1)
  stroke(0)
  if(mouseX > 1190 && mouseX < 1230 && mouseY > 30 && mouseY < 70){
    fill(0)
    strokeWeight(0)
    text("Triangle", 1210, 90)
    strokeWeight(2)
    fill(255)
  }
  
  triangle(1187, 70, 1233, 70, 1210, 30)
  
  //brush
  strokeWeight(1)
  if(mouseX > 1273 && mouseX < 1313 && mouseY > 30 && mouseY < 70){
    fill(0)
    strokeWeight(0)
    text("Brush", 1293, 90)
    strokeWeight(2)
    fill(255)
  }
  
  rect(1273, 30, 40)
  textSize(25)
  text("🖌️", 1293, 57)
  
  textSize(16)
  
  
  strokeWeight(0)
  if (mode == 0){
    strokeWeight(3)
    fill(255)
    circle(1000, 50, 40)
    fill(0)
    strokeWeight(0)
    text("Circle", 1000, 90)
  }
  else if (mode == 1){
    strokeWeight(3)
    fill(255)
    rect(1050, 30, 40)
    line(1055, 35, 1085, 65)
    fill(0)
    strokeWeight(0)
    text("Line", 1070, 90)
  }
  else if (mode == 2){
    strokeWeight(3)
    fill(255)
    rect(1120, 30, 40)
    fill(0)
    strokeWeight(0)
    text("Square", 1140, 90)
  }
    else if (mode == 3){
    strokeWeight(3)
    fill(255)
    triangle(1187, 70, 1233, 70, 1210, 30)
    fill(0)
    strokeWeight(0)
    text("Triangle", 1210, 90)
  }
  else if (mode == 4){
    strokeWeight(3)
    fill(255)
    rect(1273, 30, 40)
    textSize(25)
    text("🖌️", 1293, 57)
    textSize(16)
    fill(0)
    strokeWeight(0)
    text("Brush", 1293, 90)
  }
  
}

function mousePressed(){
  //circle mode
  if(dist(mouseX, mouseY, 1000, 50) < 20){
    mode = 0
  }
  if(mouseX > 1050 && mouseX < 1090 && mouseY > 30 && mouseY < 70){
    mode = 1
  }
  if(mouseX > 1120 && mouseX < 1160 && mouseY > 30 && mouseY < 70){
    mode = 2
  }
  if(mouseX > 1190 && mouseX < 1230 && mouseY > 30 && mouseY < 70){
    mode = 3
  }
  if(mouseX > 1273 && mouseX < 1313 && mouseY > 30 && mouseY < 70){
    mode = 4
  }
  
   //save button clicked
  if(mouseX > 1400 && mouseX < 1450 && mouseY > 1 && mouseY < 48){
    savedImg = canvas.get(0, 100, width, height-100);
    savedImg.save('my-painting', 'jpg');
  }
  
  //clear button
  if(mouseX > 1500 && mouseX < 1550 && mouseY > 1 && mouseY < 48){
    background(bgcolor)
  }
  
  //pen cp
  if(mouseX > 560 && mouseX < 590 && mouseY > 35 && mouseY < 65){
    pcol = 20; 
    usingcp = 1
    c = cpicker.value()
  }
    //random
  if(mouseX > 330 && mouseX < 370 && mouseY > 20 && mouseY < 50){
    pcol = 22
    usingcp = 0
    randc = color(int(random(255)), int(random(255)), int(random(255)))
    c = randc
  }
  if(dist(mouseX, mouseY, 430, 30) < 15){
    fixedRandC = color(int(random(255)), int(random(255)), int(random(255)))
    c = fixedRandC
    pcol = 23
    usingcp = 0
    circle(430, 30, 30)
  }
}

function keyPressed(){
  //save
  if (key== 's'){
    savedImg = canvas.get(0, 100, width, height-100);
    savedImg.save('my-painting', 'jpg');
  }
  
  //clear
  if (key == 'c'){
    background(bgcolor)
  }
  
  //colours using key
  if (key == "1"){
    c = color(0)
    pcol = 0
    usingcp = 0
  }
  else if (key == "2"){
    c = color(170, 0, 0)
    pcol = 1
    usingcp = 0
  }
  else if (key == "3"){
    c = color(255, 0, 0)
    pcol = 2
    usingcp = 0
  }
  else if (key == "4"){
    c = color(255, 147, 0)
    pcol = 3
    usingcp = 0
  }
  else if (key == "5"){
    c = color(255, 255, 31)
    pcol = 4
    usingcp = 0
  }
  else if (key == "6"){
    c = color(0, 255, 62)
    pcol = 5
    usingcp = 0
  }
  else if (key == "7"){
    c = color(0, 255, 255)
    pcol = 6
    usingcp = 0
  }
  else if (key == "8"){
    c = color(0, 4, 253)
    pcol = 7
    usingcp = 0
  }
  else if (key == "9"){
    c = color(167, 0, 252)
    pcol = 8
    usingcp = 0
  }
  else if (key == "0"){
    c = color(255, 0, 249)
    pcol = 9
    usingcp = 0
  }
  else if (key == "!"){
    c = color(130)
    pcol = 10
    usingcp = 0
  }
  else if (key == "@"){
    c = color(221, 126, 107)
    pcol = 11
    usingcp = 0
  }
    else if (key == "#"){
    c = color(234, 153, 153)
    pcol = 12
    usingcp = 0
  }
    else if (key == "$"){
    c = color(249, 203, 156)
    pcol = 13
    usingcp = 0
  }
    else if (key == "%"){
    c = color(255, 229, 153)
    pcol = 14
    usingcp = 0
  }
    else if (key == "^"){
    c = color(182, 215, 168)
    pcol = 15
    usingcp = 0
  }
    else if (key == "&"){
    c = color(159, 197, 232)
    pcol = 16
    usingcp = 0
  }
    else if (key == "*"){
    c = color(138, 142, 255)
    pcol = 17
    usingcp = 0
  }
    else if (key == "("){
    c = color(194, 168, 255)
    pcol = 18
    usingcp = 0
  }
    else if (key == ")"){
    c = color(255, 173, 213)
    pcol = 19
    usingcp = 0
  }
  
  //eraser
  if (key == 'e'){
    c = bgcolor
    pcol = 21
    usingcp = 0
  }
  
  //thickness
  if (key == "+"){
    thickness = min(thickness + 1, 100);
    thicknessInput.value(thickness);
  }
    if (key == "-"){
    thickness = max(thickness - 1, 1);
    thicknessInput.value(thickness);
  }
  
  //random
  if (key == "R"){
    c = color(int(random(255)), int(random(255)), int(random(255)))
    pcol = 22
    usingcp = 0
  }
  
  if (key == "r"){
    pcol = 23
    usingcp = 0
    c = color(int(random(255)), int(random(255)), int(random(255)))
  }
  
  //modes
  if (key == "m"){
    if (mode != 4){
      mode+=1
    }
    else{
      mode = 0
    }
  }
    
  
}
