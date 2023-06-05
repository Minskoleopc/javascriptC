let a = 10
console.log(a)

//              0         1       2        3
let names = ["chinmay","samay","sameer","sandeep"]
console.log(names[0])
console.log(names[1])

// length
console.log(names.length)
for(let i = 0 ; i <= names.length-1 ; i++){
    //console.log(i)
    console.log(names[i])
    // i - 0 
    // i - 1
    // i - 2
    // i - 3
}

for(let i = names.length -1 ;  i>= 0 ; i--){
    //console.log(i)
    console.log(names[i])
}

// Object 
// Object --- properties and method

let city = ["pune","banglore","mumbai","goa"]

//console.log(city.length)

//method -   Gym()
//action  -  excercise
//return  -  muscles

city = ["pune","banglore","mumbai","goa"]


// method - push()
// action - adds the element at last
// return - new length of array

let q1 = city.push("nagpur")
console.log(q1)
console.log(city)

// method - unshift()
// action - adds the element at first 
// return - new length of array 

let q2 = city.unshift('wardha')
console.log(q2)
console.log(city)

// pop()
// action - removes the last element
// return - return  the same element

let q3 = city.pop()
console.log(q3)
console.log(city)


// shift()
let q4 = city.shift()
console.log(q4)
console.log(city)

// includes()
//action - search for element
//if element found - return true else false

let q5 = city.includes("Mumbai")
let q6 = city.includes("mumbai")
console.log(q5)
console.log(q6)
console.log(city)

let q7 = city.reverse()
console.log(city)
console.log(q7)






























