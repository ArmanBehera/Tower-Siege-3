class Block{

  constructor(x, y, width, height){

    this.body = Bodies.rectangle(x, y, width, height);

    this.width = width;
    this.height = height;

    this.visibility = 255;

    World.add(world, this.body);
  }

  display(level){

   
    // Adding different colors to the block according to the levels they are placed in
   if (level === 1){
      fill("blue");
    }

    else if (level === 2){
      fill("cyan");
    }

    else if (level === 3){
      fill("green");
    }

    else{
      fill("pink");
    }

    if (this.body.speed < 3){
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }

    else{

      World.remove(world, this.body);
      push();

      this.visibility -= 2;
      tint(255, this.visibility);


      pop();
    }
    
  }

  score(){

    if (this.visibility < 0 && this.visibility >- 105){

      score++;
    }
  }
}