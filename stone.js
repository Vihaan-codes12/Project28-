class Stone {
    constructor(x,y) {
        var options ={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.circle(x,y,options);
    }
    display(){
        var pos = this.body.position;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
    }
}