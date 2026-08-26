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
let user_IP1=parseInt(prompt("Enter First Number"));
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
}
    