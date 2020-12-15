class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution: 0.3,
            friction:0.9,
            density :1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image=loadImage("paper.png")
       this.x=x;
       this.y=y;
       this.r=r

        this.body=Bodies.circle(x,y,r/2,options);
        
        World.add(world,this.body) ;  
    
   }
    display(){
        push();
        var paperpos=this.body.position;
       
        
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
      
        image(this.image,0,0,this.r,this.r);
     pop();
    }
}