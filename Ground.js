class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(mundo, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(30, 40, 50);
        rect(pos.x, pos.y, this.width, this.height);
    }
}