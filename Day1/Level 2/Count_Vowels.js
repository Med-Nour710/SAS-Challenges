const jomla = "ridiculous"
let vo_counter = 0
for(d = 0;d<=jomla.length;d++)
{
    let pt_cr = jomla[d];
    
    if (pt_cr === 'a' || pt_cr === 'e' || pt_cr === 'i' || pt_cr === 'o' || pt_cr === 'u' ||
        pt_cr === 'A' || pt_cr === 'E' || pt_cr === 'I' || pt_cr === 'O' || pt_cr === 'U') 
        {
            vo_counter++;
    }
}
console.log(vo_counter);
