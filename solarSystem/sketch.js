var speed;

function setup() {
    createCanvas(1000, 800);
}

function draw() {
    background(0);
    speed = frameCount;

    push();

        translate(width/2, height/2);
        rotate(radians(speed/3)); //Sun spin
        celestialObj(color(255,150,0), 200); // SUN

        push();

            rotate(radians(speed)); //Earth rotation around axis
            translate(300, 0);
            rotate(radians(speed)); //Earth spin
            celestialObj(color(0,0,255), 80); //EARTH

                push();

                rotate(radians(-speed*2)); //Moon rotation around axis
                translate(100, 0);
                celestialObj(color(255,255,255), 30); //WHITE MOON

                pop();

                push();

                rotate(radians(speed/5)); //Moon rotation around axis
                translate(60, 0);
                celestialObj(color(255,0,0), 25); //RED MOON

                pop();

        pop();

    pop();
}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
