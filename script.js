// const addTwoNumber = (a, b) => a+b;

// console.log(addTwoNumber(4, 7));

// const student = {
//     name:"Dheeraj",
//     class: "btech",
//     rollNO: 23,
//     passingYear: 2024
// }


// console.log(student);

const fruits =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newFruits = fruits.map(fruit=>{
    if(fruit==' '){
        return fruit = 'emptyString';
    }
    else{
        return fruit;
    }
})

console.log(newFruits);