
//VERY EASY
function min(a, b) {
    return Math.min(a, b);
}

 //   EASY:
var students = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 19
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 20
    },
    {
        firstName: "Jack",
        lastName: "Doe",
        age: 21

    }]
console.log(`Hello, my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old.`);

//MEDIUM
 function month(num) {
    switch (num) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Invalid number";
    }
}

//HARD
let tomMass = 8;
let tomHeight = 9;
let jerryMass = 45;
let jerryHeight = 10;
let tomBMI = tomMass / (tomHeight * tomHeight);
let jerryBMI = jerryMass / (jerryHeight * jerryHeight);
let tomHigherBMI = tomBMI > jerryBMI;
console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBMI}`);