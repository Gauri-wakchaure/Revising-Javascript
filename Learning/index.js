       //1. Ways to print in Javascript
        // console.log("Hello Gauri");
        // alert("me")
        // document.write("hello World"); 

        //2. Javascript console API
        // console.log("Hello World");
        // console.warn("this is warning");
        // console.error("this is error");

        //3. Javascript Variables
        //What is Variable? - It is a Container to store data values - var, let, const are the keywords to declare variables in Javascript
        var number1=456
        var number2 = 799
        console.log(number1 + number2);

        var name1 = "Gauri"
        var name2 = " Wakchaure"
        console.log(name1 + name2);

        var name3="Hello,"
        var name4= " How are you?"
        console.log(name3 + name4);

        var num1= 65
        var num2= 76
        console.log(num1*num2);

        let no1=7
        let no2=3
        console.log(no1+no2);

        let n1="Software"
        let n2=" Developer"
        console.log(n1 + n2);

        //4. Data Types in Javascript
        // Numbers
        var num3=78;
        var num4=45.73;
        
        // String
        var str1="My name is Gauri";
        var str2=" I am a Software Developer";

        // Objects
        var marks={Gauri:91.80, Sakshi:85.60, Priya:80.72};

        // Boolean
        var a=true;
        var b=false;

        console.log(num3+num4);
        console.log(str1+str2);
        console.log(marks);
        console.log(a);
        console.log(b);

        // Undefined
        //var und="undefined";
        var und;
        console.log(und);

        // Null 
        var n = null;
        console.log(n);

       /* There are two types of datatypes in Javascript
        1. Primitive data types: number, string, boolean, undefined, null, symbol
        2. Reference data types: Arrays and Objects */

        // Array
        var arr=[23, 7, 79,"Gauri", 24, 23];
        //console.log(arr);

        var arr1=[12, 65, "Peru", "Lotus", 76, "India", "Software-Developer"];
        //console.log(arr1);

        var arr2=["Apple","Mango", "Banana", "Grapes", "Pineapple"];
        //console.log(arr2);

        var arr3=["Gauri", "Sakshi","Priya", "Siya", "Riya","Ananya"];
        //console.log(arr3);
        
        //4. Javascript Operators
        // Arithmetic Operators
        var a=100;
        var b=60;
        console.log("The Value of a+b is", a+b);
        console.log("The Value of a-b is", a-b);
        console.log("The Value of a*b is", a*b);
        console.log("The Value of a/b is", a/b);

        // Assignment Operators
        var c=a;
        c+=3;
        c-=4;
        console.log(c);

        var x=65;
        var y=78;
        //console.log(x==y);
        //console.log(x===y);
        //console.log(x!=y);
      
        // Comparison Operators
            //console.log(x>y);
            //console.log(x<y);
            //console.log(x>=y);
            //console.log(x<=y);

        // Logical Operators
          // Logical AND
              //console.log(true && true);
              //console.log(true && false);
              //console.log(false && false);

           // Logical OR
        console.log(true || true);
        console.log(true || false);
        console.log(false || true);
        console.log(false || false);

           //Logical NOT
           console.log(!true);
           console.log(!false);

        
        //Functions
        // DRY - Do not Repeat Yourself
        function avg(a, b) {
            return (a + b) / 2;
        }
        c1=avg(4,7);
        c2=avg(8,2);
        console.log(c1,c2);

        function sum(x, y)
        {
            return (x+y);
        }
        c3=sum(15,50);
        console.log(c3);

        function mul(p, q)
        {
            return (p*q);
        }
        c4=mul(45, 90);
        console.log(c4);

        //Conditional Statements in Javascript
        //if statement
        var age=56;
        if(age>18){
            console.log('You are not a kid');
        }

        var marks=80;
        if(marks>40)
        {
            console.log('You are Pass');
        }
        
        //if else statement
        var age1=45;
        if(age1<18){
         console.log('You are not eligible for vote');
        }
        else
        {
            console.log('You are eligible for vote');
        }

        //if else ladder
        /* var marks=91;
        if(marks>90)
        {
            console.log("You are Genius student")
        }
        else if(marks>80)
        {
            console.log('You are in merit');
        }
        else if(marks>60)
        {
            console.log('You are an average student');
        }
        else if(marks>40)
        {
            console.log('You are only pass');
        }
        else{
            console.log('You are Fail');
        }  */

        //Loops
        //for loop to print % times
        //For Loop
        for(var i=1; i<=5; i++)
        {
            console.log("Gauri Wakchaure"); // 5 Times executed
        }

        //Program to print sum of 1 to 7 numbers
        var sum=0;
        for(var i=1; i<=7; i++)
        {
            sum+=i;
        }
        console.log("Sum of 1 to 7 numbers is: "+sum);

        //Program to print even odd no
        var n=178;
        for(var i=1; i<=n; i++)
        {
            if(n%2==0)
            {
                console.log("Number is even");
            }
            else{
                console.log("Number is odd");
            }
        }

        //Program to print factorial
        var num=7;
        var fact=1;
        for(var i=1; i<=7; i++)
        {
            fact*=i;
        }
        console.log("Factorial of 7 is: "+fact);

       // Print 1 to 20 Even numbers
       for(var i=1; i<=20; i++)
       {
        if(i%2==0)
        {
            console.log(i);
        }
       }

       //Print 1 to 30 Odd numbers
       for(var i=1; i<=30; i++)
       {
        if(i%2!=0)
        {
            console.log(i);
        }
       }

       //Print sum of 1 to 40
       var sum=0;
       for(var i=1; i<=40; i++)
       {
        sum+=i;
       }
       console.log("Sum of 1 to 40 numbers: "+sum);

       //Multiplication Table
       var num= 17;
       for(var i=1; i<=10; i++)
       {
        console.log(num*i);
       }
      
       //Prime numbers
       var n=6;
       var count =0;
       for (var i=1; i<=n; i++)
       {
        if(n%i==0)
        {
            count++;
        }
       }
       if(count==2)
       {
        console.log("Prime number");
       }
       else{
        console.log("Not Prime number");
       }

       //Fibonacci Series
       var a=0, b=1;
       for(var i=1; i<=10; i++)
       {
        console.log(a);
         var c=a+b;
         a=b;
         b=c;
       }

       //while Loop
       var array1=[1,2,3,4,5,6,7,8,9,10];
       var j=0;
       while(j<array1.length)
       {
        console.log(array1[j]);
        j++;
       } 

       //Do while loop
        // var j=0;
        // do{
        //     console.log(array1[j]);
        //     j++;
        // }while(j<array1.length);

        var arr1=[12,22,32,42,52,62,72,82];
        for(var i=0; i<arr1.length;i++)
        {
            if(i==4)
            {
                //break;
                continue;
            }
            console.log(arr1[i]);
        }

        // var myarr=["Gauri", "America", 65, null, true];
        // //Array Methods
        console.log(myarr.length);
        //myarr.pop();
        myarr.push("Happy");
        //myarr.shift();
        //const newlen=(myarr.unshift("Happy"));
        //console.log(newlen);
        //myarr.toString()
        myarr.sort();
        console.log(myarr);

        //String Methods
        let mystring="Gauri is a Software Developer";
        console.log(mystring.length);
        console.log(mystring.indexOf("Software"))
        console.log(mystring.lastIndexOf("Software"))
        console.log(mystring.slice(2,5))
        console.log(mystring.replace("Gauri","Gauree"))

        let myDate= new Date();
        console.log(myDate);
        console.log(myDate.getTime())
        console.log(myDate.getFullYear())
        console.log(myDate.getDay())
        
        // DOM Manipulation
        let ele=document.getElementById('clickme');
        console.log(ele);

        let eleclass=document.getElementsByClassName('container');
        console.log(eleclass);
        eleclass[0].style.background="violet";

        let eleTag=document.getElementsByTagName('button');
        eleTag[0].style.background="Green";
        console.log(eleTag);

        let eleTag1=document.getElementsByTagName('h1');
        eleTag1[0].style.background="SkyBlue";
        console.log(eleTag1);
        createElement=document.createElement('p');
        createElement.innerText="I'm Software Developer";
        eleclass[0].appendChild(createElement);

        // Selecting using Query
        sel = document.querySelector('.container')
        console.log(sel)
        sel = document.querySelectorAll('.container')
        console.log(sel)

        function clicked(){
            console.log('The button was clicked')
        }

        window.onload= function()
        {
            console.log('The document was loaded')
        }

        // Events in Javascript
        firstContainer.addEventListener('clickme', function()
        {
        console.log("Click Hua")
        })

        firstContainer.addEventListener('mouseov', function()
        {
        console.log("Mouse on Container")
        })

        //Arrow function
        function summ(a,b)
        {
            return a+b;
        }

        //We can also used arrow function instead of function
        //We used this when we have to insert function in a middle of program
        summ=(a,b)=>
        {
            return a+b;
        }

        // SetTimeout and Setinterval
        //When we have to set schedule for anything we have to use setTimeout
        login=()=>
        {
            console.log("I am log in");
        }
         setTimeout(login, 3000);

        //When we have to set schedule for anything repetedly we have to use setInterval
        // To stop set interval use clr
         //setInterval(login, 3000);

         //Javasript localStorage
         localStorage.setItem('name','Gauri')
         localStorage
         localStorage.getItem('name','Gauri')
         'Gauri'
         localStorage.removeItem('name')

        // JSON
        obj={name: "Gauri", length:1, a:{this: 'tha"t'}}
        jso=JSON.stringify(obj)
        console.log(typeof jso)
        console.log(jso)     
