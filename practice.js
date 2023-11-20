/* 1. Create 4 variables with a string, integer, Boolean, and array data types respectively then output each
variable and its data type. */

let string = "Hello"
console.log("Variable: String, Data Type:" + typeof string);

let integer = 100;
console.log("Variable: Integer, Data Type:" + typeof integer);

let boolean = true;
console.log("Variable: Boolean, Data Type:" + typeof boolean);

let array = [1,2,3,4,5]
console.log("Variable: Array, Data Type:" + typeof array);

/* 2. Create two variables for name and age then check if age is an adult or minor using an if-else
statement. Adult age is 18 years old. Then output “My name is (name variable) and my age is (age
variable) years old.” Then check if age is an adult */

let a = "James"
let b = "20"

if(b >= 18){
    console.log("My name is" + " " + a + " " + "and my age is" + " " + b + "." + " " + "You are indeed, a true adult.");
}
else{
    console.log(a + " " + "is not an adult because his age is" + " " + b + "," + " " + "not a true adult.");
}

/* 3. Create a variable with a string data type but has a value of an integer. Convert it to an integer, add 10
then output it.*/

let c = "100"
let converter = parseInt(c);
let result = converter + 10;
console.log(result)

/* 4. Create an integer variable then create an if-else statement whether it is odd or even then output it if
it is an odd or even along with the number */

let d = "100"
if(d % 2 === 0){
console.log("The number" + " " + d + " " + "is even.")
}
else{
    console.log("The number" + " " + d + " " + "is odd.")
}

/* 5. Create a variable for a grade from 0 to 100 then create an if-else statement whether it is passed or
not then output it if it is passed or failed. The passing grade is 75.*/


let e = "85"
if(e >= 75){
console.log("The grade of" + " " + e + " " + "is passing.")
}
else{
    console.log("The grade of" + " " + e + " " + "is failing.")
}


/* 6. Create a for-loop that starts with 2 then ends in 12 then output each number.*/
for(let i = 0; i <= 12; i++){
    console.log(i)
}

/* 7. Create a number from 1 to 10 only, then create its multiplication table from 1 to 10 using for-loop.
Output should be “(Number variable) x (1 to 10) = (product)”. */

let number = 10

for(let i = 0; i <= 10; i++){
    let product = number * i;
    console.log("Number:" + " " + number + " " + "x"  + " " + i + " " + "=" + " " + product);

}

/* 8. Create an array composing of mixed data types: string, integer, Boolean, array. Then output each
element’s data type using for-loop. */

let g = ["hello", 100, true, [1,2,3]]

for(let i = 0; i < g.length; i++){
    console.log(typeof(g[i]));
}

/* 9. Create a 2D array composing of integers elements only inside the arrays, then output each integer
using for-loop */

let f = [[1,2,3,4,5]]

for(let i = 0; i < f.length; i++){
    for(let j = 0; j < f[i].length; j++){
        console.log(f[i][j]);
    }
}

/*10. Create an array composing of 5 integers. Add 2 to each integer then output every single sum using
for-loop */

let m = [1,2,3,4,5]

for(let i = 0; i < m.length; i++){
    let productz = m[i] + 2
    console.log(productz);
}

/* 11. Create an array composing of two elements and its value are “Hello” and “World” respectively. Then
output each letter. */

let h = ["Hello", "World"]

for(let i = 0; i < h.length; i++){
    for(let j = 0; j < h[i].length; j++ ){
        console.log(h[i][j]);
    }
    
}

/* 12. Create an array composing of two elements and its value are “Hello” and “World” respectively. Then
change its value to “Happy” and “Birthday” respectively. Lastly, output the array. */

let u = ["Hello", "World"]

u[0] = "Happy"
u[1] = "Birthday"


console.log(u);


/* 13. Create an array composing of two elements and its value are “Hello” and “World” respectively. Also,
create 3 variables which has its own data of “it”, “is”, and “me” then add it to the array. Lastly, output
the array. */

let t = ["Hello", "World"]

var var1 = "it"
var var2 = "is"
var var3 = "me"

t.push(var1, var2, var3);

console.log(t);

/* 14. Create two variables with both integer data types. Add, subtract, multiply, and divide the two
integers and output each result. */

var vari1 = 10
var vari2 = 20


var addition = vari1 + vari2;
console.log(addition);

var subtraction = vari1 - vari2;
console.log(subtraction);

var multiplication = vari1 * vari2;
console.log(multiplication);

var division = vari1 / vari2;
console.log(division);

/* 15. Create a number then create an if-else statement if it is visible by both 5 and 3, or only visible by 5,
or only visible by 3. Lastly, output should be “(Number variable) is divisible by both 5 and 3” or “by 5” or
“by 3”. */

let numberz = 27

if(numberz %5 == 0 && numberz%3 == 0){
    console.log(numberz + " " + "is divisible by both 5 and 3.");
}

else if(numberz %5 == 0){
    console.log(numberz + " " + "is divisible by 5 only.");
}

else if(numberz %3 == 0){
    console.log(numberz + " " + "is divisible by 3 only");
}

/* 16. Create a variable which has the data of “Philippines”. Output each letter except the vowels using forloop. */

var ph = "Philippines"

for(let i = 0; i < ph.length; i++){
    console.log(ph[i]);
}

/* 17. Create a variable which has the data of “Eutopia”. Output each letter except the consonants using
for-loop. */

var word = "Eutopia"

for(let i = 0; i < word.length; i++){
    let letter = word[i];
    if ("AEIOUaeiou".includes(letter)) {
        console.log(letter);
    }
}

/* 18. Create a variable which has the data of “Mask of Madness”. Change all letter A to letter O. Then
output the new data of the variable. */

var text = "Mask of Madness";
var newtext = text.replace(/a/g, 'o');

console.log(newtext);

/* 19. Create a string variable that has a value of a number and create an integer variable. Then, convert
the value of the string variable into an integer. Add the two data and its sum should be outputted */

var lol = "100"
var lool = 100

var sumol = lool + parseInt(lol);

console.log(sumol);

/* 20. Create a for-loop from 1 to 10 and output the even numbers only */

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* 21. Create a for-loop from 1 to 100 and only output the numbers that are divisible by 10. */

for(let i = 1; i <= 100; i++){
    if (i % 10 === 0){
        console.log(i);
    }
}

/* 22. Create a for-loop from 0 to 30 that adds 3 to the index every time it runs in the loop. */

indexx = 0

for(let i = 0; i <= 30; i++){
    indexx += 3
}
console.log(indexx)

/* 23. Create a Boolean variable that has a true or false value. Also, create an integer variable. If the
Boolean variable is true, add 2 to the integer then output the new value. If false, subtract 2 from the
integer then output the new value. */

var boo = true
var inty = 100

if(boo === true){
    console.log(inty + 2)
}

else if(boo === false){
    console.log(inty - 2)
}

/*24. Create an array composing of 4 elements with integer data types with different values. Add 2 to the
first element, subtract 2 to the second element, multiply by 2 to the third element, and divide by 2 the
last element. Then output each result. */

let abc = [10,20,30,40]

abc[0] += 2
abc[1] -= 2
abc[2] *= 2
abc[3] /= 2

console.log(abc);

/*25. Create an array composing of 2 elements with integer data types. First element should have higher            //di ko gets 
value than the second element. Make the value of the second element equal or greater than the first
element just by adding 2 each time it runs in a for-loop. Then output the array. */

let bbc = [200, 100];

for (let i = 0; bbc[1] < bbc[0]; i++) {
  bbc[1] += 2;
}

console.log(bbc);

/* 26. Create an array composing of two elements and its value are “Hello” and “World” respectively.
Create an empty string variable then add the elements of the array to the empty variable using for-loop */

let GG = ["Hello", " World"]

let esv = " "

for(let i = 0; i < GG.length; i++){
    esv += GG[i]
}
console.log(esv)

/* 27. Create an array composing of integers of 1 to 5. Create a second array composing of 2, 4, and 5.
Using for-loop, output the integers of the first array that are not present in the second array. */

let hg = [1,2,3,4,5]
let rg = [2,4,5]

for(let i = 0; i < hg.length; i++){
  let element = hg[i];
  if (!rg.includes(element)) {
    console.log(element);
  }
}

/* 28. Create an integer variable ranging from 1 to 100. Check if the number is in which quadrant.
Quadrant 1 is ranging from 1 to 25. Quadrant 2 is ranging from 26 to 50. Quadrant 3 is ranging from 51
to 75. Quadrant 4 is ranging from 76 to 100. Output should be “(Number variable) is in quadrant (its
quadrant).” */

let dd = 100

if(dd <= 25 && dd >= 0){
    console.log(dd + " is in 1st quadrant.")
}

else if(dd <= 50 && dd >= 26){
    console.log(dd + " is in 2nd quadrant.")
}

else if(dd <= 75 && dd >= 51){
    console.log(dd + " is in 3rd quadrant.")
}

else if(dd >= 76 && dd <= 100){
    console.log(dd + " is in 4th quadrant.")
}

else{
    console.log("invalid Number")
}

/* 29. Create an array consisting of five Boolean elements. If there are 3 or more than 3 trues, output      //di ko gets pt2.
“Thank you.” If there are 3 or more than 3 falses, output “Sorry”. */

let bobba = [true, true, true, false, false]

let tru = 0
let fals = 0

for(let i = 0; i < bobba.length; i++){
    if(bobba[i] == true){
        tru += 1
    }
    else{
        fals += 1
    }
}
if(tru >= 3){
    console.log("Thank You")
}
else if(fa >= 3){
    console.log("Sorry")
}

/* 30. Create an empty string variable. Using for-loop starting from 0 to 10, add a letter x to the empty
string and output the value of the string every time it runs in the loop. */

let hey = ""

for(let i = 0; i <= 10; i++){
    hey += "x"
}
console.log(hey)




