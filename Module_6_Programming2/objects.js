// Codepen - https://codepen.io/faust0/pen/NWNrgBZ

//Create three objects: Car, Team(Sports), Animal

const animal = {
    genus: "Homo",
    species: "Sapien",
    locomtion: "bipedal",
    order: "primate",

    get name() {
        return `${this.genus} ${this.species}`;
    },

    set name(val) {
        [this.genus, this.species] = val.split(" ");
    }
};
alert(animal.name);

//set name is changed with different val 
animal.name = "Panthera tigris";

alert(animal.genus);
alert(animal.species);


const car = {
    color: "red",
    make: "Toyota",
    year: "2010",
    mileage: "high",

    getColor: function() {
        return this.color;
    },
    getMake: function() {
        return this.make;
    },

    setColor: function(newColor) {
        this.color = newColor;
    },
    setMake: function(newMake) {
        this.make = newMake;
    }

};

car.setColor("black");
car.setMake("Honda");

alert(car.getColor());
alert(car.getMake());

const team = {
    name: "NY Mets",
    division: "NL East",
    standings: "last",
    stadium: "Citifield",

    getName: function() {
        return this.name;
    },
    getDivision: function() {
        return this.division;
    },

    setName: function(newName) {
        this.name = newName;
    },
    setDivision: function(newDivision) {
        this.division = newDivision;
    }

};

team.setName("NY Yankees");
team.setDivision("AL East");

alert(team.getName());
alert(team.getDivison());



