// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// Since we just need to loop through each number from 1 to 100, one of the simplest FizzBuzz solution can be achieved with a for loop

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
  else if (i % 3 === 0) console.log("fizz");
  else if (i % 5 === 0) console.log("buzz");
  else console.log(i);
}
