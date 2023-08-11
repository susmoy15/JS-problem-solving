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
