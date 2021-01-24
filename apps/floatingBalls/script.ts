const canvas = document.getElementById("balls");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(300, 300, 40, 0, Math.PI * 2);
ctx.stroke();