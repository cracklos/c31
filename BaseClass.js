class BaseClass{
    //se regresan todos las propiedades  que se pueden heredar
    constructor(x,y,width,height,angle){ 
         var options = {
             'restitution': 0.8,
             'friction':1,
             'density':1
         }
   //se incluyen los argumentos que van a tomar para las propiedades
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //se sube una imagen base
        this.image = loadImage("sprites/base.png");
        World.add(mundo, this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
};