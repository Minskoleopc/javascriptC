// one input and multiple output


// numT > 0 && numT <= 5    ----> 10 % discount
// numT > 5 && numT <= 10   ----> 20 % discount
// numT > 10                ----> 30 % discount


// if(condition){ // true or false
//     // statement
// }

let numT  = -11

// if(numT > 0 && numT <= 5){
//     console.log('10 % discount')
// }
// if(numT > 5 && numT <= 10){
//     console.log('20 % discount')
// }
// if(numT > 10){
//     console.log('30 % discount')

// }

// if(numT > 0 && numT <= 5){
//     console.log('10 % discount')
// }
// else if(numT > 5 && numT <= 10){
//     console.log('20 % discount')
// }
// else if(numT > 10){
//     console.log('30 % discount')
// }
// else {
//     console.log('incorrect input')
// }

// program 2


let marks = 55

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }


if(marks > 90){
    console.log('Grade A')
}
else if(marks > 75){
    console.log('Grade B')
}
else if(marks > 65){
    console.log('Grade C')
}
else {
    console.log('Fail , try again')
}

// program 3

let a  = 100
let b = 50
if(a > b){
    console.log('a is greater')
}
else {
    console.log('b is greater')
}

// Ternary operator
a > b ? console.log('a is greater'):console.log('b is greater')


let age = 17
let q1 = age >= 18 ? "can drive":"cannot drive"
console.log(q1)





