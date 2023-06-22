// js ---- object 
// object -- properties and method

let firstName = "chinmay"
let q1 = firstName.toUpperCase()
console.log(q1)

let lastName = "DESHPANDE"
let q2 = lastName.toLowerCase()
console.log(q2)

let middleName = "shirish"
// substring
let q3 = middleName.includes('s')
console.log(q3)

// character
let q4 = middleName.includes('he')
console.log(q4)


let fruits = "apple"
// 0  1  2  3  4
// a  p  p  l  e
let q5 = fruits.indexOf('a')
let q6 = fruits.indexOf('A')
console.log(q5)
console.log(q6)

// toUpperCase() , toLowerCase() , includes() , indexOf()


//trim()  // string // removes heading traling space

let city = " goa "
console.log(city.length)
let q7 = city.trim()
console.log(q7.length)

//trimStart() // string // remove heading space

let city2 = " goa "
console.log(city2.length)
let q8 = city.trimStart()
console.log(q8.length)



//trimEnd() // string // remove traling space
let city3 = "goa "
console.log(city3.length)
let q9 = city3.trimEnd()
console.log(q9.length)

let city4 = "nagpur";
let q10 = city4.startsWith('nag')
let q11 = city4.startsWith('n')
console.log(q10)
console.log(q11)


let city5 = "I am learning javascript"
let q12 = city5.replace('javascript',"python")
console.log(q12)
console.log(city5)


// slice()

let city6   =  "chandrapur"

// 0    1    2    3    4    5   6   7   8    9 
// c    h    a    n    d    r   a   p   u    r
// -10  -9   -8   -7   -6   -5  -4  -3   -2   -1
//city6.slice(startIndex, endIndex)

let q111 = city6.slice(3)
console.log(q111)
console.log(city6.slice(2,9))
console.log(city6.slice(3,-2))
console.log(city6.slice(-10,8))
console.log(city6.slice(-10,-3))
console.log(city6.slice(-3))
console.log(city6.slice(-1,-3))

// split()
let info =  ["chinmay","deshpande",7709192441]
let q222 = info.join('-')
console.log(q222)

let q333 =  q222.split('-')
console.log(q333)

// chartAt()

let  namey = "chinmay"
// 0 1 2 3 4 5 6
// c h i n m a y
let q444 = namey.charAt(2)
console.log(q444)

// substring()

let vegetable = "cauliflower"
//  0   1  2  3  4   5  6  7  8  9  10
//  c   a  u  l  i   f  l  o  w  e  r
let vegetableA =  vegetable.substring(2,5)
console.log(vegetableA)








