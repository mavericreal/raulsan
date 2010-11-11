var MAX_LINES = 25;
var MIN_LINE_LENGTH = 8;
var MAX_LINE_LENGTH = 32;
var lines = [];

var ctx = null,
	canvas = null,
	HEIGHT = 0,
   WIDTH = 0,
   CHARACTER_X = 30,
   CHARACTER_Y = 38;
var white_gradient = "";
var green = '#82D85A';

var interval = null;


function initMatrix(){
	canvas = document.getElementById("theMatrix");
	canvas.clear = true;
	ctx = canvas.getContext("2d");
	canvas.width = $(window).width();
	canvas.height = $(window).height();
    HEIGHT = canvas.height;
    WIDTH = canvas.width;
	white_gradient = ctx.createLinearGradient(0, 0, CHARACTER_X, 0);
	white_gradient.addColorStop(0, '#82D85A');
	white_gradient.addColorStop(0.9, '#82D85A');
	white_gradient.addColorStop(1, '#FFFFFF');
	interval = setInterval('drawMatrix()', 100);
}


function drawMatrix(){
	var i, ii, j, jj,
        line, chr, chrLen, y,
        xScale, yScale, ySpacing;


	if (lines.length < MAX_LINES){
		   lines.push(newLine());
	}

	//ctx.fillStyle = "rgba(0,0,0,0.5)";
	//ctx.fillRect(0, -50, WIDTH, HEIGHT + 50);

	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	for (var i = 0, ii = this.lines.length; i < ii; i++){
		line = lines[i];
		xScale = CHARACTER_X * line.scale;
		yScale = CHARACTER_Y * line.scale;
		ySpacing = 0;
		chrLen = line.characters.length;
		line.yOffset += line.ySpeed;
	
		if (chrLen < Math.floor(line.yOffset / yScale) && chrLen < line.len){
		   line.characters.push(newCharacter());
		}
	
		
		//ctx.save();
		for (j = 0, jj = chrLen; j < jj; j++){
			chr = line.characters[j];
			y = line.yStart + line.yOffset - ySpacing;
			ySpacing += yScale;
			if(chr.image==1){
				ctx.fillStyle    = white_gradient;
			}else{
				ctx.fillStyle    = green;
			}
			ctx.textBaseline = 'top';
			ctx.font         = 'bold' + ' '+ parseInt(line.scale*20)+'px serif';
			//ctx.strokeText(chr, line.xStart, y);
			//ctx.strokeText('Hello world!', 0, 0);
			ctx.fillText  (chr.num, line.xStart, y);
			//ctx.drawImage(this.arrImages[chr.image], chr.x, chr.y, CHARACTER_X, CHARACTER_Y, line.xStart, y, xScale, yScale);
            if (chr.dynamic || j == 0){
				if (chr.dynamicWait++ > 10){
					//line.characters[j] = newCharacter();
					line.characters[j].image = 1;
					line.characters[j].dynamic = true;
					line.characters[j].dynamicWait = 0;
				}
			}
			if (j == line.len - 1 && y > HEIGHT){
				lines[i] = newLine();
			}
		}
		//ctx.restore();
	}
}


function newLine(){
     var line =
     {
        xStart: randomInt(0, WIDTH),
        yStart: randomInt(0, HEIGHT / 8) - 200,
        yOffset: 0,
        scale: randomInt(4, 20) / 10.0,
        len: randomInt(MIN_LINE_LENGTH, MAX_LINE_LENGTH),
        characters: []
     };
     line.ySpeed = 5/line.scale + randomInt(0, 5);
     return line;
}

function newCharacter(){
	var chr = randomInt(0, 1);
    return ({
		image: 0,
		num: chr,
		dynamic: randomInt(0, 10) == 0,
		dynamicWait: 0
    });
}

function randomInt(low, high){
   return Math.floor(Math.random() * (high - low + 1) + low);
}


