//Print 1 to 10 numbers
for(let i=1; i<=10; i++)
{
    console.log(i);
}

//Print Odd numbers using if-else
/* for(let a=1; a<=15; a++){
    if(a%2!=0)
    {
        console.log(a);
    }
} */

//Print Odd Numbers
for(let a=15; a>=1;  a=a-2)
{
    console.log(a);
}

//Print Even Numbers
for(let b=2; b<=10; b=b+2){
    console.log(b);
}

//Print Multiplication table
for(let m=3; m<=30; m=m+3)
{
    console.log(m);
}

/* let n=prompt("Enter Your Number");
n=parseInt(n);

for(let t1=n; t1<=n*10; t1=t1+n){
    console.log(t1);
} */

//Break Keyword
let i1=1;
while(i1<=5){
    if(i1==3){
        break;
    }
    console.log(i1);
    i1++;
}
console.log("We used Break at 3");

//Arrays with Loops
let fruits=["apple","mango","banana","guava","litchi","papaya"];
/* for(let i2=0; i2<fruits.length;i2++){
    console.log(i2,fruits[i2]);
} */

/*  for(let i2=fruits.length-1; i2>=0; i2--){
        console.log(i2, fruits[i2]);
    } */

let colors=[
    ["Red", "Green", "Blue"],
    ["White", "Black", "Gray"]
];

for(let i4=0; i4<colors.length; i4++){
    console.log(i4, colors[i4], colors[i4].length);
    for(let j4=0; j4<colors[i4].length; j4++){
        console.log(`j4=${j4}, ${colors[i4][j4]}`);
    }
}

//Array with For Of Loop
let phones=["Redmi", "Vivo", "IPhone", "RealMe", "MicroMax"];
for(phone of phones){
    console.log(phone);
}

for(char of "Gauri"){
    console.log(char);
}

let heroes=[["SpiderMan", "BatMan", "IronMan"],
["Thor", "Wonder Women", "Flash"]
];

for(list of heroes){
    for(name of list){
        console.log(name);
    }
}