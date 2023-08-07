function getSum(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        sum= sum+element;
        console.log(index,element,sum);
    }
     return sum;
}
const myNumbers = [9,9,8,76,4,5];
getSum(myNumbers);