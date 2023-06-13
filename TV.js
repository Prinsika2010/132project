Status = "";
TV_image = "";

function preload()
{
    fan_image = loadImage("TV.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(TV_image, 0, 0, 640, 350);
}