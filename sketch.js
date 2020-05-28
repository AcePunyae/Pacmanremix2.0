var bob,poorhouse,text,poorhouse_img,bob_img,text_img,house,house_img;
var housearray=[];

var gamestate=2

var ph1,ph2,ph3,ph4,ph5,ph6
var poorhouse_group

var text1,text2,text3

var wall1,wall2,wall3,wall4,wall5,top,bottom,right,left
var Richhouse_img

var flag=0

var points=0




function preload(){
  poorhouse_img=loadImage("Poorhouse.png");
  bob_img=loadImage("Bob.png");
  text_img=loadImage("Text.png")
  house_img=loadImage("House.png");
  Richhouse_img=loadImage("RichHouse.png");


}
function setup(){
  createCanvas(800,800)
  



  ph1= new Poorhouse(200,200,poorhouse_img)
  ph2= new Poorhouse(200,400,poorhouse_img)
  ph3= new Poorhouse(200,600,poorhouse_img)

  ph4= new Poorhouse(600,200,poorhouse_img)
  ph5= new Poorhouse(600,400,poorhouse_img)
  ph6= new Poorhouse(600,600,poorhouse_img)

  
  
 

  bob= new Bob(400,400,bob_img);

  text1= new Text(500,300,text_img);
  
  




  
}


function draw(){
background(247,247,247);


if(gamestate===1){
  text1.display("OK");
}




if(gamestate===2){
 ph1.remove();
 ph2.remove();
 ph3.remove();
 ph4.remove();
 ph5.remove();
 ph6.remove();
 
 text1.remove();

 console.log("x="+mouseX)
 console.log("y="+mouseY)

 

 top= new Wall(400,10,800,20);

 bottom= new Wall(400,790,800,20);

 left1= new Wall(10,170,20,350);

 left2=new Wall(10,630,20,350);

 right1= new Wall(790,170,20,350);
 right2= new Wall(790,630,20,350);


if(flag===0){
  bob.setpos(400,400);
  flag=1
}



var i=8
for(var x=50;x<=750;x=x+100){
  //console.log("working")
  for(var y=50;y<=750;y=y+100){
    if(y===x){
      housearray[i]=new RichHouse(x,y,Richhouse_img);
    }
    else{
      housearray[i]=new House(x,y,house_img);
    }
  
  i++
    
  }
  
}
for(i=0;i<housearray.length;i++)  
{
  console.log(housearray[i]);
  if(bob.bob.collide(housearray[i].House)||bob.bob.collide(housearray[i].RichHouse)){

    

  console.log("h");
}
}





bob.move();



  

 


  
 

}

drawSprites();




}