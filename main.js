function setup(){
    canvas = createCanvas(500, 450);
    canvas.position(535, 35);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 40, 40, 425, 375);

    fill('#e22b59');
    stroke('#e22b59');
    rect(25, 25, 450, 15);
    rect(25, 405, 450, 15); 
    rect(30, 15, 15, 400); 
    rect(452, 15, 15, 400);  

    fill('#e22b59');
    stroke('#e22b59');
    circle(40, 35, 55);
    circle(40, 410, 55);
    circle(460, 35, 55);
    circle(460, 410, 55);
}
