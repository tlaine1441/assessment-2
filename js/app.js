console.log("Hello World!");

let leftPixilCounter = 0;

function Player(character) {
	this.character = character;
	this.win = false;
	this.location = 0;
}

Player.prototype.move = function () {
	this.location += 10;
	console.log(this.location);
}

Player.prototype.checkWin = function() {
	if (this.location === 300) {
		this.win = true;
		alert(this.character + " Wins!!!!!");
	}
}

let player1 = new Player("Peter");
let player2 = new Player("brian");

function addListener() {
	document.addEventListener("keydown", function(event) {
		if (event.keyCode === 80) {
			if (!player1.win && !player2.win) {
				console.log("player1 moved")
				player1.move();
			if (player1.location > 250) {
				console.log("now checking");
				player1.checkWin();
			}
		}
		} else if (event.keyCode === 81) {
				if (!player2.win && !player1.win) {
					console.log("player2 moved")
					player2.move();
				if (player2.location > 250) {
					console.log("now checking");
					player2.checkWin();
				}
			}
		}
	});
}

function movePlayer() {
	var player = document.getElementById('player1');
	let newPosition = incrementLeft();
	player.style.left = newPosition
}

function incrementLeft() {
	let str;
	leftPixilCounter += 10;
	str = ('"' + leftPixilCounter + 'px"');
	console.log(str);
	return str;
}


addListener();


