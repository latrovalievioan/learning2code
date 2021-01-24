const canvas = document.getElementById("balls");
const ctx = canvas.getContext("2d");

class Ball {
  constructor(x, y, radius, sx, sy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sx = sx;
    this.sy = sy;
  }

  drawBall() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  changePos() {
    this.x += this.sx;
    this.y += this.sy;

    // Wall detection
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.sx *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.sy *= -1;
    }
  }
}

const ball = new Ball(600, 200, 70, 4, 5);
const ball2 = new Ball(300, 300, 70, 7, -5);
const ball3 = new Ball(400, 400, 70, 7, 3);
const balls = [ball, ball2, ball3];

const collide = (ball1, ball2) => {
  let distanceX = ball1.x - ball2.x;
  let distanceY = ball1.y - ball2.y;
  let radiSum = ball1.radius + ball2.radius;
  if (distanceX * distanceX + distanceY * distanceY <= radiSum * radiSum) {
    ball1.sx *= -1;
    ball2.sx *= -1;
    ball1.sy *= -1;
    ball2.sy *= -1;
  }
};

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((circle) => {
    circle.changePos();
    circle.drawBall();
  });
  //detect balls
  for (let i = 0; i < balls.length - 1; i++) {
    for (let j = i + 1; j < balls.length; j++) collide(balls[i], balls[j]);
  }

  requestAnimationFrame(update);
};

update();
