let n1 = 0;
let n2 = 1;
let next_n;

console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
  
  next_n = n1 + n2;
  console.log(next_n);
  
  n1 = n2;
  n2 = next_n;
}