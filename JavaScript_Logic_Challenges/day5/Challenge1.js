let nums = [4,7,2,9,10,13];
let arr_l = nums.length
let even = 0
let odd = 0

for(let i= 0;i < arr_l;i++){
    if(nums[i] % 2 !== 0){
        odd+=1;
    }
    else{ even+=1;}
}

console.log("Even: " +even);
console.log("Odd: " +odd);
