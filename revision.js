// Day1

// let x = 10
// console.log(x)
// x = 300
// console.log(x)

// const h = 100
// console.log(h)
// //h = 4466

// // Arithmetic operation 

// let z = 10
// let q = 5

// console.log(z+q)
// console.log(z-q)
// console.log(z*q)
// console.log(z/q)
// console.log(z%q)

// let a = 10
// let b = 5

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)


// function Calculator(x,y){
//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x/y)
//     console.log(x%y)
// }
// Calculator(12,4)


// function addA(){
//     console.log(9+9)
// }
// addA()
// addA()
// addA()

// function addB(x,y){
//     console.log(x+y)
// }

// addB(23,5)
// addB(2,5)

// function addC(x,y){
//     return x +  y
// }

// let a1 = addC(34,5)
// console.log(a1)
// console.log(a1 + a1)
// console.log(a1 - 5)


// function --->

// function declartion 


// function expression 


// // function expression
// let subA = function(a,b){
//     return a - b
// }
// let q1 = subA(20,5)
// console.log(q1)

// // function declartion 
// function subB(x,y){
//     return x - y
// }
// let q2  = subB(13,7)
// console.log(q2)

// // arrow function 

// let subC = (x,y)=>{
//     return x - y
// }
// let q3 = subC(12,4)
// console.log(q3)


// day3

let x = 10
console.log(typeof x)

let y = true
console.log(typeof y)

let z = "chinmay"
console.log(typeof z)


// comparision operator 

// <, > , <= , >= ,!= ,=== ,!==

// == , !=   --- value
// === , !== --- value and data type
console.log(22 === 22) // true
console.log(22 !== 22) // false
console.log(22 !== '22') //true
console.log(22 == '22') // true
console.log(22 != '22') // false
console.log(22 === '22') // false
console.log(23 > 3) // true
console.log(23 < 20) // false
console.log(3 >= 3) // true
console.log(3 <= 3) // true
console.log(7 >= 4) // true
console.log(8 >= 8) // true
console.log(8 <= 8) // true

// AND --- && 

// true  && true  -- true
// false && false -- false
// true  && false  -- false
// false && true  -- false

console.log(6 == 6 && 7 == 7)
console.log(6 != 6 && 7 != 7)
console.log(6 == 6 && 7 != 7)
console.log(6 != 6 && 7 == 7)



// OR  --- ||

// true  || true  -- true
// false || false -- false
// true  || false  -- true
// false || true  -- true

console.log(6 == 6 || 7 == 7)
console.log(6 != 6 || 7 != 7)
console.log(6 == 6 || 7 != 7)
console.log(6 != 6 || 7 == 7)

//NOT  --- !  
// true - false 
// false - true
console.log( !(7 === '7'))
console.log( !(7 == '7'))

// conditional statemets

let numT = 5

// if(numT > 0 && numT <= 5){
//     console.log("10% discount")
// }
// if(numT > 5 && number <= 10 ){
//     console.log("20% discount")
// }
// if(numT > 10){
//     console.log("30% discount")
// }

// if(numT > 0 && numT <= 5){
//     console.log("10% discount")
// }
// else if(numT > 5 && number <= 10 ){
//     console.log("20% discount")
// }
// else if(numT > 10){
//     console.log("30% discount")
// }
// else {
//     console.log('incorrect input')
// }

// let marks = 92
// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }

// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }
// else {
//     console.log("Fail try again")
// }


// tenary operator 
let j1 = 10
let j2 = 5

if(j1 > j2){
    console.log('j1 is greater')
}
else {
    console.log('j2 is greater.')
}

j1 > j1 ? console.log('j1 is greater'):console.log('j2 is greater')


// Switch case 
// for loop , while loop 
// truthy falsy values 
// array