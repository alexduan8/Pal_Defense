var state;
var stage = 2;
var pikachuLocation = 1;
var pikachuX = 0;
var pikachuY = 0;
var Width = 800;
var Height = 600;
var score = 0;
var leftHeld, rightHeld, upHeld, downHeld, pHeld;
let rightBackground;
let leftBackground;
let middleBackground;
let deathBackground;
let endBackground;
var pikachu;
let song;
let scream;
let jumpscare;
let dingdong;
let childrenFX;
let begin;
let duration = 247;
let time = 247;
var LightR=300;
var targetX;
var targetY;
var dy;
var dx;
var x=300;
var y=300;
var easing = 1;

function preload(){
	rightBackground = loadImage('right.jpg');
	leftBackground = loadImage('left.png');
	middleBackground = loadImage('mid.jpg');
	deathBackground = loadImage('death.jpg');
	endBackground = loadImage('end.jpg');
	pikachu = loadImage('pikachu.png');
  song = loadSound('BackgroundMusic.mp3');
	scream = loadSound('Scream.mp3');
	jumpscare = loadSound('jumpscare.mp3');
	dingdong = loadSound('bell.mp3');
	childrenFX = loadSound('children.mp3');
}
function setup() {
	createCanvas(Width, Height);
  textFont("Courier New");
  state = 0;
	begin = millis();
}
function draw() {
  var displayText = "Press UP to start.";
	var displayText2 = "Help Pikachu by collecting parts of his missing soul.";
	var displayText3 = "You helped Pikachu escape"
	var displayText4 = "... FOR NOW ..."
	var displayText5 = "YOU FAILED ME"
	if (upHeld == true) {
		state = 1;
	}
  if (state == 0) {
    background(0);
    push();
    fill("#ff0072");
    textSize(40);
    textAlign(CENTER);
    for (var i = 0; i < displayText.length; i++) {
      var floatyHeight = sin(i*0.1+(millis()*0.001)) * 50;
      text(displayText[i], (width/displayText.length-1)*(i+1), (height/2) + floatyHeight);
    }
		pop();
		push();
		fill("#ff0072");
		textSize(20);
    textAlign(CENTER);
		text(displayText2, 400, 200);
		pop();
  }
	if(state == 1) {
		song.play();
    time = duration - (millis() - begin)/1000;

		if(stage == 1) {
			background(leftBackground);
		}
		if(stage == 2) {
			background(middleBackground);
		}
		if(stage == 3) {
			background(rightBackground);
		}

		if (time < 230 && time > 225) {
			pikachuLocation = 1;
			pikachuX = 0;
			pikachuY = 0;
			if (pikachuLocation == 1 && stage == 1){
				image(pikachu,pikachuX,pikachuY,width/(random(5,8)),height/(random(5,8)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

	if (time < 214 && time > 210) {
			pikachuLocation = 3;
			pikachuX = 500;
			pikachuY = 400;
			if (pikachuLocation == 3 && stage == 3){
				image(pikachu,pikachuX,pikachuY,width/(random(3,5)),height/(random(3,5)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 205 && time > 198) {
			childrenFX.play();
			pikachuLocation = 1;
			pikachuX = 600;
			pikachuY = 100;
			if (pikachuLocation == 1 && stage == 1){
				image(pikachu,pikachuX,pikachuY,width/(random(6,9)),height/(random(6,9)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 192 && time > 190) {
			scream.play();
			pikachuLocation = 1;
			pikachuX = 300;
			pikachuY = 400;
			if (pikachuLocation == 1 && stage == 1){
				image(pikachu,pikachuX,pikachuY,width/(random(2,4)),height/(random(2,4)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 184 && time > 179) {
			pikachuLocation = 3;
			pikachuX = 450;
			pikachuY = 220;
			if (pikachuLocation == 3 && stage == 3){
				image(pikachu,pikachuX,pikachuY,width/(random(4,7)),height/(random(4,7)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
			if (score < 15) {
				state = 2;
			}
		}

		if (time < 170 && time > 164) {
			pikachuLocation = 2;
			pikachuX = 337;
			pikachuY = 512;
			if (pikachuLocation == 2 && stage == 2){
				image(pikachu,pikachuX,pikachuY,width/(random(3,6)),height/(random(3,6)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 162 && time > 159) {
			childrenFX.play();
			pikachuLocation = 3;
			pikachuX = 617;
			pikachuY = 398;
			if (pikachuLocation == 3 && stage == 3){
				image(pikachu,pikachuX,pikachuY,width/(random(2,5)),height/(random(2,5)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 155 && time > 150) {
			pikachuLocation = 2;
			pikachuX = 187;
			pikachuY = 589;
			if (pikachuLocation == 2 && stage == 2){
				image(pikachu,pikachuX,pikachuY,width/(random(4,7)),height/(random(4,7)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
			if (score < 30){
				state = 2;
			}
		}


		if (time < 143 && time > 135) {
			scream.play();
			pikachuLocation = 2;
			pikachuX = 368;
			pikachuY = 398;
			if (pikachuLocation == 2 && stage == 2){
				image(pikachu,pikachuX,pikachuY,width/(random(5,8)),height/(random(5,8)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 130 && time > 127) {
			pikachuLocation = 1;
			pikachuX = 237;
			pikachuY = 456;
			if (pikachuLocation == 1 && stage == 1){
				image(pikachu,pikachuX,pikachuY,width/(random(2,5)),height/(random(2,5)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 121 && time > 115) {
			dingdong.play();
			pikachuLocation = 3;
			pikachuX = 743;
			pikachuY = 139;
			if (pikachuLocation == 3 && stage == 3){
				image(pikachu,pikachuX,pikachuY,width/(random(3,6)),height/(random(3,6)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 110 && time > 100) {
			pikachuLocation = 1;
			pikachuX = 438;
			pikachuY = 182;
			if (pikachuLocation == 1 && stage == 1){
				image(pikachu,pikachuX,pikachuY,width/(random(7,9)),height/(random(7,9)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
			if (score < 45){
				state = 2;
			}
		}

		if (time < 97 && time > 91) {
			pikachuLocation = 2;
			pikachuX = 761;
			pikachuY = 564;
			if (pikachuLocation == 2 && stage == 2){
				image(pikachu,pikachuX,pikachuY,width/(random(4,7)),height/(random(4,7)));
				if (dist(x,y,pikachuX,pikachuY)<=100){
					score = score + 1;
					print("Score: " + score);
				}
			}
		}

		if (time < 85) {
			if (score < 50){
				state = 2;
			}
			if (score >= 50){
				state = 3;
			}
		}
	  targetX = mouseX;
  	dx = targetX - x;
 	 	x += dx * easing;
 	  targetY = mouseY;
		dy = targetY - y;
 		y += dy * easing;
  	fill(31, 148, 129);
		ellipse(x, y, 10, 10);
		noFill();
		stroke(0, 0, 0);
		strokeWeight(1000);
		ellipse(x, y, 1000+LightR, 1000+LightR);

		stroke(0, 0, 0,50);
		strokeWeight(10);
		ellipse(x, y, LightR, LightR);

		stroke(0, 0, 0,100);
		strokeWeight(15);
		ellipse(x, y, LightR-10, LightR-10);
		clear();
  }
	if (state == 2) {
		jumpscare.play();
		scream.play();
		background(deathBackground);
		pop();
		push();
		fill("#ff0072");
		textSize(80);
    textAlign(CENTER);
		text(displayText5, 400, 200);
		pop();
	}
	if (state == 3) {
		background(endBackground);
		dingdong.play();
		pop();
		push();
		fill("#ff0072");
		textSize(20);
    textAlign(CENTER);
		text(displayText3, 400, 200);
		pop();
		push();
    fill("#ff0072");
    textSize(40);
    textAlign(CENTER);
    for (var m = 0; m < displayText4.length; m++) {
      var floatyHeight1 = sin(m*0.1+(millis()*0.001)) * 50;
      text(displayText4[m], (width/displayText4.length-1)*(m+1), (height/2) + floatyHeight1);
    }
		pop();
		exit();
	}
}

function mousePressed() {
	if (mouseX <= Width/3 && mouseX >= 0) {
		stage = 1;}
	if (mouseX <= (2*Width/3) && mouseX >= Width/3) {
		stage = 2;}
	if (mouseX <= (Width) && mouseX >= (2*Width/3)) {
		stage = 3;}
}
function keyPressed() {
	print(key + " pressed.");
	if (key === "ArrowUp"){ upHeld = true; }
	if (key === "ArrowDown"){ downHeld = true; }
	if (key === "ArrowLeft"){ leftHeld = true; }
	if (key === "ArrowRight"){ rightHeld = true; }
  if (key == "80"){ pHeld = true; }
}

function keyReleased() {
	print(key + " released.");
	if (key === "ArrowUp"){ upHeld = false; }
	if (key === "ArrowDown"){ downHeld = false; }
	if (key === "ArrowLeft"){ leftHeld = false; }
	if (key === "ArrowRight"){ rightHeld = false; }
	if (key == "80"){ pHeld = fase; }
}
