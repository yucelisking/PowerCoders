// Which number is bigger?
// let x = +prompt("enter a number");
// let y = +prompt("enter a number");

// if(x>y){
//     alert = `The graeter number of ${x} and ${y} is ${x}.`
// } else if (x<y) {
//     alert = `The smaller number of ${x} and ${y} is ${x}` 
// } else {
//     alert = `Both numbers are equal.`
// }



// var number1 = 5;
// var number2 = 10;


// if (number1 > number2) {
//     console.log(`The greater number of ${number1 } and ${number2} is ${number1 } .`);
//     console.log(`The smaller number of ${number1 } and ${number2} is ${number2} .`);
// } else if (number2 > number1) {
//     console.log(`The greater number of ${number1 } and ${number2} is ${number2}.`);
//     console.log(`The smaller number of ${number1 } and ${number2} is ${number1 } .`);
// } else {
//     console.log(`Both numbers are equal.`);
// }

// The World translator

// function helloWorld(languagecode){
//     switch (languagecode){
//         case "es":
//             return ("Halo World!");
    
//         case "de":
//             return ("Hallo Welt!");
        
//         case "en":
//             return ("Hello World!");
        
//     }
// }

// window.alert(helloWorld("es")); 

//Retirement Calculator
function retirementCalculator(currentAge, retirementAge) {

    const yearsLeft = retirementAge - currentAge;
  
    const retirementYear = new Date().getFullYear() + yearsLeft;
  
    return {
      yearsLeft,
      retirementYear,
    };
  }
  
  
  const currentAge = prompt("Enter your current age: ");
  const retirementAge = prompt("Enter your desired retirement age: ");
  
  
  const results = retirementCalculator(currentAge, retirementAge);
  
  
  alert(`You have ${results.yearsLeft} years left until retirement. You can retire in the year ${results.retirementYear}.`);




// const retireAge = 60;
// let myDate = prompt("when were you born?")

// function retireDate(myDate){
//     return new Date().getFullYear() - myDate;
// }

