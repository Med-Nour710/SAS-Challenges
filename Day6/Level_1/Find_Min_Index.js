//Find Minimum Index: Write a function that searches through an array of numbers
//and returns the index of the smallest number.
const array = [-19, -38, -92, -7, -111, -3, -56, -4, -55];

function linearSearch(array)
{
    let Min_Index = 0;  
        for(let i = 1 ; i < array.length ; i++)
    {
        if(array[i] < array[Min_Index]  ){
             Min_Index=i
        } 
        
    }
    return Min_Index;
}

console.log(linearSearch(array))