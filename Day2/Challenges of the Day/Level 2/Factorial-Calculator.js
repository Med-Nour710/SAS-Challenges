function factorial(n) {
  let fact = 1;
  let counter = 1;
  for(counter;counter<=n;counter++) {
    fact *= counter;
  }
  return fact
}

console.log(factorial(5))