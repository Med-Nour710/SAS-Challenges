/* ----- Level 1 ------*/
// Age Logger
let age = 23 

console.log( "You are " + age + " years old" )
// Temperatuer Check 
let Temperatuer = 37;

if (Temperatuer > 30)
    {
        console.log( "it's hot outside!")
    }

 else {
    console.log("The Weather is nice outside")
 }
 //Even or Odd
 let number = 15;
  if (number % 2 == 0)
  {
    console.log( "The Number is Even");
  }
  else {
    console.log( "The Number is Odd");
}

/* ------ Level 2 -----*/
//Grading System
let score = 75;
if (score == 100 || score > 90)
{
    console.log( "A")
}
else if (score == 89 || score >= 80)
{
    console.log( "B")
}
else if (score == 79 || score >= 70)
{
    console.log( "C")
}
else
{
    console.log( "F")
}
//Max of Three
let a=4,b=6,c=8;
if( a > b && a > c)
{
    console.log("The first number is the largest one")
}
else if( a < b && b < c)
{
    console.log("The second number is the largest one")
}
else if( c > a && c > b)
{
    console.log("The third number is the largest one")
}
else
{
    console.log("There might have been to equal numbers")
}
//Leap Year Checker
let year = 2011;
if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0 )
{
    console.log('It is a Leap Year')
}
else
{
    console.log("It is not a Leap Year")
}
/* ------- Level 3 -----*/
//Basic Calculator
let num1 = 5 , num2= 24;
let operation = "*" ;
switch (operation) {
  case "+":
    console.log(num1 + num2); break;
  case "-":
    console.log(num1 - num2); break;
  case "*":
    console.log(num1 * num2); break;
  case "/":
    if( a ==0 || b==0)
    {console.log("The number zero is invalid for divison")}
    else {
console.log(num1 / num2); break;
    }
  default:
    console.log("Wrong Operator");
}
//Valid Triangle
let deg1 = 50,deg2 = 70,deg3=90
if (deg1 > 0 && deg2 > 0 && deg3 > 0)
{
    if (deg1 + deg2 + deg3 == 180)
    {
        console.log("It is a correct Triangle")
    }
    else {
        console.log("It is not a correct triangle")
    }
}
else 
{
    console.log("One of the triangle angles is invalid")
}
//BMI Calculator
let weight = 62 , height = 1.82;
let BMI = weight / (height*height);
if (BMI < 18.5)
{
    console.log(Math.round(BMI) + " ,Underweight")
}
else if(BMI == 18.5 || BMI <= 24.9)
{
    console.log(Math.round(BMI) + " ,Normal")
}
else if(BMI >= 25)
{
    console.log(Math.round(BMI) + " ,Overweight")
}
else
{ 
    console.log(Invalid)
}