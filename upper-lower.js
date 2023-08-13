const userName = 'susmoy';
const userInput= 'bless';
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
if(userName.toUpperCase() === userName.toLocaleLowerCase()){
    console.log("Valid user");
}
else{
    console.log("Invalid User");
}


// searching

const lyrics='Ki khobor ali mia chillaiteso ki liya?'
const doesExist=lyrics.includes('ali');
console.log(doesExist);
console.log(lyrics.indexOf('lal'));

// startsWith,endsWith

// slice
const parts=lyrics.split(' ');
console.log(parts);
const partial = lyrics.slice(0,4);
console.log(partial);