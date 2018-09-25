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
Below are global variables
*************************************************/
// let time = 0;
// let hunger = 0;
// let sleepiness = 0;
// let boredom = 0;
/******************************************
Our pet object. Our pet has different constructors.. i'm not too sure what this._____ is or does. read up on it
*******************************************/
class Katagachi{
  	constructor(boredom, name, age, sleepiness, hunger ) {
	    this.name = name;
	    this.age = age;
	    this.boredom = boredom;
	    this.sleepiness = sleepiness;
	    this.hunger = hunger;
	}
/************************************************
Below are the methods associated with the katagachi

*************************************************/


	isAlive() {
		//if boredom, sleepiness, and hunger are > 0 --> isAlive true
		//else if boredom, sleepiness, and hunger are = 0 --->isAlive false
	}

	feedUp() {
		// subtract 1 from hunger
	}

	lightsOff()  {

		//subtract 1 from sleepiness
	}

	petUp() {
		//subtract 1 from boredom
	}

};

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
	 	$('#timer').text('Timer ' + time + 's');
	}, 1000)

};

/************************************************
Below is the function that is attached to the pet button that will increase the Happiness meter by one per click... i guess. also make it so hapiness starts at like.. 20 or something at decreases one every 3000-4000 milliseconds or soemthing
*************************************************/
// const 
/************************************************
Below is the game object. The game object will have all of the methods that are associated with
the game itsself; example: startGame().....uhh and other methods.... figure this out asap

*************************************************/
// //game object
const game = {

// 	pet()=> {

// 	}

// 	turnOffLights() =>{

// 	}
}





/************************************************
Below are Listeners that are attached to the buttons on screen. 
each listener will have funcitons that do different things to the game, like
pet button will call the petUp function that decreases the pets sadness by one per click
lightsOffButton will call the lightsOff function that makes the screen go black for 1000 milliseconds and it will decrease the pet's sleepiness by 1 
feed button will decrease pet's hunger by 1 per click

*************************************************/
$('button').on('click', ()=>{
	console.log("buttons work");
})

$('#namePetBut').on('click', ()=>{
	console.log('name pet button works');
	setTimer();
})

$('#petPetBut').on('click', ()=>{
	console.log('pet button works');
})

$('#lightOffBut').on('click', ()=>{
	console.log('lights off button works');
})

$('#feedBut').on('click', ()=>{
	console.log('feed button works');
})




/************************************************
TODO NEXT: x. add events to pet, lights off and feed buttons so hunger, sleepiness, and boredom will go up by one. also set hunger, sleepiness and boredom to X number and set interval them to go to zero.
			x. finish katagachi methods, feedUp method should subtract one from hunger
			x. lightsOff method should subtract one from sleepiness
			x. petUp should subtract one from boredom
		X.connect above methods to corresponding event listeners, so when you click the buttons, the function runs and subtracts from the proper span.
		X. add more shit to the game object, functions n stuff so you can just type game.start(); at the end of your code and have the whole game run.... i think..
		X. figure out how to put my katagachi onto the screen. instantiate the katagachi onto the screen and have it chill there, when it dies. it goes away.. maybe with jquery animation
		X. connect the input form in the beginning where you input your katagachi's name and click the name your pet button to start the game and instantiate your katagachi to the screen with all its properties that are decrease or increase .. idk i'm so tired. 
		X. add katamari damacy cover art as the background for the body, then instantiate your katagachi onto the screen so it looks like he's chilling in his home world
		X. 
*************************************************/






//game.start()