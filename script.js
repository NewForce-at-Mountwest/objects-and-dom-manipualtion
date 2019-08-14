
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
const jacob = {
    startDate: "8/15/19",
    favoriteTaco: "Beef Taco"
}
const kelli = {
    startDate: "8/15/19",
    favoriteTaco: "Shrimp Taco"
}
const tacoTruckStaff = {
    location: "123 Sesame Street",
    openHours: "12-10",
    menu: [nachos, chickenTaco],
    // employees: [jessica, jacob, kelli]
    employees: [
        {
            startDate: "8/15/19",
            favoriteTaco: "Beef Taco"
        },
        {
            startDate: "8/15/19",
            favoriteTaco: "Shrimp Taco"
        }
    ],
    hireEmployee: function(newEmployee){
       this.employees.push(newEmployee)
    },
    fireEveryone: function(){
        this.employees = []
    }
}

// console.log("before hiring Jennifer", tacoTruckStaff)
// const jennifer = {
//     name: "Jennifer",
//     startDate: "whenever",
//     favoriteTaco: "veggie"
// }
// tacoTruckStaff.hireEmployee(jennifer)

tacoTruckStaff.hireEmployee({
    name: "Jennifer",
    startDate: "whenever",
    favoriteTaco: "veggie"
})
// console.log("after hiring Jennifer", tacoTruckStaff.employees)

tacoTruckStaff.fireEveryone()
console.log(tacoTruckStaff)

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

// document.querySelector("h1")
const heading = document.querySelector("#heading")
console.log(heading)
heading.textContent = "Boogers"
heading.classList.add("red-text")





// Give it some text with .textContent

// Use .classList.add() to add a class

// ------------------- Lightning Exercise Two ------------------//
// Create a JavaScript file and link it to your index.html file.
// Use document.querySelector to get a reference to the element with an id of "main-header"

const mainHeader = document.querySelector("#main-header")
// Log the reference to the console
console.log(mainHeader)

// console.log(document.querySelector("#main-header"))
// Add a class of "blue-text" to the element

// mainHeader.classList.add("blue-text")
// mainHeader.textContent = "I should be blue!"

const htmlString = `<h1 class="red-text">My awesome blog</h1>
<h2 class="blue-text">By Me</h2>`

mainHeader.innerHTML = htmlString



const menuItems = document.querySelectorAll(".menu-item")
console.log("this is menu items", menuItems)

// menuItems.classList.add("blue-background")

for(var i = 0; i < menuItems.length; i++){
    menuItems[i].classList.add("blue-background")
    console.log(menuItems[i])
}












// document.querySelector("#main-header").classList.add
// Use .querySelectorAll to select all the menu items
// Loop through each menu item and log them to the console





//----------------------- Lightning Exercise Three---------------//
// In your JavaScript file, use document.querySelectorAll to select all of the elements in your HTML file with a class of "body-text"
// Log the reference to the console
// Loop through the NodeList of elements and set the .innerHTML property of each element to "Hello, world!"

const bodyTextParagraphs = document.querySelectorAll(".body-text")
console.log("this is body text paras", bodyTextParagraphs)

for(let i = 0; i< bodyTextParagraphs.length; i++){
    console.log(bodyTextParagraphs[i])
    bodyTextParagraphs[i].innerHTML = "Hello, world!"
}