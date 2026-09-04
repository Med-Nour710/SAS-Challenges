function f_and_l(string){
    let st_char = string.at(0);
    let end_char = string.at(-1);
    return st_char + " " + end_char
}

let fndl = f_and_l('Hello World')

console.log(fndl)