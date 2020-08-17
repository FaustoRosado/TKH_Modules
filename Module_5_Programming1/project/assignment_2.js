//codepen - https://codepen.io/faust0/pen/jOqqgjY?editors=1111

//switch statements where user enters variable grade

const grade = parseInt(prompt("Please enter your grade."));

switch (true) {
    case grade > 95 && grade <= 100:
        console.log("A+");
        break;
    case grade > 90 && grade <= 95:
        console.log("A");
        break;
    case grade > 88 && grade <= 90:
        console.log("A-");
        break;
    case grade > 84 && grade <= 88:
        console.log("B+");
        break;
    case grade > 76 && grade <= 84:
        console.log("C+");
        break;
    case grade > 70 && grade <= 76:
        console.log("C");
        break;
    case grade > 67 && grade <= 70:
        console.log("D+");
        break;
    case grade > 64 && grade <= 67:
        console.log("D");
        break;
    case grade <= 64:
        console.log("F");
        break;
}