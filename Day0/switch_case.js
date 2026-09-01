//Simple Calculator

let a = 5 , b= 24;

let operation = "*" ;
switch (operation) {
  case "+":
    console.log(a + b); break;
  case "-":
    console.log(a - b); break;
  case "*":
    console.log(a * b); break;
  case "/":
    console.log(a / b); break;
  default:
    console.log("Wrong Operator");
}