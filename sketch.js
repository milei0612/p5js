let img;
function preload()
{
    img=loadImage('assets/Sunflower_sky_backdrop.jpg');
}

function setup()
{
    createCanvas(600,400);
}
function draw()
{
    background(220);
    image(img,0,0);
}