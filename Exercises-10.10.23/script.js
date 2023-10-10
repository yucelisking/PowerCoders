//Exeercise- Age Calculator
// let birthYear = prompt("When were you born?");
// let futureYear = prompt("What is year?");
// let result = (futureYear-birthYear);
// let result2 = (result-1); 


// window.alert("You are " + result2 + "-" + result + ".");

//Exercise--
// let age = 21;
// let result;

// if (age>=20) {
//     result = "User can view content";
//      } 
//      else{
//         result = "User cannot view content";
//      }
//      console.log(result);


// let age = 21;
// let result = age >= 20? "User can view content" : "User cannot view content";
// console.log(result);

//Exercise- Tranlate days of week
// while(true) {
// let translateDays = prompt("What is the day?")
// switch (translateDays.toLowerCase()) {
//     case "monday":
//         alert("Today is Montag")
//         break;
//     case "tuesday":
//         alert("Today is Dienstag")
//         break;
//     case "wednesday":
//         alert("Today is Mittwoch")
//         break;
//     case "thursday":
//         alert("Today is Donnerstag")
//         break;
//     case "friday":
//         alert("Today is Freitag")
//         break;
//     case "saturday":
//         alert("Today is Samstag")
//         break;
//     case "sonday":
//         alert("Today is Sonntag")
//         break;
//         default:
//             alert("Only days!")
// }
// }

//Exercise- Odd / Even reporter
// while(true) {
// let number =prompt("write a number 0-20!");

// if (number>=0 && number<=20){

//     if (number % 2 === 0) {
//         result= alert("Even")
//     } else {
//         result= alert("Odd")
//     }
// }

// else {
//     alert("Warning! Wrong number")
// }
// }

//Exercise-Multiplication tables
while(true){
let number = prompt ("Write a number between 0-10!");
let multiply = (number * 9);

if (number>=0 && number<=10){
    result = prompt("The result is " + multiply + ".");
} else {
        result = alert("Please write number between 0-10!");
    }
}

