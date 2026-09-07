let text = "JAvascrIpt is amAzing";

let text_low = text.toLowerCase() 
let vo_counter = 0

for(let i=0;i < text.length ; i++)
{
    
    if(text_low[i] == "a" || text_low[i] == "e" || text_low[i] == "i" 
        || text_low[i] == "o" ||text_low[i] == "u" ){
            vo_counter++;
        }
}

console.log(vo_counter)