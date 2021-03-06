song= "";
var Chop_Suey= mp1.mp2.mp3;
var Time = mp3.mp3;
function preload()
{
    song= loadSound("mp1.mp2.mp3");
    song= loadSound("mp3.mp3");
}
function play()
{
    song.play();
}
function stop()
{
    song.stop();
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FAF9D2");
    stroke("#FAFAFA");
if(scoreLeftWrist>0.2)
{
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume = " + volume;
    song.setVolume(volume);

    if(Chop_Suey=False)
    {
      song_varible=play();

    }
}

}
function isPlaying(){
    song_varible.isPlaying();
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristX = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX +" leftWristY = "+ leftWristY);
        console.log("rightWristX =" + rightWristX +" rightWristY = "+ rightWristY);
    }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}