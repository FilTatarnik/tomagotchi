// console.log('words');
/**********************************************
MVP REQUIREMENTS:
start button starts timer that increases to X and once X is hit without any other buttons being pressed. You die
each button pressed adds one to either Hunger(1-10), Sleepiness(1-10), Boredom(1-10)
Age goes up regardless
make setInterval that goes up to 60 seconds
If user timer reaches 60 while, hunger, sleepiness, n boredom aren't 0. then console log "you win!"
**********************************************/
/**********************************************
PSEUDOCODE
//create an object for our tomagotchi
//attach properties to the object
//create a game object
//add methods to the game object
//instantiate the tomagotchi with jquery to the body, or whatever you want the game to take place
//display the tomagotchi on the screen
//display tomagotchi's stats; hunger(1-10), sleepiness(1-10), Boredom(1-10)
//have age be a number that incements every... minute or so? maybe every 10 minutes?
//make buttons
//append them to the game screen
//make the buttons clickable
//btn 1 : pet
//have this pet button have something to do with the hapiness level of your pet
//--1 pet button press = .5 happiness or something like that
//btn 2 : turn off lights
//--have 1 turn off lights button press change the background of the game screen to black for 1 second and refill the pets sleepiness by x amount idk
//btn 3 : play w pet
//-- have 1 play w pet button press add 1+ boredom 
//add a name property to your tomagotchi object, but also make it an empty variable so the player can input their own pet name -- input field, hit enter, with a button, add a listener to th ebutton
//every x minutes increase the pet's age x amount, until pet has turned.. idk 100 years old or something then it dies -- setInterval
//..if pets hunger boredom or sleepiness hits 10 at any point, kill the pet
//0-10 years, baby; 10-30 yrs, teenish; 30-90 adult
//animate the tomagotchi somehow.. maybe every time one of the object properties goes up or down it moves one to the left or one to the right
//game
//class --- objects
**********************************************/









/************************************************
Below is the function that is attached to the pet button that will increase the Happiness meter by one per click... i guess. also make it so hapiness starts at like.. 20 or something at decreases one every 3000-4000 milliseconds or soemthing
*************************************************/

/************************************************
Below is the game object. The game object will have all of the methods that are associated with
the game itsself; example: startGame().....uhh and other methods.... figure this out asap

*************************************************/
// //game object <------- no idea what to do w that game object

/************************************************
Below are global variables
*************************************************/
	// let time = 0;
	// let hunger = 0;
	// let sleepiness = 0;
	// let boredom = 0;
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
	isAlive() {

		if(this.boredom < 10 && this.sleepiness < 10 && this.hunger < 10){
			return true;
		}
		else {
		   	return false;
		}
	}

		
		//if boredom, sleepiness, and hunger are > 0 --> isAlive true
		//else if boredom, sleepiness, and hunger are = 0 --->isAlive false
	

	feedUp() {
		// subtract 1 from hunger
		hunger--;
	}

	// lightsOff()  {

	// 	//subtract 1 from sleepiness
	// }

	petDown() {
		// if($('#petPetBut').on('click', ()=> {
		// 	this.petPetBut--;
		// }))
	// 	//subtract 1 from boredom
	}

}


const game = {


	katagachi: null, //initial value

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

		// timer start

		// COMMIT
	},

	printStats() {

	}

}


// const shoes = {
//     price: 50,
//  	increasePrice () {
//  		this.price = 1000;
//  	}
// }   


// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	greet() {
// 		console.log("Hello I am " + this.name)
// 	}
// }

// const filip = new Person('fil');

/************************************************
Below is the function that is attached to the name button that starts the timer
from 0 to 60s. //to add later-- if timer reaches 60. clear interval and restart everything.. somehow..

*************************************************/
const setTimer = () => {
		const interval = setInterval(() => {
		time++;
		if(time === 60){
			clearInterval(interval);

		}
	 	$('#timer').text('Timer ' + time + ' hour');
	}, 1000)

};

const boredTimer = () =>{
		const interval = setInterval(() => {
		boredom++;
		if(boredom === 12){
			clearInterval(interval);

		}
	 	$('#boredom').text('Boredom ' + boredom );
	}, 5000)
};

const sleepTimer = () =>{
		const interval = setInterval(() => {
		sleepiness++;
		if(sleepiness === 12){
			clearInterval(interval);
			// gameOver(); <----make game over function that lets the user know when the game has ended


		}
	 	$('#sleepiness').text('Sleepiness ' + sleepiness );
	}, 8000)
};

const hungerTimer = () =>{
		const interval = setInterval(() => {
		hunger++;
		if(hunger === 12){
			clearInterval(interval);
			// gameOver(); <----make game over function that lets the user know when the game has ended
			

		}
	 	$('#hunger').text('hunger ' + hunger );
	}, 3000)
};
/************************************************
Below is the where i'm going to build the timer object. and stick the timer variable inside of it, and i will handle all the button setInterval timers in there with if statements i think...

*************************************************/
// timer () {

// }

/************************************************
/************************************************
EVENT LISTENERS---
Below are Listeners that are attached to the buttons on screen. 
each listener will have funcitons that do different things to the game, like
pet button will call the petUp function that decreases the pets sadness by one per click
lightsOffButton will call the lightsOff function that makes the screen go black for 1000 milliseconds and it will decrease the pet's sleepiness by 1 
feed button will decrease pet's hunger by 1 per click

*************************************************/
// $('button').on('click', ()=>{
// 	console.log("buttons work");
// })

$('#namePetBut').on('click', () => {

	game.setNameAndStartGame();

	// console.log('name pet button works');
	// setTimer();
	// boredTimer();
	// sleepTimer();
	// hungerTimer();
	
})

$('#petPetBut').on('click', ()=>{
	console.log('pet button works');
	// petDown();

})

$('#lightOffBut').on('click', ()=>{
	console.log('lights off button works');
})

$('#feedBut').on('click', ()=>{
	console.log('feed button works');
})

/********************************************************************
Event listener for removing input field after Create Katagachi is hit // doesn't do anything atm
********************************************************************/
// $('#nameInput').on('click', () => {
// 	if ($('#nameInput').val() == "Katagachi!")
// 		$('#nameInput').val("")
// });
/********************************************************************
When user presses 
********************************************************************/





// ***********************************************//
// TODO NEXT: x. figure out how to make 
// x. add events to pet, lights off and feed buttons so hunger, sleepiness, and boredom will go up by one. also set hunger, sleepiness and boredom to X number and set interval them to go to zero.
// 			x. finish katagachi methods, feedUp method should subtract one from hunger
// 			x. lightsOff method should subtract one from sleepiness
// 			x. petUp should subtract one from boredom
// 		X.connect above methods to corresponding event listeners, so when you click the buttons, the function runs and subtracts from the proper span.
// 		X. add more shit to the game object, functions n stuff so you can just type game.start(); at the end of your code and have the whole game run.... i think..
// 		X. figure out how to put my katagachi onto the screen. instantiate the katagachi onto the screen and have it chill there, when it dies. it goes away.. maybe with jquery animation
// 		// X. connect the input form in the beginning where you input your katagachi's name and click the name your pet button to start the game and instantiate your katagachi to the screen with all its properties that are decrease or increase 
// 		X. max on the timer is 60s. if timer === 60s jquery the name your pet button into a button that refreshes the page. 

//x.
// ************************************************//






// game();