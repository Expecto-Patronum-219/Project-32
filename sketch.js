const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function preload(){
    time()
}

function draw(){

    if (backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

}

    async function time(){
        var data= await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var datajson = await data.json();
        console.log(datajson)
        var date=datajson.datetime;
        var hour=date.slice(11, 13);
        console.log(hour);
        
        if(hour>=00 && hour<=02){
            bg="sunrise1.png"
        }
        if (hour>=02 && hour<=04){
            bg="sunrise2.png"
        }
        if (hour>=04 && hour<=06){
            bg="sunrise3.png"
        }
        if (hour>=06 && hour<=08){
            bg="sunrise4.png"
        }
        if (hour>=08 && hour<=10){
            bg="sunrise5.png"
        }
        if (hour>=10 && hour<=12){
            bg="sunrise6.png"
        }
        if (hour>=12 && hour<=14){
            bg="sunset7.png"
        }
        if (hour>=14 && hour<=16){
            bg="sunset8.png"
        }
        if (hour>=16 && hour<=18){
            bg="sunset9.png"
        }
        if (hour>=18 && hour<=20){
            bg="sunset10.png"
        }
        if (hour>=20 && hour<=22){
            bg="sunrise11.png"
        }
        if (hour>=22 && hour<=24){
            bg="sunrise12.png"
        }
        backgroundImg=loadImage(bg)
        }

