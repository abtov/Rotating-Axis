var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
var width = 400, height = width;
var pointerx = width/2, pointery = width/2;
var dx, dy;
var angle = 0;
canvas.width = width, canvas.height = height;
canvas2.width = width, canvas2.height = height;

var pointAt = [];

function setUp() {
  rotate();
  walls(50, 50, 250, 100)
}
setUp();

function walls(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(y2, y2);
  ctx.lineWidth = 2;
  ctx.fill()

  pointAt.push([(pointAt.length), x1, y1, x2, y2])
  console.log(pointAt);
}
function rotate() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  ctx2.save();
  ctx2.translate(pointerx, pointery)
  ctx2.rotate(angle)

  ctx2.beginPath();
  ctx2.moveTo(0, 0);
  ctx2.lineTo(20, 0);
  ctx2.lineWidth = 2;
  ctx2.stroke()

  ctx2.restore();
}

document.body.addEventListener('mousemove', 
  function(e) {
    dx = e.clientX - pointerx,
    dy = e.clientY - pointery
    angle = Math.atan2(dy, dx)
    requestAnimationFrame(rotate)
  }
);
