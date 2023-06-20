difference=0;
rightWristX=0;
leftWristX=0;

function preload() {

}

function setup() {
    video= createCapture(VIDEO);
    video.size(500, 450)

    canvas= createCanvas(500, 350);
    canvas.position(650, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('PoseNet is initialised!')
}
 
function gotPose(result) {
    if(result.length > 0) {
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        console.log("rightWristX = " + rightWristX + " " + "leftWristX = " + leftWristX);

        difference = floor(leftWristX - rightWristX)
    }
}

function draw() {
   background('#FFC3C3');
   fill('#FFFFFF');
   textSize(difference);
   text('Notice Board', 50, 200);
}















