
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thund, thund1, thund2, thund3, thund4, engine, world,  ran ,umbrella, batman;

var drops = [];
var maxDrops = 100;
var thunderframe = 0;

function preload(){
    thund1 = loadImage("images/1.png");
    thund2 = loadImage("images/2.png");
    thund3 = loadImage("images/3.png");
    thund4 = loadImage("images/4.png");
    back = loadImage("images/street.jpg");

    batman1=loadAnimation("images/walking_1.png" ,"images/walking_2.png" ,"images/walking_3.png" ,"images/walking_4.png" ,"images/walking_5.png ","images/walking_6.png" ,"images/walking_7.png" ,"images/walking_8.png");
}

function setup(){
 createCanvas(1300,250);
     batman = createSprite(25,125);
    umbrella = new Umbrella(200,450);

    if(frameCount %140 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));7
}

function draw(){
    background(back);
    Engine.update(engine);


      ran = Math.round(random(1,4));
      if(frameCount%80===0){
          thunderframe=frameCount;
          thun = createSprite(random(10,370), random(10,30), 10, 10);
          switch(rand){
              case 1: thun.addImage(thund1);
              break;
              case 2: thun.addImage(thund2);
              break; 
              case 3: thun.addImage(thund3);
              break;
              case 4: thun.addImage(thund4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  
      for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
        
    }
      if(thunderframe + 10 ===frameCount && thun){
          thun.destroy();
      }

      umbrella.display();
      thund1.display();
      thund2.display();
      thund3.display();
      thund4.display();  
      batman.display(); 
             
      drawSprites();

        }           
     }
  }
