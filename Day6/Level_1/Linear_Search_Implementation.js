   	// Linear Search Implementation: Write a function linearSearch(array, target)
// that loops through an array 
// and returns the index of the target (or -1 if not found).
    	const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];

function linearSearch(array, target)
{
    for(let i = 0 ; i < array.length ; i++)
    {
        if(array[i] === target){
             
            return i;
        } 
    }
    return -1;
}

console.log(linearSearch(array,2))
    	
    	