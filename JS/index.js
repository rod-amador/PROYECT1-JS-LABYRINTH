let canvas = document.getElementById('game')
let ctx = null;

//mapa 1
let gameMap = [			// todos los calculos es el num -1  xq empieza la cuenta en 0
	4, 	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 	4, 		//17
//  				22				  28		  32
	4, 	2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 	4, 		//34
	4, 	2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 	4, 		//51
	4, 	0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 	4, 		//68
//		69				 75    77  (3,11)         83
	4, 	1, 0, 2, 0, 2, 2, 1, 0, 1, 0, 2, 2, 2, 2, 1, 	4, 		//85
	4, 	2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 	4, 		//102
//												  117
	4, 	2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 1, 	4, 		 //119
	4, 	2, 0, 0, 0, 0, 0, 2, 4, 2, 0, 0, 0, 2, 0, 2, 	4, 		 //136
//						   (8,8)     147
	4, 	2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 0, 2, 0, 2, 	4, 		 //153
	4, 	0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 	4, 		 //170
//				   175   177   179
	4, 	2, 2, 2, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 	4, 		 //187
//								
	4, 	2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 	4,		//204
	4, 	2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 	4, 		//221
	4, 	2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 	4, 		//238
	4, 	2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 	4, 		//255
	4, 	1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 	4, 		//272
//      256   258        262         266          270
	4, 	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 	4, 		// 289
//						  (14,8)
]; //17   17*17 	 = 289

//mapa2
let gameMap2 = [				   // (10, 1)
	4, 	4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 	4, 		//17
	4, 	4, 4, 4, 4, 0, 0, 0, 4, 0, 1, 0, 4, 4, 4, 4, 	4, 			//34
	4, 	4, 4, 4, 0, 5, 5, 5, 0, 2, 2, 0, 0, 0, 4, 4, 	4, 		//51
	4, 	4, 4, 0, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 4, 	4, 	 		//68
	4, 	4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 	4, 	 		//85
	4, 	4, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 	4, 	 		//102
	4, 	0, 0, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 	4, 	 		 //119
	0, 	2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 0, 	4, 			 //136
	0, 	2, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 	4, 			 //153
	0, 	2, 2, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 	0, 			 //170
	0, 	2, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 	0, 		 	 //187
	0, 	2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 	4, 			//204

	4, 	0, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 	0, 			//221
	4, 	4, 0, 5, 5, 0, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 	0, 	 		//238
	4, 	4, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 0, 5, 5, 5, 	0, 	 		//255
//					    (7,15)
	4, 	4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 	4, 		//272
	4, 	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 	4, 		// 289
]; //17   17*17 	 = 289







let tileEvents = {
	// LOS TILES TRANSPORTAN USANDO UNA FUNCION DEL CHARACTER QUE VEREMOS MAS ADELANTE
	// TILE 					// LUGAR A TRANSPORTAR 
		// zona inicial	// el evento es el # dentro del array
		// 17 eventos iniciales
		// 4 llevan al inicio  (1,1)
		// 5 llevan al centro  (8,8)
		// 1 lleva a la salida	(7/28)
		// 3 llevan a otro transportador   (11,3)
		// 4 lleven a otro transportador   (8,14)
		22 : function(c) { c.placeAt(8,8);  },
		28 : function(c) { c.placeAt(1,1);  },
		32 : function(c) { c.placeAt(8,14); },
//									lleva al inicio para enseñar
		69 : function(c) { c.placeAt(1,1);  },	
		75 : function(c) { c.placeAt(11,3); },
		77 : function(c) { c.placeAt(8,14); },
		83 : function(c) { c.placeAt(8,14); },

		117 : function(c) { c.placeAt(8,14); },
		147 : function(c) { c.placeAt(11,3); },

		175 : function(c) { c.placeAt(1,1);  },
		177 : function(c) { c.placeAt(8,8);  },
		179 : function(c) { c.placeAt(11,3); },

		256 : function(c) { c.placeAt(8,8);  },
		262 : function(c) { c.placeAt(1,1);  },
		266 : function(c) { c.placeAt(11,3); },
		270 : function(c) { c.placeAt(8,8);  },

//	cambia al mapa2
// evento cambia todo el array y te transporta a tile 1
		258 : function(c) { 
			c.placeAt(7,15); 
			gameMap = gameMap2;	// cambia de nivel
			tileEvents = {}		// borra todos los eventos pasados para evitar lios
				//anotar eventos que lleven al sig nivel, eliminar eventos pasados
			
		},		// salida
			
		//crear evento para el segundo nivel 

	
		
	// crear un array que cambie el placeat(x,y) de forma aleatoria
		
	///////////////////////////////////////////////////
	}



//////////////////////////////////////////////////////VARIABLES
// pixeles de cada Width y Height // estan siempre se quedan igual
let tileW = 40, tileH = 40;
// cuanto abarca el array por cuadros // cambiar mapw y h  para cambiar cuantos cuadros hay en array
let mapW = 17, mapH = 17;
// el tiempo en frames, y el tiempo actual
let currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;
// imprime el tiempo en segundos


let counter = 1
	function timeCounter() {counter++}
	setInterval(timeCounter, 1000 )
// de aqui se estan obteniendo los sprites
let tileset = null, tilesetURL = "./img/tileset.png", tilesetLoaded = false;
// tipos de Tiles, hasta ahora son 10
let floorTypes = {
	solid		: 0,
	grass		: 1,	//pasar pero alenta
	path		: 2,	//pasar
	grass		: 3,	//sólido, arbol
	water		: 4,	//sólido, líquido
	ice 		: 5,	//hielo, hasta topar pared
	conveyorL	: 6,	//izq // 4 tiles distintos para dar apariencia de que se mueven
	conveyorR	: 7,	//der
	conveyorD	: 8,	//abajo
	conveyorU	: 9,	//arriba

};
// primero se hicieron los tiles por color, después se les agrego un sprite de la img y sus coordenadas
// cada sprite y tile estan ligados a un número, para modificar EL ARRAY A gusto
let tileTypes = {
	0 : { floor:floorTypes.solid, 		sprite:[	{x:0,  y:0,w:40,h:40}]	},
	1 : { floor:floorTypes.grass,		sprite:[	{x:40, y:0,w:40,h:40}]	},
	2 : { floor:floorTypes.path,		sprite:[	{x:80, y:0,w:40,h:40}]	},
	3 : { floor:floorTypes.solid,		sprite:[	{x:120,y:0,w:40,h:40}]	},
	4 : { floor:floorTypes.water,		sprite:[ //parece moverse  al cambiar el sprite
			{x:160,y:0, w:40,h:40,d:200}, {x:200, y:0,  w:40,h:40,d:200},
			{x:160,y:40,w:40,h:40,d:200}, {x:200, y:40, w:40,h:40,d:200},
			{x:160,y:40,w:40,h:40,d:200}, {x:200, y:0,  w:40,h:40,d:200}
		]},
	5 : { floor:floorTypes.ice,		sprite:[{x:120,y:120,w:40,h:40}]},

	6 : { floor:floorTypes.conveyorL,	
			sprite:[ // 4 sprites distintos que dan apariencia de movimiento
			{x:0,  y:40,w:40,h:40,d:200},  
			{x:40, y:40,w:40,h:40,d:200},
			{x:80, y:40,w:40,h:40,d:200},  
			{x:120,y:40,w:40,h:40,d:200}
		]},
	7 : { floor:floorTypes.conveyorR,	
			sprite:[ // 4 sprites distintos que dan apariencia de movimiento
			{x:120,y:80,w:40,h:40,d:200}, 
			{x:80, y:80,w:40,h:40,d:200},
			{x:40, y:80,w:40,h:40,d:200}, 
			{x:0,  y:80,w:40,h:40,d:200}
		]},
	8 : { floor:floorTypes.conveyorD,	
			sprite:[ // 4 sprites distintos que dan apariencia de movimiento
			{x:160,y:200,w:40,h:40,d:200}, 
			{x:160,y:160,w:40,h:40,d:200},
			{x:160,y:120,w:40,h:40,d:200}, 
			{x:160,y:80, w:40,h:40,d:200}
		]},
	9 : { floor:floorTypes.conveyorU,	
			sprite:[// 4 sprites distintos que dan apariencia de movimiento
			{x:200,y:80, w:40,h:40,d:200}, 
			{x:200,y:120,w:40,h:40,d:200},
			{x:200,y:160,w:40,h:40,d:200}, 
			{x:200,y:200,w:40,h:40,d:200}
		]}
};

// variable que permitirá escoger la dirección general
let directions = {
	up		: 0,
	right	: 1,
	down	: 2,
	left	: 3
};
// todas las teclas se ponen en falso al apretarse y en true al soltarse
let keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};


 
// EL juego tenga scrolling
// modificar el viewport segun el tile donde estes para aparentar scrolling

let viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		:  function (px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		let tile = [ Math.floor(px/tileW), 
					 Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};
///////////////////////////////////////////////////////////
///////////function del jugador, 

var player = new Character();

function Character()
{
	this.tileFrom	= [1,1];
	this.tileTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [30,30];
	this.position	= [45,45];
	////////////////////////////////////////////////////////
// QUE TAN LENTO/RÁPIDO SE MUEVE DE ACUERDO AL TIPO DE TILE
	this.delayMove	= {};
	this.delayMove[floorTypes.path]			= 100;
	this.delayMove[floorTypes.grass]		= 250;
	this.delayMove[floorTypes.ice]			= 300;
	this.delayMove[floorTypes.conveyorU]	= 200;
	this.delayMove[floorTypes.conveyorD]	= 200;
	this.delayMove[floorTypes.conveyorL]	= 200;
	this.delayMove[floorTypes.conveyorR]	= 200;
// IMAGEN DEL SPRITE AL MOVERSE 
	this.direction	= directions.up;
	this.sprites = {};
	this.sprites[directions.up]		= [{x:0,y:120,w:30,h:30}];
	this.sprites[directions.right]	= [{x:0,y:150,w:30,h:30}];
	this.sprites[directions.down]	= [{x:0,y:180,w:30,h:30}];
	this.sprites[directions.left]	= [{x:0,y:210,w:30,h:30}];
}

/// nos dice de que tile esta y a cual va, esto permitiría poder hacer después colisiones

// FUNCION PARA MOVER AL CHARACTER DE ACUERDO A LAS COORDENADAS Y EVENTOS QUE ESTAN AL INICIO
Character.prototype.placeAt = function(x, y)
{
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [	((tileW*x)+( (tileW-this.dimensions[0])	/2	)),
					   	((tileH*y)+( (tileH-this.dimensions[1])	/2	))	];
};

// FUNCION DE MOVIMIENTO DEL CHARACTER 
// procesa el movimiento dentro del array y le agrega la función tiempo (para despues variar velocidad)
Character.prototype.processMovement = function(t)
{
	if(	this.tileFrom[0]==this.tileTo[0] 		&& 		this.tileFrom[1]==this.tileTo[1]) { return false; }

	let moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0],this.tileFrom[1])]].floor];

	if((t-this.timeMoved)>=moveSpeed)
	{
		this.placeAt(this.tileTo[0], this.tileTo[1]);

		// cambio al movimiento a la hora de tocar el tile
		if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])]!='undefined')
		{tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);}

		let tileFloor = tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor;


	//////////////////////////////////////////////////////// TILES DE HIELO
		if(tileFloor==floorTypes.ice)
		{
			if(this.canMoveDirection(this.direction))
			{this.moveDirection(this.direction, t);	}
		}
		// la direccion en que el tile obligara a moverse
		else if(tileFloor==floorTypes.conveyorL && this.canMoveLeft())	{ this.moveLeft(t); }
		else if(tileFloor==floorTypes.conveyorR && this.canMoveRight()) { this.moveRight(t); }
		else if(tileFloor==floorTypes.conveyorU && this.canMoveUp())	{ this.moveUp(t); }
		else if(tileFloor==floorTypes.conveyorD && this.canMoveDown())	{ this.moveDown(t); } }
		else
	{
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

		if		(this.tileTo[0] != this.tileFrom[0])
		{
			let diff = (tileW / moveSpeed) * (t-this.timeMoved);
			this.position[0] += (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
		if	(this.tileTo[1] != this.tileFrom[1])
		{
			let diff = (tileH / moveSpeed) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}

	return true;
}
//// acaba funcion de movimiento 

// determinar si el camino se puede atravesar o no estará permitido de acuerdo al tile
//  	eje x horizontal	eje y vertical								(		x		/  		y)
Character.prototype.canMoveTo = function(x, y)
{
	if(x < 0 	|| x >= mapW 		|| y < 0 	|| y >= mapH	) { return false; }
	if(typeof this.delayMove[tileTypes[gameMap[toIndex(x,y)]].floor]=='undefined') { return false; }
	return true;
};
Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };
Character.prototype.canMoveDirection = function(d) {
	switch(d)
	{
		case directions.up: 	return this.canMoveUp();
		case directions.down:	return this.canMoveDown();
		case directions.left:	return this.canMoveLeft();
		default:				return this.canMoveRight();
	}
};

Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };
Character.prototype.moveDirection = function(d, t) {
	switch(d)
	{
		case directions.up:		return this.moveUp(t);
		case directions.down:	return this.moveDown(t);
		case directions.left:	return this.moveLeft(t);
		default:				return this.moveRight(t);
	}
};

// determina que parte del array se transporta ...
function toIndex(x, y)	{return((y * mapW) + x);}

// permitira el uso de sprites en los tiles ****
function getFrame(sprite, duration, time, animated)
{
	if(!animated) { return sprite[0]; }
	time = time % duration;

	for(x in sprite)
	{
		if(sprite[x].end >=time) { return sprite[x]; }
	}
}
/////////////////////////////
//funcion que pre-cargara todo antes de empezar
window.onload = function()
{
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	/// eventos de teclado
	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }	});


	
	viewport.screen = [document.getElementById('game').width,
		document.getElementById('game').height];


		
	tileset = new Image();
	tileset.onload = function() { tilesetLoaded = true; };
	tileset.src = tilesetURL;

	// hace que los sprites se vean animados, pasan por sus 4 estados / agua y conveyors
	for(x in tileTypes)	
	{
		tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;

		if(tileTypes[x].animated)
		{
			var t = 0;
			
			for(s in tileTypes[x].sprite)
			{
				tileTypes[x].sprite[s]['start'] = t;
				t+= tileTypes[x].sprite[s].d;
				tileTypes[x].sprite[s]['end'] = t;
			}

			tileTypes[x]['spriteDuration'] = t;
		}
	}

};

//// funcion que dibujara el juego
////////////////////////////////////////////////
// aqui esta el error 
function drawGame()
{
	let currentFrameTime = Date.now();
	
	let sec = Math.floor(Date.now()	/1000);
	if(sec	!=	currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

 frameCount = counter

	////////////////////////////////////////////////////
	// dibuje movimiento del jugador de acuerdo a frames

	if(!player.processMovement(currentFrameTime))
	{
		if(		keysDown[38] && player.canMoveUp())		{ player.moveUp		(currentFrameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown	(currentFrameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft	(currentFrameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight	(currentFrameTime); }
	}
//// dibuje la vista conforme el jugador se mueve
	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for(let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			let tile = tileTypes[gameMap[toIndex(x,y)]];
			let sprite = getFrame(tile.sprite, tile.spriteDuration,
				currentFrameTime, tile.animated);
			ctx.drawImage(tileset,
				sprite.x, sprite.y, sprite.w, sprite.h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
				tileW, tileH);
		}
	}

////////////////////////////////////////////// dibuje sprites y tiles
	let sprite = player.sprites[player.direction];
	ctx.drawImage(tileset,
		sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
		viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);

	ctx.fillStyle = "#ff0000";
	ctx.fillText("Time: " + framesLastSecond , 10, 20);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);

}

/// funciones de ganar perder
////////////////////////////////
function gameOver(){
    clearInterval(interval)
    ctx.font = "50px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText('GAME OVER',100,100)
}

function gameWon(){
    clearInterval(interval)
    ctx.font = "50px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText('YOU WON""',100,100)
}

///crear el if... si pasa tanto tiemo pierdes,  si llegas a tal, ganas 