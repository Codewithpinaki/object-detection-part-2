img = "";
status = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting object";
}

function preload()
{
    img = loadImage ('dog_cat.jpg');
}

function draw()
{
    image (img,0,0,640,420);
    fill("#FF0000");
    text("Car",45,75);

    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);


    fill("#FF0000");
    text("Cat",45,75);
    noFill();

    stroke("#FF0000");
    rect(300,90,270,320);

}

function modelLoaded()
{
    console.log("Model loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult ( error, results)
{
    if (error)
    {
        console.log(results)
    }
}