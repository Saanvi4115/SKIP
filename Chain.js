class Chain {
    constructor(bodyA, bodyB, offsetX, offsetY) {
      this.offsetX=offsetX;
      this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.bodyB = bodyB
        this.rope = Constraint.create(options);

        World.add(world, this.rope);
    }

    display(){
        line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
    }
}