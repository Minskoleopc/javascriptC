function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(8,4)

// function without parameter and without return type
function addA(){
    console.log(9+9)
}
addA()
addA()
addA()
addA()

// function with parameter and without return type 

function addB(x,y){
    console.log(x+y)
}
addB(4,5) // 9
addB(14,1) // 15
addB(14,2) // 17

// function with parameter and with return 

// 100 - show
// 100 - given

// function addC(x,y){
//     return x+y
// }
// let q1 = addC(12,2)
// console.log(q1)
// console.log(q1+q1)
// console.log(q1 * 0.10)




// function declaration 
function SubA(x,y){
    return x-y
}
let q2 = SubA(12,4)
console.log(q2)

// function expression 

let SubB = function(x,y){
    return x - y
}
let q3 = SubB(12,3)
console.log(q3)

// arrow function

let SubC = (x,y) =>{
    return x  - y
}
let q4 = SubC(30,15)
console.log(q4)





// function expression
let mul = function (x,y){
    return x * y
}
let e1 = mul(12,4)
console.log(e1)

// arrow function 
let mulB =  (x,y)=>{
    return x * y
}
let e2 = mulB(12,4)
console.log(e2)

// function declaration 

function mulC(x,y){
    return x * y
}
let e3 = mulC(12,4)
console.log(e3)