const products = [{name:"Water",price:5,inStock:true},
                {name:"Bread",price:2,inStock:true},
                {name:"Flour",price:5,inStock:false},
                {name:"Lentiles",price:12,inStock:false},
                {name:"Chekpeas",price:20,inStock:true},
                ]

    function inStock_Product(array)
    {
        let inStock_array = [];
        for(let i = 0;i < array.length;i++)
        {
            if(array[i].inStock)
            {
                inStock_array.push(array[i]);
            }
        }
        return inStock_array;
    }
    console.log(inStock_Product(products))