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


function odd(value){
    var myArray=[];
    for(let i = 0;i<value.length; i++){
        const index= i;
        const element = value[index];
        if(element %2 !==0){
            console.log(index,element);
            myArray.push(element);
        }
    }
}
const oddNum = [9,9,8,76,4,5];
odd(oddNum);