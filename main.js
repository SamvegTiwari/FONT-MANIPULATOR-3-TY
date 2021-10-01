
LeftwristX=0;
RightwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);
    canvas=createCanvas(550,450);
    canvas.position(730,150);
 
    my_posenet=ml5.poseNet(video, model_loaded);
    my_posenet.on("pose", got_poses);

}
function model_loaded(){
    console.log("Model Loaded"); 
   }

function got_poses(results){
    if(results.length>0){
        console.log(results);   
        LeftwristX=results[0].pose.leftWrist.x;
        RightwristX=results[0].pose.rightWrist.x;
        diffrence= floor(LeftwristX-RightwristX);
} }

function draw() {
    background('#0000FF');
    textSize(diffrence);
    fill('#FFE877');
   text('Samveg', 50, 100);
   }