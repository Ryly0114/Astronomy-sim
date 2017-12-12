var time = 0;
var theta = 0;
var a1 = 10.167;
var a2 = 350.82;
var b1 = 9.8329;
var b2 = 5.86;
var speed1 ;
var speed2 ;

function setup () {
    canvas=createCanvas(500,500);
    canvas.parent('sketch-holder');
    centerx = width/2;
    centery = height/2;
}

function draw(){
    background(200);
    fill('yellow');
    ellipse(centerx,centery,50,50);
    time += Math.PI/2048;
    var r1 = Math.sqrt((Math.pow(a1*cos(time),2)+Math.pow(b1*sin(time),2)));
    push();
    fill('green');
    speed1 = 20/(Math.pow(r1,1.5));
    theta += speed1;
    
    translate(centerx,centery); 
    translate(r1*10,0);
    ellipse(0,0,20,20);
    pop();

    var r2 = Math.sqrt((Math.pow((a1*cos(time)),2)+(Math.pow((b1*sin(time)),2))));
    push();
    fill('blue')
    speed2 = 20/(Math.pow(r2,1.5));
    theta += speed2;
    translate(centerx,centery)
    translate(r2,0);
    ellipse(0,0,5,5)
    pop();

}