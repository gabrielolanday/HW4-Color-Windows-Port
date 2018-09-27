function setup() {
	createCanvas(600,500);
	stroke(255);
}

function draw() {
	if (mouseX <= (width/2) && mouseY <= (height/3)){
		fill(0,255,0);
		rect(0,0,width/2,height/3);
	}else{
		fill(0);
		rect(0,0,width/2,height/3);	
	}
	if (mouseX > (width/2) && mouseX <= 500 && mouseY < height){
		fill(0,0,255);
		rect(width/2,0,(width/2)-100,height);
	}else{
		fill(0);
		rect(width/2,0,(width/2)-100,height);
	}
	if (mouseX <= (width/2) && mouseY > (height/3) && mouseY < height){
		fill(255,0,0);
		rect(0,height/3,width/2,(2*height)/3);
	}else{
		fill(0);
		rect(0,height/3,width/2,(2*height)/3);
	}
	if (mouseX > 500 && mouseX <= width){
		fill(100,100,100);
		rect(width-100,0,100,height);
	}else{
		fill(0);
		rect(width-100,0,100,height);
	}
}