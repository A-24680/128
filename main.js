song1="";
song2="";

LWX=0;
LWY=0;
RWX=0;
RWY=0;

function preload() {
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw() {
    image(video,0,0,600,500);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        LWX=results[0].pose.leftWrist.x;
        LWY=results[0].pose.leftWrist.y;
        RWX=results[0].pose.rightWrist.x;
        RWY=results[0].pose.rightWrist.y;

    }
}