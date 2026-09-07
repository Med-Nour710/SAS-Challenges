let numbers = [12, 5, 31, 8, 19];
let max = numbers[0];
for(let i = 0 ; i < numbers.length ; i++){
    if(max < numbers[i]){
        max=numbers[i];
    }
}
console.log(max)