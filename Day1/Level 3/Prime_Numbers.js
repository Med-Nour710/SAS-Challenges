for (let num = 2; num <= 50; num++) {
  
  let isPrime = true; 

  for (let i = 2; i < num; i++) {
    if (num % i === 0 && num % 1 === 0) {
      isPrime = false; 
      break; 
    }
  }
  
  if (isPrime) {
    console.log(num); 
  }
}