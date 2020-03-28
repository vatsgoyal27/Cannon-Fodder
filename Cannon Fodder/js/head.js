class head {

    constructor(x, y, angle) {
        var options ={
            isStatic: true,
            restitution: 0,
            density: 5
        }
        this.body = Bodies.rectangle(x, y, 20, 35, angle, options);
        this.width = 20
        this.height = 35;
        this.angle = angle;
        World.add(world, this.body);
    }
        display() {
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            rectMode(CENTER);
            fill("grey");
            stroke("black");
            rotate(angle);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
    }