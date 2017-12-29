//Name: Colleen Duong
//Email: cduong@andrew.cmu.edu
//Section: D
//Project-07

function setup() {
    createCanvas(480, 480);
}


function draw() {
    background(244, 174, 163);

    // draw the curve
    push();
    translate(width/2, height/2); //makes it rotate from the center
    drawEpitrochoid();
    pop();
}

//--------------------------------------------------
function drawEpitrochoid() {
    //Epicycloid: http://mathworld.wolfram.com/Epicycloid.html
    var n = 1000; //amount of control points

    var x;
    var y;

    var a = constrain(mouseX, 0, 300) //radius of inner circle
    var b = 20; //radius of outer circle
    var h = constrain(mouseY, 0, 300); //distance from the vertice (x, y)

    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < n; i++) {
        var t = map(i, 0, n, 0, 100);

        x = (a + b) * cos(t) - h * cos(((a + b) / b) * t); //equation for epicycloid
        y = (a + b) * sin(t) - h * sin(((a + b) / b) * t); //equation for epicycloid

        vertex(x, y);
    }

    endShape(CLOSE);


}
