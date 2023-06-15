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

function draw() {
   background('#FFC3C3');
}

function modelLoaded() {
    console.log('PoseNet is initialised.s')
}
 
function gotPose(result) {
    if(result.length > 0) {
        console.log(result);
    }
}
