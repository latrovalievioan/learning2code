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

const square = new Square(5, 5, 20, 5, 5);
const square2 = new Square(125, 125, 20, -5, -5);

const figures = [square, square2];

const collideCircles = (circle1, circle2) => {
  const distanceX = circle1.x - circle2.x;
  const distanceY = circle1.y - circle2.y;
  const radiSum = circle1.radius + circle2.radius;
  if (distanceX * distanceX + distanceY * distanceY <= radiSum * radiSum) {
    circle1.sx *= -1;
    circle2.sx *= -1;
    circle1.sy *= -1;
    circle2.sy *= -1;
  }
};

const collideSquares = (square1, square2) => {
  const s1Side = square1.side / 2;
  const s2Side = square2.side / 2;
  console.log(square1, square2);
  if (
    Math.abs(square1.x + s1Side - (square2.x + s2Side)) <= s1Side + s2Side &&
    Math.abs(square1.y + s1Side - (square2.y + s2Side)) <= s1Side + s2Side
  ) {
    square1.sx *= -1;
    square1.sy *= -1;
    square2.sx *= -1;
    square2.sy *= -1;
  }
};
const collideCS = (square, circle) => {
  const squareCenter = square.side / 2;
  if (Math.abs(circle.x - squareCenter)) {
  }
};

let frame = 0;

const update = () => {
  if (frame++ % 1 !== 0) {
    requestAnimationFrame(update);
    return;
  }

  //   detect balls
  for (let i = 0; i < figures.length - 1; i++) {
    for (let j = i + 1; j < figures.length; j++) {
      if (figures[i].figure === "circle" && figures[j].figure === "circle")
        collideCircles(figures[i], figures[j]);
      else if (figures[i].figure === "square" && figures[j].figure === "square")
        collideSquares(figures[i], figures[j]);
      console.log("kurlijyn");
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  figures.forEach((figure) => {
    figure.changePos();
    figure.drawFigure();
  });

  requestAnimationFrame(update);
};
update();
