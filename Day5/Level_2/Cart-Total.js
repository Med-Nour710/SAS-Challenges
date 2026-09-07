//**Cart Total**: Given an array of objects representing a shopping cart 
// (each item has `price` and `quantity`),
//  calculate the total cost of the cart.

const cart = [{name:"Water",price:5,quantity:6},
                {name:"Bread",price:2,quantity:7},
                {name:"Flour",price:5,quantity:10},
                {name:"Lentiles",price:12,quantity:2},
                {name:"Chekpeas",price:20,quantity:1},
                ]
function total_cost(array)
{   
    let total = 0;
    for(let i=0;i<array.length;i++)
    {
        total+=array[i].price*array[i].quantity;
    }
    return total;
}
console.log(total_cost(cart))