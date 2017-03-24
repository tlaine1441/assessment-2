console.log("Hello World!");
var topCounter = 135;
function movePlayer(player) {
	console.log("inside movePlayer()");
	console.log(player.id);
	var playerElement = document.getElementById("player" + player.id);
		if(player.location > 1100) {
			player.location = 1100;
		}//down 165px
		if (player.id === 1){
			playerElement.style.left = (player.location + "px");
			topCounter += 2;
			playerElement.style.top = (topCounter + "px");
		} else {
				playerElement.style.left = (player.location + "px");
			}
}

function Player(id,character) {
	this.id = id;
	this.character = character;
	this.win = false;
	this.location = 0;
}

Player.prototype.move = function () {
	this.location += (Math.floor(Math.random() * (15-10)) + 10);
	console.log(this.location);
	movePlayer(this);
}

Player.prototype.checkWin = function() {
	if (this.location === 1100) {
		this.win = true;
		alert(this.character + " Wins!!!!!");
	}
}

let player1 = new Player(1, "Blue");
let player2 = new Player(2, "Orange");

function addListener() {
	document.addEventListener("keydown", function(event) {
		if (event.keyCode === 80) {
			if (!player1.win && !player2.win) {
				console.log("player1 moved")
					player1.move();
			if (player1.location > 850) {
				console.log("now checking");
				player1.checkWin();
			}
		}
		} else if (event.keyCode === 81) {
				if (!player2.win && !player1.win) {
					console.log("player2 moved")
					player2.move();
				if (player2.location > 850) {
					console.log("now checking");
					player2.checkWin();
				}
			}
		}
	});
}




addListener();


