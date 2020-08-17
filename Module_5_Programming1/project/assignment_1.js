//https://codepen.io/faust0/pen/LYNNwgo
//user prompts for data

let weekIncome = parseInt(prompt("What is your weekly income?"));
let housing = parseInt(prompt("What is your weekly rent or mortgage expense?"));
let food = parseInt(prompt("What is your weekly food expense?"));
let transport = parseInt(prompt("What is your weekly transportation expense?"));
let other = parseInt(prompt("What is your total of other weekly expenses"));

let yearGoal = parseInt(prompt("How much do you want to save this year?"));

// how much for user to save in a year

let weekGoal = yearGoal / 52;
console.log(`That would be $${weekGoal.toFixed(2)} a week to meet your yearly savings target`)

// calculate total weekly cost & subtract from revenue

let cost = housing + food + transport + other;
let leftover = weekIncome - cost; 

//Run conditional to check if amount after expenses is greater or less than amoiunt they need to save weekly

if (leftover > weekGoal) {
    console.log("You are on track to meet your yearly goal")
} else{
    console.log(`You will need to save $${(weekGoal - leftover).toFixed(2)} a week to meet yearly savings goal.`)
}

