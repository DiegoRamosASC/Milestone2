let xPos = 10;
let yPos = 100;
let xDirection = 1;
let yDirection = 1;
let xSpeed = 1;
let ySpeed = 0;
let state = 1;       //stages of game
let bananaSound;
let winSound;
let lostSounnd;
let lostFace;
let points = 0      //tracks the points that u have

function preload() {
    bananaSound = loadSound("fail.mp3")
    lostSound = loadSound("lost.mp3")
    winSound = loadSound("win.mp3")
    lostFace = loadImage("lostFace.png")
}
function setup() {
    createCanvas(500, 500);
    noStroke();
    background(0);

    rectMode(CENTER);
}
function draw() {
    if (state == 1) {
        fill(255, 0, 0);
        rect(xPos, yPos, 5, 5)
        xPos += xSpeed * xDirection
        yPos += ySpeed * yDirection

        fill(0, 150, 50)
        rect(495, 175, 50,)

        fill(0, 150, 50);
        rect(150, 100, 50, 200);
        rect(275, 300, 50, 400);



        fill(255, 255, 255)
        textSize(25);
        text(points, 450, 50)
        fill(255, 255, 255)
        textSize(25);
        text("Points:", 350, 50)

        if (xPos > 495 && yPos < 200 && yPos > 150) {         //winning cube of stage 1
            state = 2
            xPos = 10
            yPos = 100
            points += 100
        }
        if (xPos > 125 && xPos < 175 && yPos < 200) { //Collision
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 1
        }
        if (xPos > 250 && xPos < 300 && yPos > 100) { //Collision
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 1
        }

        if (xPos > 500 || xPos < 0 || yPos < 0 || yPos > 500) { //border
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 1
        }

    }
    if (state == 2) {                // next stage screen
        background(0);
        fill(random(255), random(255), random(255));
        textSize(85);
        text("CONGRATS!", 0, 250);      //randomly colored win message

        fill(0, 155, 0);
        rect(235, 400, 150, 50)

        fill(255, 255, 255)
        textSize(25);
        text("Next Level", 175, 400)    //Button to go up to stage 2
    }
    if (state == 3) {  // level 2 of the game
        fill(255, 0, 0);
        rect(xPos - 10, yPos - 30, 5, 5)
        xPos += 2 * xSpeed * xDirection
        yPos +=  2 * ySpeed * yDirection         // speed is multiplied for difficulty
        fill(0, 255, 255)
        rect(0, 0, 1000, 100)

        rect(0, 100, 300, 20)
        rect(350, 100, 300, 20)


        rect(0, 200, 800, 20)
        rect(500, 200, 100, 20)

        rect(0, 300, 100, 20)
        rect(500, 300, 800, 20)

        rect(0, 400, 950, 20)

        fill(0, 150, 50)
        rect(50, 495, 50, 20) // Win Box for stage 2

        if (xPos > 510 || xPos < 0 || yPos < 80 || yPos > 530) { // border
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        if (xPos > 0 && xPos < 160 && yPos > 120 && yPos < 140) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        if (xPos < 500 && xPos > 210 && yPos > 120 && yPos < 140) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        if (xPos > 0 && xPos < 400 && yPos > 220 && yPos < 240) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        if (xPos > 30 && xPos < 100 && yPos > 505) { //Win Cube
            state = 4
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            points += 100
        }
        if (xPos > 460 && xPos < 500 && yPos > 220 && yPos < 240) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        if (xPos > 0 && xPos < 60 && yPos > 320 && yPos < 340) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        if (xPos > 110 && xPos < 500 && yPos > 320 && yPos < 340) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        if (xPos > 0 && xPos < 475 && yPos > 420 && yPos < 440) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 3
        }
        fill(255)
        textSize(25);
        text(points, 450, 50)
        fill(255)
        textSize(25);
        text("Points:", 350, 50)
    }

    if (state == 4) {
        background(0);
        fill(random(255), random(255), random(255));
        textSize(85);
        text("CONGRATS!", 0, 250);      //randomly colored win message

        fill(0, 155, 0);
        rect(235, 400, 150, 50)

        fill(255, 255, 255)
        textSize(25);
        text("Next Level", 175, 400)    //Button to go up to stage 3
    }
    if (state == 5) {
        fill(255, 0, 0);
        rect(xPos, yPos, 5, 5)
        xPos += 3 * xSpeed * xDirection
        yPos += 3 * ySpeed * yDirection

        fill(0, 150, 50)
        rect(495, 175, 50,)

        fill(150, 50, 50);
        rect(150, 100, 50, 200);
        rect(275, 300, 50, 400);



        fill(255, 255, 255)
        textSize(25);
        text(points, 450, 50)
        fill(255, 255, 255)
        textSize(25);
        text("Points:", 350, 50)

        if (xPos > 495 && yPos < 200 && yPos > 150) {         //winning cube of stage 3
            state = 6
            xPos = 10
            yPos = 100
            points += 100
        }
        if (xPos > 125 && xPos < 175 && yPos < 200) { //Collision
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 5
        }
        if (xPos > 250 && xPos < 300 && yPos > 100) { //Collision
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 5
        }

        if (xPos > 500 || xPos < 0 || yPos < 0 || yPos > 500) { //border
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 5
        }
    }
    if (state == 6){
        background(0);
        fill(random(255), random(255), random(255));
        textSize(85);
        text("CONGRATS!", 0, 250);      //randomly colored win message

        fill(0, 155, 0);
        rect(235, 400, 150, 50)

        fill(255, 255, 255)
        textSize(25);
        text("Next Level", 175, 400)    //Button to go up to stage 4
    }
    if (state == 7) {  // level 4 of the game
        fill(255, 0, 0);
        rect(xPos - 10, yPos - 30, 5, 5)
        xPos += 4 * xSpeed * xDirection
        yPos +=  4 * ySpeed * yDirection         // speed is multiplied for difficulty
        fill(150,0,100)
        rect(0, 0, 1000, 100)

        rect(0, 100, 300, 20)
        rect(350, 100, 300, 20)


        rect(0, 200, 800, 20)
        rect(500, 200, 100, 20)

        rect(0, 300, 100, 20)
        rect(500, 300, 800, 20)

        rect(0, 400, 950, 20)

        fill(0, 150, 50)
        rect(50, 495, 50, 20) // Win Box for stage 4

        if (xPos > 510 || xPos < 0 || yPos < 80 || yPos > 530) { // border
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        if (xPos > 0 && xPos < 160 && yPos > 120 && yPos < 140) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        if (xPos < 500 && xPos > 210 && yPos > 120 && yPos < 140) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        if (xPos > 0 && xPos < 400 && yPos > 220 && yPos < 240) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        if (xPos > 30 && xPos < 100 && yPos > 505) { //Win Cube
            state = 8
            xPos = 10
            yPos = 100
            points += 100
        }
        if (xPos > 460 && xPos < 500 && yPos > 220 && yPos < 240) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        if (xPos > 0 && xPos < 60 && yPos > 320 && yPos < 340) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        if (xPos > 110 && xPos < 500 && yPos > 320 && yPos < 340) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        if (xPos > 0 && xPos < 475 && yPos > 420 && yPos < 440) { //Collisio
            xPos = 10
            yPos = 100
            xDirection = 1
            ySpeed = 0;
            xSpeed = 1;
            bananaSound.play();
            points -= 10
            background(0);
            state = 7
        }
        fill(255)
        textSize(25);
        text(points, 450, 50)
        fill(255)
        textSize(25);
        text("Points:", 350, 50)
    }

    if (state == 8) {
        background(0);
        fill(random(255), random(255), random(255));
        textSize(85);
        text("CONGRATS!", 0, 250);      //randomly colored win message

        fill(0, 155, 0);
        rect(235, 400, 150, 50)

        fill(255, 255, 255)
        textSize(25);
        text("Next ????", 175, 400)    //Button to go up to Final Decision
    }
    if (state == 9){ 
         background(0,200,0);
    fill(random(255), random(255), random(255));
    textSize(85);
    text("You Win!!!", 50, 250);
    }
    if (state == 10){ 
        lostSound.play();
        background(0);
        image(lostFace, 75,250,300,200)
        fill(255, 255, 255);
        textSize(85);
        text("Try Again", 50, 250);
   }

    if (keyIsDown(LEFT_ARROW)) {
        xDirection = -1
        ySpeed = 0;
        xSpeed = 1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xDirection = 1
        ySpeed = 0;
        xSpeed = 1;
    }
    if (keyIsDown(UP_ARROW)) {
        yDirection = -1
        xSpeed = 0;
        ySpeed = 1;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yDirection = 1
        xSpeed = 0;
        ySpeed = 1;

    }
}
function mouseClicked() {
    if (state == 2) {
        if (mouseX > 160 && mouseX < 310 && mouseY > 350 && mouseY < 450) {
            state = 3
            background(0)
        }
    }
    if (state == 4) {
        if (mouseX > 160 && mouseX < 310 && mouseY > 350 && mouseY < 450) {
            state = 5
            background(0)
        }
    }
    if (state == 6) {
        if (mouseX > 160 && mouseX < 310 && mouseY > 350 && mouseY < 450) {
            state = 7
            background(0)
        }
    }
    if (state == 8) {
        if (mouseX > 160 && mouseX < 310 && mouseY > 350 && mouseY < 450) {
            if (points >= 350){
            state = 9
            background(0)
            winSound.play()
            }
            else {
                state = 10
            }
        }
    }
    if (state ==10){
        if (mouseX > 50 && mouseX < 400 && mouseY > 150 && mouseY < 275) {
            state = 1
            background(0)
            points = 0
        }
    }
}