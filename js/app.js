// console.log('words');

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
let Katagachi = class {
  constructor(boredom, name, age, sleepiness, hunger ) {
    this.name = name;
    this.age = age;
    this.boredom = boredom;
    this.sleepiness = sleepiness;
    this.hunger = hunger;
  }
};



// //game object
// const game = {
// 	pet()=> {

// 	}

// 	turnOffLights() =>{

// 	}
// }





//listeners
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