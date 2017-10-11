// let characters = {
// 	'yoda': {
// 		name: 'yoda',
// 		health: 200,
// 		attack: 23,
// 		characterPic: "../images/yoda.png"
// 	},

// 	'vader': {
// 		name: 'darth-vader',
// 		health: 180,
// 		attack: 20,
// 		characterPic: "../images/vader.jpg"
// 	},

// 	'sidious':{
// 		name: 'darth-sidious',
// 		health: 165,
// 		attack: 18,
// 		characterPic:"../images/sidious.png"
// 	},

// 	'luke':{
// 		name:'luke-skywalker',
// 		health: 140,
// 		attack: 16,
// 		characterPic:"../images/luke.jpg"
// 	}
// };

//find way to display character images
// for(var i = 0; i < characters.length; i++){
// 	characters.characterPic;
// }

//audio for user win
let audio = new Audio('assets/javascript/Lightsaber.mp3');
//audio for opponent win
let audio2 = new Audio('assets/javascript/Iamyourfather.mp3')
//audio for attack button
let audio3 = new Audio('assets/javascript/laser.mp3')

//when user clicks on image character = player with character attributes

//when user clicks on image of second character, character2 = opponent with character attributes
//opponent picture moves to the defender area


//had trouble making characters show up so i made these for user and opponent
let player = {
	health: 100,
	power: 20
}

let opponent = {
	health: 100,
	power: 20
}


const attack = () => {
	let attackButton = document.getElementById('attack-button');
	audio3.play();
	let restartButton = document.getElementById('restart-button');
	let gameMessage = document.getElementById('game-message');
	
	let playerAttack = determineAttack(player.power);
	console.log(playerAttack);

	opponent.health -= playerAttack;
	printToScreen();


	//would put if statement in loop for length of enemies
	if(isGameOver(opponent.health)){
		endGame("Player Won Fight");
		attackButton.disabled = true;
		audio.play();
		return;
	}


	attackButton.disabled = true;
	gameMessage.innerText = "The opponent hit you back!";

	setTimeout(() =>{
		let opponentAttack = determineAttack(opponent.power);
		player.health -= opponentAttack;
		printToScreen();

	//would put if statement in loop for length of enemies
	//inside this if statement, would put another if statement:
		//if (enemiesLeft === 0)
		//{ attackButton.disabled = true;
			//audio2.play();
			//return;}
			//something like that ^
		if(isGameOver(player.health)){
			endGame("Opponent Won Fight");
			attackButton.disabled = true;
			audio2.play();
			return;
	}
		attackButton.disabled = false;
	}, 250);
}

const endGame = (message) => {
	document.getElementById('game-message').innerText = message;
	document.getElementById('attack-button').hidden = true;
	document.getElementById('restart-button').hidden = false;
}

const determineAttack = (power) => {
	return Math.floor(Math.random() * power);
}


const isGameOver = (health) => {
	return health <= 0;
}

//restart game
const restart = () => {
	let attackButton = document.getElementById('attack-button');
	player.health = 100;
	opponent.health = 100;
	document.getElementById('game-message').innerText = "";
	attackButton.disabled = false;
	attackButton.hidden = false;
	document.getElementById('restart-button').hidden = true;
	printToScreen();
}

const printToScreen = () => {
	document.getElementById('opponent-health').innerText = opponent.health;
	document.getElementById('player-health').innerText = player.health; 
}

printToScreen();