function createMultiplier(multiplier){
    return {
        multiply: (number) => number * multiplier
    }
}
let result = createMultiplier(5);
console.log(result.multiply(2));
