function countChar(str,char){
    let count = 0;
    let i = str.length - 1;
    while(i >=0){
       if (str [i]== char){
        count +=1;
       }; i--
    };
    return count ; 
}

console.log(countChar("ukalele","l"))