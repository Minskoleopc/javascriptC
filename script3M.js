// type 

//Introvert   // Extrovert
//Calm         // more social
//less social  // loud
//less outing  // more outing

// Human 
// Property - age weight , height , color ,gender
// Method  - walk() , talk()

// Vehicle
// Property - color , type , modelNo, regNo
// Method - start() , stop()

//Bank 
//Property - accNo,  IFSC code , bal , branchName
//Method - withdrawl() , deposit()


let x = 10
console.log(x) // 10
console.log(typeof x) // number
// 10 , -10 , 0 , 90.9 , -89.99

let y = true
console.log(y)
console.log(typeof y)
// true or false

let z = "chinmay"
console.log(z)
console.log(typeof z)
// " " , "A", "1", "#","!@" ,"Q123", "123@#asd"


// comparison

// entity < entity =======> boolean
console.log(typeof '10')// string 
console.log(typeof 10) // number
// values are same but type are different

// < , > , <= , >= 
// != , ==     ======> value
// === , !==   ======> value and type  


console.log(6 > 3)
console.log(6 < 3)
console.log(8 == 8)
console.log(8 == '8')
console.log(8 === '8')
console.log(8 === 8)
console.log(8 != '8')
console.log(8 !== '8')
console.log(8 !== 8)
console.log(8 != 8)
console.log(7 >= 3)
console.log(7 <= 3)
console.log(7 >= 7)
console.log(7 <= 7)


// Logical operator

// &&

//true  &&  true =====> true
//true  &&  false =====> false
//false  &&  true =====> false
//false  &&  false =====> false


console.log(7 == 7 && 8 == 8) // true
console.log(7 != 7 && 8 == 8) // fasle
console.log(9 == 9 && 8 != 8) // false
console.log(8 != 8 && 9 != 9) // false


// OR
//true  ||  true =====> true
//true  || false =====> true
//flase  ||  true =====> true
//false  ||  false =====> false



console.log(7 == 7 || 8 == 8) // true
console.log(7 != 7 || 8 == 8) // true
console.log(9 == 9 || 8 != 8) // true
console.log(8 != 8 || 9 != 9) // false




// !
// true  false
// false true

console.log(!(7 == 7))
console.log(!(7 != 7))