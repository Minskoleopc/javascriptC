let x = 10
console.log(x)
x = 100
console.log(x)


const h = 100
console.log(h)
//h = 888

// Arithmetic operation

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


let s = 100
let t = 50

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// function 
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,6)
Calculator(8,4)


// function without parameter and without return type 

function addA(){
    console.log(5+5)
}
addA()
addA()
addA()
addA()

// function with parameter and without return type 
function addB(x,y){
    console.log(x+y)
}
addB(12,4)
addB(8,4)
addB(2,11)

// function with parameter and with return type 
// 100 show 
// 100 given

function addC(x,y){
    return x + y
}
let e2 = addC(2,1)
console.log(e2)
console.log(e2+e2)
console.log(e2 * 0.30)
console.log(e2 * e2)


// function declaration

function Subtraction(x,y){
    return x - y
}

let e3 = Subtraction(12,6)
console.log(e3)


// function expression 
let SubtractionB = function(x,y){
    return x - y
}

let e4 = SubtractionB(12,6)
console.log(e4)

// arrow function

let SubtractionC = (x,y)=>{
    return x - y
}
let e5 = SubtractionC(2,1)
console.log(e5)





// arrow function 




























