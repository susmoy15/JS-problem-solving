var num2 = 45;
var num3 = 65;
var gap = Math.abs(num2 - num3);
if(gap<9){
    console.log("Yo guys can be friends.");
}
else{
    console.log("Make distance from each others.");
}



// swap two numbers

var a = 8;
var b = 3;
var a = a+b;
var b = a-b;
var a = a-b;
console.log(a,b);


function three (num,num2,num3){
    // const Max = Math.max(num,num2,num3);
    const Min = Math.min(num,num2,num3);
    // return Max;
    return Min;

}
var Maximum= three (99,23,44);
 
console.log(Maximum ); 



// find maximum in a array

function heightArray(heights){
    let largest = numbers[0];
    for(i=0;i<numbers.length;i++){
        
        const index = i;
        const element = numbers[index];
        if(element>largest){
            largest = element;
        }
    }
    return largest;
}

const numbers = [33,89,344,657,78,90];
const total = heightArray (numbers);
console.log(total);

// Reverse String
function reverseWord(reverse){
    let reversed = '';
    for(let i = reverse.length-1; i>=0; i--){
        const element = reverse[i];
        reversed = reversed + element;
        console.log(element,reversed);
    }
    return reversed;

} 

const sentence = 'My name is susmoy';
const value = reverseWord(sentence);
console.log(value);



// using split & join

function susmoy(word){
    const result = [ ];
    const words = word.split(" ");
    for(let i = words.length-1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const allReverse = result.join(' ');
    return allReverse;

}

const sobdo = 'Kire Valo Hobi Na?';
const make = susmoy(sobdo);
console.log(make);