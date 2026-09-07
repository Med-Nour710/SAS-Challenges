//Similar to Challenge 9 in day5
//Find the number that repeats the most number of times in an array.
/*Challenge 9 — Find the Most Frequent Number
Difficulty: Medium / Hard

Find the number that appears the most times.

Input
let numbers = [4, 2, 4, 3, 2, 4, 5];
Expected Output
4 appears 3 times
Goal
Compare values and count their occurrences.

This challenge can be solved using nested loops. */
let num_arr = [5, 5, 2, 3, 6, 6, 5];

let maxCount = 0;
let Freq_Rep_Num = null;

for(let i = 0; i < num_arr.length; i++) {
    
    let Pnt_Num = num_arr[i];
    let counter = 0; 
    
    for(let j = 0; j < num_arr.length; j++) {
        if( Pnt_Num === num_arr[j] ) {
            counter++; 
        }
    }
        if( maxCount<counter ) {
        maxCount = counter;
        Freq_Rep_Num = Pnt_Num;
        }
}

console.log(Freq_Rep_Num + " appears " + maxCount + " times");