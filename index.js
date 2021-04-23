/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/


/* WRITE YOUR ANSWER HERE */
// strings 
// Boolean
// Number
// Spcial 
// (undefined, null)
/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/


/* WRITE YOUR ANSWER HERE */
// variable = are name tags to store our properties in memomory and use it later in different Ways.
/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR CODE HERE */
let sum = 12 + 20

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* WRITE YOUR CODE HERE */
let x = 12
/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

/* WRITE YOUR CODE HERE */
let name = 'John Deo'
/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

/* WRITE YOUR CODE HERE */
let y = 12
let sabtract = x - y

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* WRITE YOUR CODE HERE */
let name1 = 'john'
let name2 = 'John'
console.log(name1 === name2)
/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */
x = 7
if (x === 1 ){
    console.log('one')
}else if(x===2){
    console.log('two')

}else if(x===3){
    console.log('three')

}else if(x===4){
    console.log('four')

}else if(x===5){
    console.log('five')

}else if(x===6){
    console.log('six')

}else if(x===7){
    console.log('seven')

}else if(x===8){
    console.log('eight')

}else if(x===9){
    console.log('nine')

}else {
    console.log('your number is 10 or more than 10')
}


/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* WRITE YOUR CODE HERE */
let z = 9
console.log(z === 9) ? 'five' : 'its more than 10'
/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/