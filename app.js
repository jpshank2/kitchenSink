alert("Open the Developer Console to see how everything works!");

//
// Name Variable
//

var yourName = "Jeremy";
let nameLine = document.getElementById("name");
/*let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    yourName = document.getElementById("yourName");
});*/
nameLine.innerText = `Your name is: ${yourName}.`;

//
// Number of States
//

const numOfStates = 50;
let states = document.getElementById("numOfStates");
states.innerText = `There are ${numOfStates} states in the US.`;

//
// Addition
//

var addition = 5 + 4;
let addLine = document.getElementById("addition");
addLine.innerText = `5 + 4 = ${addition}`;

//
// Hello World Alert
//

let helloAlert = document.getElementById("helloAlert");

let sayHello = () => {
    return alert("Hello World!");
};

helloAlert.addEventListener("click", function() {
    sayHello();
});

//
// Check Ages
//

function checkAge(name, age) {
    if (age < 21) {
        return alert(`Sorry ${name}, you aren't old enough to view this page!`);
    } else {
        return alert(`Continue on, ${name}.`);
    }
};

let charlesButton = document.getElementById("checkCharles");
let abbyButton = document.getElementById("checkAbby");
let jamesButton = document.getElementById("checkJames");
let johnButton = document.getElementById("checkJohn");

charlesButton.addEventListener("click", function () {
    checkAge("Charles", 21);
});

abbyButton.addEventListener("click", function() {
    checkAge("Abby", 27);
});

jamesButton.addEventListener("click", function() {
    checkAge("James", 18);
});

johnButton.addEventListener("click", function() {
    checkAge("John", 17);
});

//
// Favorite Vegetables
//

var favoriteVegetables = ["Carrots", "Celery", "Peppers", "Cucumbers", "Spinach", "Okra"];
for (let i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
};

//
// 5 Objects
//

var one = {name: "John", age: 49};
var two = {name: "Eva", age: 46};
var three = {name: "Jeremy", age: 19};
var four = {name: "Sarah", age: 17};
var five = {name: "Kathleen", age: 5};

var namesArray = [one, two, three, four, five];

for (let i = 0; i < namesArray.length; i++) {
    console.log(`I am ${namesArray[i].name} from the namesArray. I am ${namesArray[i].age} years old.`);
    checkAge(namesArray[i].name, namesArray[i].age);
};

//
// Get Length
//

function getLength(word) {
    if (word.length % 2 === 0) {
        console.log("The world is nice and even!");
    } else {
        console.log("The world is an odd place!");
    };
    return word.length;
};

var world = getLength("Hello World!");