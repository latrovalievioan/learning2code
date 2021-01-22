const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//creating rectangles
//fillRect(x, y, w, h)
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 100, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(500, 20, 50, 50);

// //strokeRect()
// ctx.lineWidth = "5";
// ctx.strokeStyle = "red";
// ctx.strokeRect(20, 170, 100, 100);

// //clearRect()
// ctx.clearRect(25, 25, 30, 30);

// //fillText('text', x, y)
// ctx.font = "30px Cursive";
// ctx.fillStyle = "yellow";
// ctx.fillText("Ucha Canvas Brat", 250, 250);

////////////////////////////////////////////////

//Paths

// Triangles
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// // ctx.lineTo(50, 50);
// ctx.closePath();
// // ctx.stroke();
// ctx.fillStyle = "lightblue";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

//Arc(circles) arc(x, y, radius, startAngle, endAngle, anticlockwise(boolean))

// ctx.beginPath();
// ctx.arc(300, 300, 40, 0, Math.PI * 2);

// ctx.stroke();

//Draw Smiley Facey

// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// //Draw Head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// //Move to mouth
// ctx.moveTo(centerX + 100, centerY);

// // Draw Mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// //Move to left eye
// ctx.moveTo(centerX - 60, centerY - 80);

// //Draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// //Move to right eye
// ctx.moveTo(centerX + 100, centerY - 80);

// //Draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// ctx.stroke();

//Animation 1

// const circle = {
//   x: 200,
//   y: 200,
//   size: 30,
//   dx: 5,
//   dy: 4,
// };

// const drawCircle = (circle) => {
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = "cyan";
//   ctx.fill();
// };

// const update = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(circle);

//   //change position
//   circle.x += circle.dx;
//   circle.y += circle.dy;

//   //detect side walls
//   if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
//     circle.dx *= -1;
//   }

//   //detect top&bot walls
//   if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
//     circle.dy *= -1;
//   }

//   requestAnimationFrame(update);
// };

// update();

const player = {
  w: 60,
  h: 60,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0,
};
const char = document.getElementById("source");

const drawPlayer = (player) => {
  ctx.drawImage(char, player.x, player.y, player.w, player.h);
};

const clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const newPos = () => {
  player.x += player.dx;
  player.y += player.dy;
  detectWalls();
};
const detectWalls = () => {
  if (player.x < 0) {
    player.x = 0;
  } else if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  } else if (player.y < 0) {
    player.y = 0;
  } else if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
};

const update = () => {
  clear();
  drawPlayer(player);
  newPos();
  requestAnimationFrame(update);
};

const moveUp = () => {
  player.dy = -player.speed;
};
const moveRight = () => {
  player.dx = player.speed;
};
const moveDown = () => {
  player.dy = player.speed;
};
const moveLeft = () => {
  player.dx = -player.speed;
};

const keydown = (e) => {
  e.preventDefault();
  if (e.key === "ArrowUp") {
    moveUp();
  } else if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowDown") {
    moveDown();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  }
};
const keyup = (e) => {
  e.preventDefault();
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowLeft"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
};

update();

document.addEventListener("keydown", keydown);

document.addEventListener("keyup", keyup);
