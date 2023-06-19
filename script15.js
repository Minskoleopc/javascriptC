let firstName = "chinmay"
let lastname = 'deshpande'
let middleName = `shirish`


console.log(firstName)
console.log(lastname)
console.log(middleName)


// program 2
// string contactination
let firstName1 = "chinmay"
let lastName2 = "deshpande"

// My firstName is chinmay and lastName is deshpande

console.log("My firstName is " + firstName1 + " and " + "lastname is " + lastName2)
console.log(`My firstName is ${firstName1} and lastName is ${lastName2}`)


// program 2
// number + number ====> number
// string + number ====> string 
// number + string ====> string 
// string + string ====> string 

let a = 10
let b = 20
let c = 'hello'

console.log(a + b)
console.log(a + c)
console.log(a + b + c)
// number + number + string
//       number + string   =====> string
console.log(c + a + b)
// string + number + number
// string  + number ===> string
console.log(c + a + c + b)

// loop 
let q1 = "chinmay"
// 0  1  2  3  4  5  6
// c  h  i  n  m  a  y
console.log(q1[0])
for (let i = 0; i < q1.length; i++) {
    // console.log(i)
    console.log(q1[i])
}

for (let i = q1.length - 1; i >= 0; i--) {
    //console.log(i)
    console.log(q1[i])
}



















