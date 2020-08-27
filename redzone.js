class redzone {
    constructor(x,y,width,height){
       var options = {
        isStatic : true
       }
    
    this.body=Bodies.rectangle(250,390,50,50,options);
    this.width = 50;
    this.height = 50;
    this.x= 250;
    this.y= 390;
    World.add(world. this.body);
 }
  display(){

 var pos =this.body.position;
  rectMode(CENTER);
  fill("red");
   rect(pos.x, pos.y, this.width, this.height);
  }

  }
 
