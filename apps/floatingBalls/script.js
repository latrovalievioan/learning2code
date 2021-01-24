const canvas = document.getElementById("balls");
const ctx = canvas.getContext("2d");

class Ball {
  constructor(x, y, radius, sx, sy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sx = sx;
    this.sy = sy;
    this.figure = "ball";
  }

  drawFigure() {
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

class Square {
  constructor(x, y, side, sx, sy) {
    this.x = x;
    this.y = y;
    this.side = side;
    this.sx = sx;
    this.sy = sy;
    this.figure = "square";
  }
  drawFigure() {
    ctx.strokeRect(this.x, this.y, this.side, this.side);
  }

  changePos() {
    this.x += this.sx;
    this.y += this.sy;

    // Wall detection
    if (this.x + this.side > canvas.width || this.x < 0) {
      this.sx *= -1;
    }
    if (this.y + this.side > canvas.height || this.y < 0) {
      this.sy *= -1;
    }
  }
}

const ball = new Ball(100, 400, 20, 5, 4);
const ball2 = new Ball(600, 400, 20, -6, 3);
const square = new Square(100, 100, 30, 7, 6);
const square2 = new Square(600, 100, 30, -3, 8);
const ball3 = new Ball(100, 250, 20, 6, 1);
const square3 = new Square(600, 250, 30, -1, 4);

const figures = [ball, ball2, ball3, square, square2, square3];

const collide = (figure1, figure2) => {
  const distanceX = figure1.x - figure2.x;
  const distanceY = figure1.y - figure2.y;
  let left;
  let right;
  if (figure1.figure === "square") {
    left = figure1.side / 2;
  } else {
    left = figure1.radius;
  }
  if (figure2.figure === "square") {
    right = figure2.side / 2;
  } else {
    right = figure2.radius;
  }
  const radiSum = left + right;
  if (distanceX * distanceX + distanceY * distanceY <= radiSum * radiSum) {
    figure1.sx *= -1;
    figure2.sx *= -1;
    figure1.sy *= -1;
    figure2.sy *= -1;
  }
};

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  figures.forEach((figure) => {
    figure.changePos();
    figure.drawFigure();
  });

  //   detect balls
  for (let i = 0; i < figures.length - 1; i++) {
    for (let j = i + 1; j < figures.length; j++) {
      collide(figures[i], figures[j]);
    }
  }

  requestAnimationFrame(update);
};

update();
