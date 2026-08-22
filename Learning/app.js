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









