//Write a function that takes an array and a value, 
// returning true if the value exists in the array and false otherwise 
// (without using .includes()).
function elem_ex(arr,val)
{
    let found = false;
    for(let i = 0; i < arr.length ; i++)
    {
        if(val === arr[i]){
            found = true; break;
        }
    }

    return found;
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(elem_ex(arr,11/*4 --> second example*/))