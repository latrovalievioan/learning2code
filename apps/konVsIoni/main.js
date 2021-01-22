const renderGame = () => {
  const canvas = mkElem("canvas", {
    width: "1200",
    height: "600",
    id: "canvas",
  });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  let prokariot = 0;

  const ioni = {
    x: 200,
    y: 200,
    h: 80,
    w: 80,
    dx: getRandomInt(3, 6),
    dy: getRandomInt(3, 6),
  };
  const kon = {
    w: 60,
    h: 60,
    x: 20,
    y: 200,
    speed: 3,
    dx: 0,
    dy: 0,
  };

  const konImage = document.getElementById("kon");
  const ioniImage = document.getElementById("ioni");
  const newPos = () => {
    kon.x += kon.dx;
    kon.y += kon.dy;
    detectWalls(kon);
  };
  const detectWalls = (player) => {
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

  const drawGame = () => {
    ctx.drawImage(ioniImage, ioni.x, ioni.y, ioni.w, ioni.h);
    ctx.drawImage(konImage, kon.x, kon.y, kon.w, kon.h);
    ctx.font = "30px Cursive";
    ctx.fillText(`Prokariot Counter: ${prokariot}`, 40, 40);
  };

  const collision = (rect1, rect2) => {
    if (
      rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.y + rect1.h > rect2.y
    ) {
      prokariot++;
      ioni.x = getRandomInt(100, 1000);
      ioni.y = getRandomInt(50, 500);
    }
  };

  const update = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    drawGame();
    collision(ioni, kon);

    ioni.x += ioni.dx;
    ioni.y += ioni.dy;
    newPos();

    //detect side walls
    if (ioni.x + ioni.w > canvas.width || ioni.x - ioni.w < 0) {
      ioni.dx *= -1;
    }

    //detect top&bot walls
    if (ioni.y + ioni.h > canvas.height || ioni.y - ioni.h < 0) {
      ioni.dy *= -1;
    }
    requestAnimationFrame(update);
  };

  const moveUp = () => {
    kon.dy = -kon.speed;
  };
  const moveRight = () => {
    kon.dx = kon.speed;
  };
  const moveDown = () => {
    kon.dy = kon.speed;
  };
  const moveLeft = () => {
    kon.dx = -kon.speed;
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
      kon.dx = 0;
      kon.dy = 0;
    }
  };

  update();

  document.addEventListener("keydown", keydown);

  document.addEventListener("keyup", keyup);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("instructions").remove();
    renderGame();
  }
});
