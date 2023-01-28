const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGHT = canvas.height = 350;

const playerImage = new Image();
playerImage.src = 'sporty_boy.png';

const spriteWidth = 300;
const spriteHeight = 350;
let frameX = 0;
let frameY = 1;

let gameFrame = 0;
const staggerFrame = 9;

function animate(){
	ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	//ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
	ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	if(gameFrame % staggerFrame == 0){
		if(frameX < 6)
		{
			frameX++;
		}
		else{
			frameX=0;
		}
	}
	gameFrame++;
	requestAnimationFrame(animate);
}
animate();