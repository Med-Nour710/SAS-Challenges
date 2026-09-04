function reversal(str){
    str = str.split("")
    let i = str.length - 1;
    let rev_str =""
    while(i >= 0){
        rev_str += str[i];
        i--;
    }
    return rev_str;
}
console.log(reversal("banana"))