// Write a function that reverses an array in place 
// without using the built-in .reverse() method.
function revers_arr(arr)
{
    
    for(let i = 0; i < arr.length/2; i++)
    {
        
    let temp = arr[i]; 
    arr[i] = arr[arr.length - 1 - i]; 
    arr[arr.length - 1 - i] = temp; 
        
    }
    return arr;
} 
    let non_rev_arr = [1,2,3,4,5,6];
    console.log(revers_arr(non_rev_arr))