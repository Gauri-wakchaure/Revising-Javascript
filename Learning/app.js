console.log("Hello Gauri!");
console.log("Gauri Wakchaure");
let a=90;
let b=23;
sum=a+b;
console.log("Sum of a and b is: "+sum);

//Arithmetic Operators
let x=10;
let y=5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

//Unary Operators
let num1=10;
console.log(num1++);
console.log(++num1);

//Assignment Operators
let c=11;
let d=c;
console.log(d);

//if else statement
let age=18;
if(age>=18)
{
    console.log("Eligible for vote");
}
else{
     console.log("Not Eligible for vote");
}

//if else if statements
let color="Green";
if(color==="red")
{
   console.log("Traffic light is red You have to Stop");
}
else if(color==="Yellow")
{
    console.log("Traffic light is Yellow You have go slow");
}
else if(color==="Green")
{
    console.log("Traffic light is Green You can Go");
}
else{
    console.log("False Condition");
}

//Example
let size='L';
if(size=='XL')
{
    console.log("Price is 250");
}
else if(size=='L'){
    console.log("Price is 200");
}
else if(size=='M'){
    console.log("Price is 100");
}
else if(size=='S')(
    console.log("Price is 50")
)

//Logical Operator Example
let str1="app";
if((str1[0]==='a') && (str1.length>3))
{
    console.log("It is a Good String");
}
else{
    console.log("It is not Good string");
}

//Switch Statement Example
let color1="Green";
switch(color1){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Go Slow");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light");
}

//Switch Statement Example-2
let day=7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");   
}

//Alert
//alert("Something is wrong");
//console.log("hello from console");
//console.error("This is error message");
//console.warn("This is warning message");

//Prompt
/* let fname=prompt("Enter Your Name");
let  lname=prompt("Enter Last Name");
let msg=("Welcome "+ fname+ ""+ lname+ "!");
alert(msg); */

//Practice Question-1
let Num4=57;
if(Num4%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}

//Practice Question-2
/* let uname=prompt("Enter Your name");
let u_age=prompt("Enter Your Age");
let Information=(uname+" is "+ u_age+ " years old");
alert(Information);*/

//Practice Question-3
let Quarter=2;
switch(Quarter){
case 1:
    console.log("January, February, March");
    break;
case 2:
    console.log("April, May, June");
    break;
case 3:
    console.log("July, August, September");
    break;
case 4:
    console.log("October, November, December");
    break;
default:
    console.log("Invalid  Quarter");
}

//Practice Question-4
let String1="auto";
if((String1[0]==='a' || String1[0]==='A') && String1.length>5){
    console.log("Golden String");
}else{
    console.log("Not a Golden String");
}

//Practice Question-5
let n1=32;
let n2=47852;
if((n1%10) == (n2%10)){
    console.log("Numbers have same digit");
}else{
    console.log("Numbers don't have same digit");
}

//practice Question-6
let a1=4;
let b1=67;
let c1=46;
if(a1>b1){
   if(a1>c1){
    console.log(a1, "is largest");
   }else{
    console.log(c1, "is largest");
   }
}else{
    if(b1>c1){
        console.log(b1, "is largest");
    }else{
        console.log(c1, "is largest");
    }
}

//Practice String Methods
//Question-1
let msg1="    help!     ";
msg1.trim().toUpperCase();

//Question-2
let name="ApnaCollege";
name.slice(4,9);   //'Colle'
name.indexOf("na")   //2
name.replace("Apna", "Our")   //'OurCollege'
name.slice(4)  //'College'
name.slice(4).replace('l','t')  //'Cotlege'

//Array Practice Questions
//Question 1
let Array=['january', 'july', 'march','august'];
Array.shift();   //'january'
Array.shift();   //'july'
Array.unshift("july");  // ['july', 'march', 'august']
Array.unshift("january");  // ['january', 'july', 'march', 'august']

//Array Question 2:Splice Reversed
let Array1=['january', 'july','march','august'];
Array1.splice(0,2,"july","june"); //['january', 'july']

let lang=['c', 'c++', 'javascript','python','java','c#','sql'];
lang.reverse();  //(7) ['sql', 'c#', 'java', 'python', 'javascript', 'c++', 'c']
lang.indexOf("javascript");  //4

let game=[['X',null,'O'],[null,'X',null],['O',null,'X']];

//JS-Part 3 Questions
//Question-1
let FArray=[5,6,7,-4,3,8,9];  
//[5,6,7,-4,3,8,9];
FArray.slice(0,5);   
//(5) [5, 6, 7, -4, 3]

//Question-2
FArray.slice(3);  
//(4) [-4, 3, 8, 9]

//Question-5
let s1="      Gauri     ";
s1.trim();   //'Gauri'

//Question-4
let a3=["App","Run","Code"];
a3.includes("Gauri");   //false
a3.includes("Code");    //true

//JS Part-5 
const Post={
    username: "@GauriWakchaure",
    content:" #Hello EveryOne",
    like: 150,
    reposts: 50,
    tags:["Gau", "Hello"]
};

//Generate random numbers
let step1=Math.floor(Math.random()*100);

//Number Guessing Game
/* const max=prompt("Enter Max Number");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("User Quit");
        break;
    }
    if(guess == random){
        console.log("you are right! Congrats!!! Your Random number was "+random);
        break;
    }else if(guess < random){
        guess=prompt("hint: your guess was too small. Please try again")
    }
    else {
        guess = prompt("hint: Your guess was too large, Please try again");
    }
}  */

//JS Part-5 Questions
//Question-1
let dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice:", dice);

//Question-2
const car={
    name:"Mercedes",
    Model:"A-class",
    color:"Black"
};
//car["name"];
//"Mercedes"

  //​Question-3
let Person={
    name: "Gauri",
    age: 21,
    city: "Pune"
};
/* Person
Object { name: "Gauri", age: 21, city: "Pune" }
Person.city;
"Pune"
Person.city = "New York";
"New York"
Person.city;
"New York"
Person
Object { name: "Gauri", age: 21, city: "New York" }
*/

/*Person.country;
undefined
Person.country = "United States";
"United States"
Person
Object { name: "Gauri", age: 21, city: "New York", country: "United States" }
*/

//JS Part-6
//Print Poem Create a function
function printPoem(){
    console.log("Twinkle twinkle little star");
    console.log("How I wonder, What you are");
}
printPoem();
printPoem();
printPoem();

//Create function to roll dice & always display the value of the dice (1to6)
function rollDice(){
    let dice2=Math.floor(Math.random() * 6)+1;
    console.log("Dice: "+dice2);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

//Create a function to print avg of 3 numbers
function avgNum(a, b, c){
    let avg=(a+b+c)/3;
    console.log("Average of 3 numbers is: "+avg);
}
avgNum(23,34,56);
avgNum(22,22,22);
avgNum(22,36,58);

//Create a function that prints multiplication table of a number
function mulTable1(mt1){
    for(let i=1; i<=10; i++){
       console.log(i*mt1);
    }
}
//mulTable1(7);
//mulTable1(17);

//Create a function that returns the sum of numbers from 1 to n
function printSum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}
printSum(10);

//Concat all strings
let str=["hi", "hello", "Bye","!"];

function concat(str) {
    let result="";
    for(let i1=0; i1<str.length; i1++){
        result=result+str[i1];
    }
    return result;
}

//Scope 
let greet= "hello";    //Global Scope

function changeGreet(){
    let greet="namaste";     //Function Scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);      //Lexical Scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();

//Functional Expression
function multipleGreet(func, count){
    for(let g=1; g<=count; g++){
        func();
    }
}
let greet1=function() {
    console.log("hello");
}
multipleGreet(greet1, 10);

//JS Part-6 practice Questions
//Question-1
let array=[10,20,30,35,46,56,67,79,84,92,100];
function findElement(f1){
    for(let f=0; f<array.length; f++){
        if(array[f]>f1){
        console.log(array[f]);
        }
    }
}
findElement(50);

//Question-2
let array2=["Australia", "Germany", "United States of America"];
function findCountry(){
    let longest = array2[0];
    for(let c=0; c<array2.length; c++){
        if(array2[0].length<array2[c].length){
        longest = (array2[c]);
        }
    }
    console.log(longest);
}
findCountry();

//Question-3
function countVowels(str2){
    let vowels="aeiouAEIOU";
    let count=0;
    for(let v=0; v<str2.length; v++){
        console.log(str2[v]);
        if(vowels.includes(str2[v])){
            count++;
        }
    }
    console.log("Number of vowels: "+count);
}
countVowels("Gauri Wakchaure");

//Question-4
function random_no(){
    let random=Math.floor(Math.random()*10)+1;
    console.log(random);
}
random_no();

//This Keyword
const student={
    name: "Gauri",
    age: 22,
    eng: 89,
    hin: 96,
    mar: 95,
    getavg() {
        let avg=(this.eng + this.hin + this.mar) / 3;
        console.log("Average of three subjects is: "+avg);
    }
}

//Try and Catch Block
console.log("Hello Gauri");
console.log("Hello Hii");
try{
console.log(z);
}catch(e){
    console.log("Error: z is not defined");
}
console.log("Hello September");
console.log("It's My Birthday");

//Arrow Function
const SUM=(a, b) =>{
    console.log(a+b);
};

const cube=(n)=>{
    return n*n*n;
};

const sroot=(z) =>{
    return z*z;
};

const hello=() =>{
    console.log("Hello World");
}

//Implicit Return
const mul=(x, y)=>(
    x*y
);

const div=(p, q) =>(p/q);

//Set Timeout
/* console.log("Hello");

setTimeout(()=>{
    console.log("Gauri Wakchaure");
},5000);
console.log("welcome");
*/

//Set Interval
  console.log("Hello");

let id = setInterval(()=>{
    console.log("Gauri Wakchaure");
},5000);
console.log("welcome");

