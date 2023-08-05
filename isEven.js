function isEven(number){
    const value = number % 2;
    if(value == 0){
        return true;
    }
    else{
        return false;
    }
}
const Number = isEven(93);
console.log(Number);