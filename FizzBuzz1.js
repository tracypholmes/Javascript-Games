// Write a program that console.log's the numbers from 1 to 100
// Now for numbers that are multiples of three print "Fizz" instead of that number
// For the multiples of five print "Buzz" instead of that number
// For numbers which are multiples of both three and five print "FizzBuzz"

var n = 0

while (n < 100 ) {
  n++;
  if (n % 15 === 0)
    console.log("FizzBuzz");
  else if (n % 3 === 0)
    console.log("Fizz");
  else if (n % 5 === 0)
    console.log("Buzz");
  else  
    console.log (n)
  }
