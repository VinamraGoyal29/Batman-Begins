class Umbrella{
    constructor(x, y){
        var options = {
            isStatic : true
        }
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.umbrella)
    }

display(){
    imageMode(CENTER);
    image(this.image, this.umbrella.position.x, this.umbrella.position.y, 500, 500);
  
}

}