//convertToCelsius()
//Define the function
function converToCelsius(fahrenheit) {
  celsius = (fahrenheit - 32) * 5/9
  return celsius; 
}
// Output the result
console.log(converToCelsius(77));


//The CreateMessage() function
let temperature = function (fahrenheit) {
  if (fahrenheit >= 72) {
    return "Room should feel great, the heater should be cut off and anyone can roam the room with light clothes!"
  } else {
    return "The heater should be turned on because people will feel cold, Customers will complain!"
  }
}
//Output the result and you can change the figures to any number you want     
console.log(temperature(70));

//The rand() function
function rand(limit){
  return Math.round(Math.random()*limit);
}
//Output the results
console.log (rand(25));

//Prompt and functionality 
let weight = prompt('enter a number, we will convert that number from kg to lbs')
console.log ("79: ", weight);