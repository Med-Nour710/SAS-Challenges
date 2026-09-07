function isMax(arr){
    let max = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(max < arr[i])
            {
            max=arr[i];
            }
    }
    return max;
}
let num_arr = [-34, -15, -41, -58, -69, -24];
console.log(isMax(num_arr))