// im not crazy
console.log("Hello World!");

// top counter assigins how much top the blue dog character will start with
let topCounter = 135;

// movePlayer() moves player on GUI
const movePlayer = function(player) {
	console.log("inside movePlayer()");
	console.log(player.id);

	// uses player.id to select which instance of player we want to move
	let playerElement = document.getElementById("player" + player.id);
	// corrects any additional input to finallize character position once game is over
	if(player.location > 1100) {
		player.location = 1100;
	}
	// if top player key is pressed move player right and down.
	// else just move player right
	if (player.id === 1){
		playerElement.style.left = (player.location + "px");
		topCounter += 2;
		playerElement.style.top = (topCounter + "px");
	} else {
		playerElement.style.left = (player.location + "px");
	}
}

// Player constructor
const Player = function(id,character) {
	this.id = id;
	this.character = character;
	this.win = false;
	this.location = 0;
}

// adds the move function to player prototype
Player.prototype.move = function () {
	// Increments player location value randomly between 10-15
	this.location += (Math.floor(Math.random() * (15-10)) + 10);
	console.log(this.location);
	//calls move player which moves player on screen passing this instance
	movePlayer(this);
}

// adds the checkWin function to player prototype
Player.prototype.checkWin = function() {
	// if Players location is 1100 they win
	if (this.location === 1100) {
		this.win = true;
		alert(this.character + " Wins!!!!!");
	}
}

// creates 2 instances of the player object
const player1 = new Player(1, "Blue");
const player2 = new Player(2, "Orange");

// addListener adds event listeners to keys P and Q
const addListener = function() {
	document.addEventListener("keydown", function(event) {
		// key code 80 === p
		if (event.keyCode === 80) {
			if (!player1.win && !player2.win) {
				console.log("player1 moved")
				// if press P move player 1
				player1.move();
				// if player 1 location > 850 start checking if they win
				if (player1.location > 850) {
					console.log("now checking");
					player1.checkWin();
				}
			}
		} else if (event.keyCode === 81) { // key code 81 is === Q
			if (!player2.win && !player1.win) {
				console.log("player2 moved")
				// if press Q move player 2
				player2.move();
				// if player 2 location > 850 start checking if they win
				if (player2.location > 850) {
					console.log("now checking");
					player2.checkWin();
				}
			}
		}
	});
}
// call addListener() to add initial functionality
addListener();
