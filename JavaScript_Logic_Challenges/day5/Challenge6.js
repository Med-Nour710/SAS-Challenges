let word = "level"/*"hello" --> second example*/ ;
let pal_is_true = true;
for(let i=0;i < word.length/2;i++){

    if (word[i] !== word[word.length - 1 -i]){
    pal_is_true = false; break;} 
                                    }
    if(pal_is_true == true){
        console.log("Palindrome")
    }
    else{console.log("Not a Palindrome")}
