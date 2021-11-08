class Resortera{
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
      }
      this.resorte1= loadImage("sprites/resortera1.png");
      this.resorte2= loadImage("sprites/resortera2.png");
      this.resorte3 = loadImage("sprites/resortera3.png");
      this.pointB = pointB;
      this.resorte = Constraint.create(options);
      World.add(mundo, this.resorte);
    }
    
    fly(){
     this.resorte.bodyA=null;

    }

attach(body){
  this.resorte.bodyA=body;
}

display(){
  image(this.resorte1,200,20);
  image(this.resorte2,170,20);
   if(this.resorte.bodyA){ 
    var pointA = this.resorte.bodyA.position;
    var pointB = this.pointB;
push();


    //color del resorte
   stroke("#301608");
    
    if(pointA.x<220){
      strokeWeight(7);
    line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
    line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
    image(this.resorte3,pointA.x-30, pointA.y-10, 15,30);
  }
  else{
    strokeWeight(3);
    line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
    line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
    image(this.resorte3,pointA.x+25, pointA.y-10, 15,30);
    
  }
    




    pop();
   }
    
}

}
