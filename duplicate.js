function uniqueNames(names){
    const unique = [];
    for(let i =0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}


const names = ['rocky','susmoy','bless','bless','sondip','sumon','rocky','susmoy','robi'];
const right = uniqueNames(names);
console.log(right); 
