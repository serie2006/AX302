var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(140,80,30,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.moveTo(150,25);
ctx.lineTo(225,150);
ctx.lineTo(75,150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "skyblue";
ctx.fill();