function leapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const Year = leapYear(2000);
console.log('This year: ',Year);
