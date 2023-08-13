products=[ 
    {name:'iphone',id:2,price:20000},

    {name:'macbook air Laptop',id:3,price:80000},

    {name:'Xiami-phone',id:4,price:20000},

    {name:'lenovo Laptop',id:5,price:80000},

    {name:'nokia phone',id:6,price:20000},

    {name:'asus laptop',id:7,price:80000},

    {name:'Xiami-phone',id:8,price:20000},

    {name:'HP laptop',id:9,price:80000},


]

function matchProducts(products,search){
    const match=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            match.push(product);
        }
    }
    return match;
}
const result = matchProducts(products,'laptop');
console.log(result);