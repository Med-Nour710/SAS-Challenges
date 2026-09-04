function capitalize_f_l(str) {
    let cap_array = str.split(" ");
    let i = cap_array.length - 1;
    
    while (i >= 0) { 
        let curr_word = cap_array[i]; 
        let f_Letter = curr_word[0].toUpperCase();
        let restOfWord = curr_word.slice(1);
        let cap_Word = f_Letter + restOfWord;
        cap_array[i] = cap_Word;
        i--; 
    }
    
    return cap_array.join(" "); 
}

console.log(capitalize_f_l("what a wonderful world"));