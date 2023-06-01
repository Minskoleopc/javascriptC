// array 
let x = 10
console.log(x)

//            0       1          2         3
let city = ["pune","nagpur","banglore","kolkata"]
console.log(city)
console.log(city[0])
console.log(city[2])


for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) 
    console.log(city[i])
    // i - 0 
    // i - 1
    // i - 2
    // i - 3
}

// array stores the value by index
// array is object 
// array will properties and method

// length
//               0      1      2       3       4
let vehicle = ['audi',"bmw","maruti","tata","skoda"]
let a = vehicle.length
console.log(a)
console.log(a.length-1)

for(let i = 0 ; i  < vehicle.length ; i++){
    //console.log(i)
    console.log(vehicle[i])
}

for(let i = vehicle.length-1 ; i >= 0 ; i-- ){
    //console.log(i)
    console.log(vehicle[i])
}

vehicle = ['audi',"bmw","maruti","tata","skoda"]
let q1 = vehicle.push("toyato")
console.log(q1)
console.log(vehicle)

let q2 = vehicle.unshift('rr')
console.log(q2)
console.log(vehicle)

let q3 = vehicle.pop()
console.log(q3)
console.log(vehicle)

let q4 = vehicle.shift()
console.log(q4)
console.log(vehicle)


