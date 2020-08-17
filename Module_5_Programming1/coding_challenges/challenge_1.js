//codepen - https://codepen.io/faust0/pen/jOqrNZv

const fullNames = [
    "Westly Snipes",
    "Nicholas Cage",
    "Nasir Jones",
    "Sean Carter",
    "Sean Combs",
    "Michael Jordan",
    "Patrick Ewing"
];

const firstNames = [];
const lastNames = [];




    for (i = 0; i < fullNames.length; i++) {
        let splitName = fullNames[i].split(" ");
        firstNames.push(splitName[0]);
        lastNames.push(splitName[1]);
    }



console.log(fullNames);
console.log(firstNames);
console.log(lastNames);