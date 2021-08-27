function preload() {}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 150);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized.")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }

}

function draw() {
    image(video, 0, 0, 300, 300);
}

function takeSnapshot() {
    save("myfilterimage");
}