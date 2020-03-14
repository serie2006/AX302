var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

var width = 600
var height = 600

var x = 300
var y = 300
var s = 50

var mx = 0
var my = 0 

var circleX
var circleY
var circleS = 50
var circleCollision = false

var score = 0

var cherryX
var cherryY
var cherryS = 25
var cherryCollision = false

var ghostX
var ghostY
var ghostS = 50;
var ghostCollision = false

var gameover = false
//------------------------------------------------------
function drawPacman() {
	var pacman = new Image()
	pacman.src = "pacman.png"
	ctx.drawImage(pacman,x,y,s,s)
}
function drawCherry() {
	var cherry = new Image()
	cherry.src = "cherry.png"
	ctx.drawImage(cherry,cherryX,cherryY,cherryS,cherryS)
}
function drawGhost() {
	var ghost = new Image()
	ghost.src = "ghost.png"
	ctx.drawImage(ghost,ghostX,ghostY,ghostS,ghostS)
}
function drawCircle() {
	var circle = new Image()
	circle.src = "circle.png"
	ctx.drawImage(circle,circleX,circleY,circleS,circleS)
}
function clear () {
	ctx.clearRect(0,0,width,height)
}
//------------------------------------------------------
function init() {
	//Random Location for Circle
	circleX = Math.floor(Math.random() * (width - circleS))
	circleY = Math.floor(Math.random() * (height - circleS))
	//Random Location for Cherry
	cherryX = Math.floor(Math.random() * (width - cherryS))
	cherryY = Math.floor(Math.random() * (height - cherryS))	
	//Random Location for Ghost
	ghostX = Math.floor(Math.random() * (width - ghostS))
	ghostY = Math.floor(Math.random() * (height - ghostS))

	window.onkeydown = keydownControl

	return setInterval(draw,10)
}

function draw() {
	clear()
	if(gameover != true) {
		drawPacman()
		drawCircle()
		drawCherry()
		drawGhost()

		if(x + mx > width -s || x + mx < 0) {
			mx = -mx
		} else if (y + my > width -s || y + my < 0) {
			my = -my
		}

	x += mx
	y += my

	collisionCheck()
	collisionHandle()
	followPacman()
	}
	else {
		ctx.font = "40px Impact"
		ctx.fillText("GAME OVER",200,300)
	}
}

function collisionHandle() {
	if (circleColllision) {
		circleX = Math.floor(Math,random() * (width - circleS))
		circleY = Math.floor(Math,random() * (height - circleS))
		score += 1
		document.getElementById("score").inneHTML = score
	}
	if (cherryCollision) {
		cherryX = Math.floor(Math,random() * (width - cherryS))
		cherryY = Math.floor(Math,random() * (height - cherryS))
		score += 5
	}
	if (ghostCollision) {
			gameover = true
	}
}











