
/******************************************
Our pet object. Our pet has different constructors.. i'm not too sure what this._____ is or does. read up on it
*******************************************/
class Katagachi {
  	constructor(name) {
	    this.name = name;
	    this.age = 0;
	    this.boredom = 0;		       /* <--no idea what this stuff is*/
	    this.sleepiness = 0;
	    this.hunger = 0;
	}
	/************************************************
	Below are the methods associated with the katagachi
	*************************************************/
	isDead() {

		if(this.boredom === 6 || this.sleepiness === 6 || this.hunger === 6){
			return true;
		}
		else {
		   	return false;
		}
	}

	// gameWin() {


	// 	if(game.time === 60){
	// 		return true;
	// 	} else{
	// 		return false;
	// 	}
	// }

		//if boredom, sleepiness, and hunger are > 0 --> isAlive true
		//else if boredom, sleepiness, and hunger are = 0 --->isAlive false
	feedUp() {
		// subtract 1 from hunger
		this.hunger--;
		$('#hunger').text('Hunger: ' + this.hunger);
	}

	petUp()  {
		this.boredom--;
		$('#boredom').text('Boredom ' + this.boredom);
		//subtract 1 from sleepiness
	}
	sleepDown() {
		this.sleepiness--;
		$('#sleepiness').text('Sleepiness ' + this.sleepiness)
	}
}
/***********************END KATAGACHI CLASS*************/
/*****************GAME OBJECT******************/
const game = {

	time: null,

	katagachi: null, //initial value

	interval: null,

	win() {
		// tell the user they won!
		$("#gamewon").append('you win')

		// stop the timer
		clearInterval(this.interval);

	},

	setNameAndStartGame() { 

		// get the name
		const name = $('#nameInput').val()
		console.log(name, " this is a name");

		// instantiate, pass in name (get from input with jQuery)
		const fil = new Katagachi(name);

		// store it in the game object so it won't go away when function is finished
		this.katagachi = fil;
		
		// remove the input field
		$('#nameInput').hide();

		// remove button
		$('#namePetBut').hide();

		// display just the name where those were
		$('#display-name').append(name)
		// timer start
		// setTimer();
		// COMMIT
	},
/*****************************setNameAndStartGame function end************/
	setTimer() {
		let time = 0;
		this.interval = setInterval(() => {
			time++;

			// every 4 seconds boredom increases
			if(time % 4 === 0){
				this.katagachi.boredom++
			}

			// every 3 seconds sleepiness increases
			if(time % 3 === 0){
				this.katagachi.sleepiness++
			}

			// every 2 seconds hunger increases
			if(time % 2 === 0){
				this.katagachi.hunger++
			}
			
			//WIN!
			if(time === 60){
				game.win();
			}

			$('#timer').text('Timer ' + time + ' hour');

			this.updateStats()

			if(game.katagachi.isDead()) {
				clearInterval(this.interval);
				$("#gamewon").append('you lose')

				$('#kataGif').velocity('transition.shrinkOut', 2000)
				$('#display-name').velocity('transition.shrinkOut', 2000)
			

			}

		}, 500)

	},
	updateStats() {
		$('#boredom').text('Boredom: ' + this.katagachi.boredom)
		$('#sleepiness').text('Sleepiness ' + this.katagachi.sleepiness)
		$('#hunger').text('Hunger: ' + this.katagachi.hunger)

	}
}
/*********************END GAME OBJECT***************************/
/************************************************
Below is the function that is attached to the name button that starts the timer
from 0 to 60s. //to add later-- if timer reaches 60. clear interval and restart everything.. somehow..
/************************************************
Below is the where i'm going to build the timer object. and stick the timer variable inside of it, and i will handle all the button setInterval timers in there with if statements i think...
*************************************************/
/************************************************
EVENT LISTENERS---
Below are Listeners that are attached to the buttons on screen. 
each listener will have funcitons that do different things to the game, like
pet button will call the petUp function that decreases the pets sadness by one per click
lightsOffButton will call the lightsOff function that makes the screen go black for 1000 milliseconds and it will decrease the pet's sleepiness by 1 
feed button will decrease pet's hunger by 1 per click
*************************************************/
$('#namePetBut').on('click', () => {

	game.setNameAndStartGame();
	game.setTimer();

	
})
$('#petPetBut').on('click', ()=>{
	console.log('pet button works');
	game.katagachi.petUp();
	// petDown();

})
$('#lightOffBut').on('click', ()=>{
	console.log('lights off button works');
	game.katagachi.sleepDown();
})
$('#feedBut').on('click', ()=>{
	console.log('feed button works');
	game.katagachi.feedUp();
	// console.log(katagachi)
	// console.log(katagachi.feedUp());
})
