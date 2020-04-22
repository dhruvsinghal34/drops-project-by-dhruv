class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        //'friction':0.3,
        //'density':1.0
    }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    Matter .Body.setVelocity(this.body,{x:0,y:5});
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if(pos.y>700){
      pos.y=700-pos.y;
      Matter .Body.setVelocity(this.body,{x:0,y:5});
    }
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
    rectMode(CENTER);
    fill("blue");
    rect(0, 0, this.width, this.height);
        
          
    pop();
  }
};
