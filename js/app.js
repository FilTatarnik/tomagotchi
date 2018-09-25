// console.log('words');
/**********************************************
MVP REQUIREMENTS:
start button starts timer that increases to X and once X is hit without any other buttons being pressed. You die
each button pressed adds one to either Hunger(1-10), Sleepiness(1-10), Boredom(1-10)
Age goes up regardless
make setInterval that goes up to 60 seconds
If user timer reaches 60 while, hunger, sleepiness, n boredom aren't 0. then console log "you win!"
**********************************************/
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
/******************************************
Our pet object. Our pet has different constructors 
*******************************************/
class Katagachi{
  constructor(boredom, name, age, sleepiness, hunger ) {
    this.name = name;
    this.age = age;
    this.boredom = boredom;
    this.sleepiness = sleepiness;
    this.hunger = hunger;
/************************************************
Below are the methods associated with the katagachi

*************************************************/
	instantiate = ()=>{

		}	

	isAlive = ()=>{

		}

	feedUp = ()=>{

		}

	lightsOff = ()=> {

		}

	petUp = ()=> {

		}

	sleepUp = ()=> {

		}	
	}
};
/************************************************
Below is the function that is attached to the name button that starts the timer
from 0 to 60s. //to add later-- if timer reaches 60. clear interval and restart everything.. somehow..

*************************************************/
const setTimer = () => {
	const interval = setInterval(()=>{
		time++;
	if(time === 60){
		clearInterval(interval);

	}
	}, 1000)

};
/************************************************
Below is the game object. The game object will have all of the methods that are associated with
the game itsself; example: startGame().....uhh and other methods.... figure this out asap

*************************************************/
// //game object
// const game = {
// 	pet()=> {

// 	}

// 	turnOffLights() =>{

// 	}
// }





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











//game.start()