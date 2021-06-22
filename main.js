Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

Yellow_width = 100;
Yellow_height = 90;
Yellow_x = 10;
Yellow_y = 100;

Orange_width = 100;
Orange_height = 90;
Orange_x = 10;
Orange_y = 10;

background_image = "Screenshot 2021-06-18 100621.png";
Orange_image = "Orange Car.png";


Yellow_image="Yellow Car.png";
Track_array=["Track 1.png", "Track 2.png", "Track 3.png", "Track 4.png"];

random_number=Math.floor(Math.random()*4);
background_image=Track_array[random_number];

function add() {
    background_img1 = new Image();
    background_img1.onload = uploadBackground;
    background_img1.src = background_image;

    Yellow_img1 = new Image();
    Yellow_img1.onload = uploadYellow;
    Yellow_img1.src = Yellow_image;
    Orange_img1 = new Image();
    Orange_img1.onload = uploadOrange;
    Orange_img1.src = Orange_image;
}

function uploadBackground() {
    ctx.drawImage(background_img1, 0, 0, Canvas.width, Canvas.height);
}

function uploadOrange() {
    ctx.drawImage(Orange_img1, Orange_x, Orange_y, Orange_width, Orange_height);
}

function uploadYellow() {
    ctx.drawImage(Yellow_img1, Yellow_x, Yellow_y, Yellow_width, Yellow_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '37') {
        Left();
        console.log("left");
    }
    if (keypressed == '38') {
        Up();
        console.log("up");
    }
    if (keypressed == '39') {
        Right();
        console.log("right");
    }
    if (keypressed == '40') {
        Down();
        console.log("down");
    }

    if (keypressed == '65') {
        Left1();
        console.log("a");
    }
    if (keypressed == '87') {
        Up1();
        console.log("w");
    }
    if (keypressed == '68') {
        Right1();
        console.log("d");
    }
    if (keypressed == '83') {
        Down1();
        console.log("s");
    }
    if(Orange_x>700){
        document.getElementById("status").innerHTML="Orange Car has Won the Race";
    }else if(Yellow_x>700){
        document.getElementById("status").innerHTML="Yellow Car has Won the Race";
    }
}

function Up() {
    if (Orange_y >= 0) {
        Orange_y = Orange_y - 10;
        uploadBackground();
        uploadOrange();
    }
}
function Down() {
    if (Orange_y <= 500) {
        Orange_y = Orange_y + 10;
        uploadBackground();
        uploadOrange();
    }
}
function Right() {
    if (Orange_x <= 700) {
        Orange_x = Orange_x + 10;
        uploadBackground();
        uploadOrange();
    }
}
function Left() {
    if (Orange_x >= 0) {
        Orange_x = Orange_x - 10;
        uploadBackground();
        uploadOrange();
    }
}

function Up1() {
    if (Yellow_y >= 0) {
        Yellow_y = Yellow_y - 10;
        uploadBackground();
        uploadYellow();
    }
}
function Down1() {
    if (Yellow_y <= 500) {
        Yellow_y = Yellow_y + 10;
        uploadBackground();
        uploadYellow();
    }
}
function Right1() {
    if (Yellow_x <= 700) {
        Yellow_x = Yellow_x + 10;
        uploadBackground();
        uploadYellow();
    }
}
function Left1() {
    if (Yellow_x >= 0) {
        Yellow_x = Yellow_x - 10;
        uploadBackground();
        uploadYellow();
    }
}