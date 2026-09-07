function re_unq_val(arr)
{
    let unq_arr = [];
    for(let i=0;i < arr.length;i++){
        if(!unq_arr.includes(arr[i]) )
        {
            unq_arr.push(arr[i])
        }
                                     }
    return unq_arr;
}
let non_unq_arr = [1,1,2,2,3,3,3,4,4,4,4];
console.log(re_unq_val(non_unq_arr))
