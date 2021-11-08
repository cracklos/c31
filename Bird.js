class Bird extends BaseClass{
    constructor(x,y){
         //super: transfiere todas las propiedades 
        super(x,y,50,50); //ponemos 50,50 por que es el tamaño fijo
        //se carga también la imagen que le corresponde
        this.image=loadImage("sprites/bird.png");
        this.smokeImg=loadImage("sprites/smoke.png");
        this.trajectory=[];
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        super.display();
        if(this.body.velocity.x>10 && this.body.position.x>200){
            var position=[this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }
        
        for(var i=0;i<this.trajectory.length;i++){
            image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
};