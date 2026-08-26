// Level-1 Basics
//Question-1
let name="Gauri";
let age=21;
let city="Pune";
let student_status="Pass";
console.log(name,age,city, student_status);

//Question-2
let a=14;
let b=6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Question-3
let num=15;
if(num%2==0){
    console.log(num+" is Even");
}else{
    console.log(num+" is Odd");
}

//Question-4
let num2=-76;
if(num2>0){
    console.log(num2 +" is POsitive");
}else if(num2<0){
    console.log(num2 +" is Negative");
}else if(num2==0){
    console.log(num2 +" is Zero");
}

//Question-5
let num3=11;
let num4=12;
if(num3>num4){
    console.log(num3+" is Largest number");
}else{
    console.log(num4+" is Largest number");
}

//Question-6
let n1=1001;
let n2=555;
let n3=3011;
if(n1>n2 && n1>n3){  
    console.log(n1+" is largest");   
}else if(n2>n1 && n2>n3){
    console.log(n2+" is largest");
}else{
    console.log(n3+" is largest");
}

//Question-7
let n4=87;
let name1="Gauri_Wakchaure";
let value=true;
let c=null;
let app;
typeof(n4);  //'number'
typeof(name1);  //'string'
typeof(value);   //'boolean'
typeof(c);        //'object'
typeof(app);      //'undefined'

//Question-8
console.log(10+"20");  //1020
console.log("10" -5);  //5
console.log(10+20+"30");  //3030

//Question-9
let number=30;
if(number%3==0 && number%5==0){
    console.log(number+" is Divisible by both 3 and 5");
}else{
    console.log(number+" is not divsible by both 3 and 5");
}

//Question-10
/* let user_IP1=parseInt(prompt("Enter First Number"));
let user_IP2=parseInt(prompt("Enter Second Number"));
let choice=prompt("Enter Your Choice");
switch(choice) {
    case "+":
        console.log("Addition of two numbers: "+(user_IP1+user_IP2));
        break;
    case "-":
        console.log("Subtraction of two numbers: "+(user_IP1-user_IP2));
        break;
    case "*":
        console.log("Multiplication of two numbers: "+(user_IP1*user_IP2));
        break;
    case "/":
        console.log("Division of two numbers: "+user_IP1/user_IP2);
        break;
    case "%":
        console.log("Modulus of two numbers: "+(user_IP1%user_IP2));
        break;
    default:
        console.log("Wrong Choice");
} */

//Level-2 Strings
//Question-11
let val1="   Television   ";
val1.trim();           //'Television'
val1.length;           //16
val1.toUpperCase();    //'   TELEVISION   '
val1.toLowerCase();    //'   television   '
  
//Question-12
let x="Airoplane";
x.indexOf("a");        //6

//Question-13
let q="RajNandini";
q.includes("Raj");     //true

//Question-14
let d="Assignment";
d.slice(0,6);           //'Assign'

//Question-15
let r1="Gauri-Hello";
r1.replace("Hello","Wakchaure");     //'Gauri-Wakchaure'

//Question-16
let name4="Gauri";
let age4=21;
console.log(`My name is ${name4} and I am ${age4} years old`);
//My name is Gauri and I am 21 years old

//Question-17
let str1="ChatGPT";
let reverse=str1.split("").reverse().join("");
console.log(reverse);

//Question-18
let s="madam";
let reverse1=s.split("").reverse().join("");
if(s==reverse1){
    console.log("Palindrome String");
}else{
    console.log("Not Palindrome String ")
}

//Level-3 Arrays
//Question-19
let array=["Apple", "Banana", "Papaya", "WaterMalon", "Litchi", "Pineapple"];
array.push("Cherry");
//['Apple', 'Banana', 'Papaya', 'WaterMalon', 'Litchi', 'Pineapple', 'Cherry']
array.pop();
//'Cherry'
//['Apple', 'Banana', 'Papaya', 'WaterMalon', 'Litchi', 'Pineapple']
array.unshift("Cherry");
//['Cherry', 'Apple', 'Banana', 'Papaya', 'WaterMalon', 'Litchi', 'Pineapple']
array.shift();
//'Cherry'
//['Apple', 'Banana', 'Papaya', 'WaterMalon', 'Litchi', 'Pineapple']

//Question-20
array.indexOf("WaterMalon");   //3

//Question-21
array.includes("Apple");       //true

//Question-22
let array1=["Red","Green","Blue"];
let array2=["Black","White","Gray"];
array1.concat(array2);
   //['Red', 'Green', 'Blue', 'Black', 'White', 'Gray']

//Question-23
let flowers=["Lotus","Rose","Mogra", "Jasmine","Lily"];
flowers.slice(0,3);
    //(3) ['Lotus', 'Rose', 'Mogra']

//Question-24
flowers.splice(3,1,"Daisy");
   //['Jasmine']
   //flowers
   //(5) ['Lotus', 'Rose', 'Mogra', 'Daisy', 'Lily']

//Question-25
