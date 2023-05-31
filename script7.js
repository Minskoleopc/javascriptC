// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }


// intialization 
// while(condition){

//statement
// increment / decrement
//}

// print  1 to 5 using while
let i1 = 1
while (i1 <= 5) {

    console.log(i1) // 1 // 2 // 3 // 4 // 5

    i1++; // 2 // 3 // 4 // 5 // 6
}

// print 'hello' 5 tyms 
let i2 = 1
while (i2 <= 5) {
    console.log('hello') // "hello" , "hello" , "hello" , "hello" , "hello"
    i2++ //2 // 3 // 4 // 5 // 6
}

// print 1 to 3

let i3 = 1
while (i3 <= 3) {
    console.log(i3)
    i3++
}

// print  5 to 1
let i4 = 5
while (i4 >= 1) {
    console.log(i4)
    i4--
}

// table of 2 
let i5 = 2
while (i5 <= 20) {
    console.log(i5) // 2//4 // 6 // 8 // 10 -----20
    i5 = i5 + 2 // 4 // 6 // 8 // 10 // 12 ------- 20  22
}
// table of 5 in reverse

let i6 = 50
while (i6 >= 5) {
    console.log(i6)
    i6 = i6 - 5
}

// break statement with while 

let i7 = 1
while (i7 <= 5) {
    if (i7 == 3) {
        break
    }
    console.log(i7) // 1 // 2
    i7++ //2 // 3
}

let i7a = 1

while (i7a <= 5) {

    console.log(i7a)  //1 // 2 // 3

    if (i7a == 3) {
        break
    }
    i7a++  // 2 // 3
}

let i8 = 5

while (i5 >= 1) {
    if (i8 == 2) {
        break
    }
    console.log(i8)
    i8--
}

let i9 = 1
while (i9 <= 5) {
    if(i9 == 3){
        i9 ++ // 4
        continue
    }
    console.log(i9)   // 1 // 2 // 4 // 5
    i9 ++   // 2 // 3 // 5 // 6
}