nosex=0;
nosey=0;
clown_nose="";
function preload(){
clown_nose=loadImage("https://tse1.mm.bing.net/th?id=OIP.LII_jG2roOxnue0YKvprlgHaEC&pid=Api&P=0&h=180");}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);


}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,nosex-20,nosey+25,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');

}
function gotPoses(results){
    if(results.length>0)
    {
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);

    }
}