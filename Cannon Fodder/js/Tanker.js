class Tanker {

  constructor(x, y) {
      var options ={
          isStatic: true,
          restitution: 0,
          density: 5
      }
      
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50
      this.height = 50
      this.angle = 20;
      World.add(world, this.body);
  }
      display() {
          var pos = this.body.position;
          push();
          rectMode(CENTER);
          fill("grey");
          stroke("black");
          rect(pos.x, pos.y, this.width, this.height, this.angle);
          pop();
      }
  }