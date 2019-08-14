
//-------------- Objects representing things-----------//
// Define a couple of objects that represent menu items at a taco shop

const nachos = {
    name: "nachos",
    isCheesy: true,
    price: 7.99,
    toppings: ["beans", "chili", "guacamole"]
}

const chickenTaco = {
    name: "chicken taco",
    price: 2.99,
    softTaco: true,
    toppings: ["lettuce", "salsa"]
}


// Define a bigger object that represents the taco shop as a whole
// It should have a property called "menu" that holds an array of the coffee drink objects we just made

const tacoTruck = {
    location: "123 Sesame Street",
    openHours: "12-10",
    menu: [nachos, chickenTaco]
}

console.log(tacoTruck)

tacoTruck.location = "445 Sesame Street"

console.log(tacoTruck)

tacoTruck.menu.push({
    name: "cheese taco",
    price: 4.99,
    softTaco: false,
    toppings: ["cheese"]
})

// How can we change the data in an object? Say we want to change the coffee shop's open hours? Or add something to the menu?


// The current values in an object are called the object's "state". The state can change!
console.log(tacoTruck)



// ---------- LIGHTNING EXERCISE ONE ------------------------- //

// 1. Build an object that represent an employee at the taco shop.
// 2. The employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteTaco
// - an array of menu items they know how to make

const jessica = {
    name: "Jessica",
    startDate: "8/14/19",
    jobTitle: "Professional Taco Slinger",
    payRatePerHour: 20,
    favoriteTaco: "enchilada",
    knownRecipes: ["chicken tacos", "enchilada", "nachos"],
    learnNewMenuItem: function(newMenuItem){
        this.knownRecipes.push(newMenuItem)
    },
    makeTaco: function(tacoName){
        let doTheyKnowHowToMakeIt = false

        for(var i = 0; i < this.knownRecipes.length; i++){
            if(tacoName === this.knownRecipes[i]){
                doTheyKnowHowToMakeIt = true
                // console.log(`Here's your ${tacoName}!`)
            }
        }

        if(doTheyKnowHowToMakeIt === true){
            console.log(`Here's your ${tacoName}!`)
        } else {
            console.log("I don't know how to make that")
        }

    }
}

// function makeTaco(tacoName){
//     console.log(`Here's your ${tacoName}!`)
// }

jessica.startDate
jessica.payRatePerHour
jessica.makeTaco("chicken tacos")


jessica.learnNewMenuItem("lkajdflkajsdlkfjasdlkfjl")
jessica.makeTaco("lkajdflkajsdlkfjasdlkfjl")

jessica.learnNewMenuItem("beef taco")
console.log(jessica)



// --------- LIGHTNING EXERCISE --------------------------------//
// Build an object called tacoShopStaff

// One of its properties should be called employees. This property should hold an array. Store the employee objects you created in the previous lightning exercise in this array.

// Your tacoShopStaff object should have a method called hireEmployee. It should take a parameter of a new employee and use the .push() method to add that new employee to the tacoShopStaff's array of employees.

// Your tacoShopStaff object should have another method called fireEveryone. It should reassign the employees array to be an empty array.


// ------------------- BREAK ----------------------------------//

// ----------------- Lightning Exercise One -------------------//
// Create an index.html file
// Use the shift + ! shortcut to generate some boilerplate HTML.
// Create a header element and give it an id of "main-header"
// Create two p elements and give them each a class of "body-text"


// Use document.querySelector a reference to the h1 element using its tag name
// Get the same element by its id

// Give it some different .innerHTML

// Use .classList.add() to add a class



// ------------------- Lightning Exercise Two ------------------//
// Create a JavaScript file and link it to your index.html file.
// Use document.querySelector to get a reference to the element with an id of "main-header"
// Log the reference to the console
// Add a class of "blue-text" to the element


// Use .querySelectorAll to select all the menu items
// Loop through each menu item and log them to the console

//----------------------- Lightning Exercise Three---------------//
// In your JavaScript file, use document.querySelectorAll to select all of the elements in your HTML file with a class of "body-text"
// Log the reference to the console
// Loop through the NodeList of elements and set the .innerHTML property of each element to "Hello, world!"