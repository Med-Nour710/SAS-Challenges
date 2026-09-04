function palindrome(str){
    return str == str.split("").reverse().join("") 
}
console.log(palindrome("madam"))
console.log(palindrome("civic"))
console.log(palindrome("kayak"))
console.log(palindrome("wow"))
console.log(palindrome("shift"))