// loops 

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for loop and while


// for(intialization ; conditionCheck ; increment/decrement){
//    // statments 
// }

// print 1 to 5

for (let i = 1; i <= 5; i++) { // 2 // 3 // 4 // 5 // 6
    console.log(i)
}

// 1 <= 5  ----- 1
// 2 <= 5  ----  2
// 3 <= 5  ----  3
// 4 <= 5  ----  4
// 5 <= 5  ----  5


for (let i = 1; i <= 5; i++) { // 2 // 3 // 4 // 5 // 6
    console.log('hello')
}

// 1 <= 5 --- 'hello'
// 2 <= 5 --- 'hello'
// 3 <= 5 --- 'hello'
// 4 <= 5 --- 'hello'
// 5 <= 5 --- 'hello'
// 6 <= 5  -- loop exist

//print  0 to 3

for (let i = 0; i <= 3; i++) { //1  // 2 // 3 // 4
    console.log(i) // 0  // 1  // 2 // 3
}

// print 5 to 1
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5  // 4  //3 // 2 // 1
}

// print table of 2

for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 // -------- 22
    console.log(i) // 2 // 4 // 6 ------- 20
}

// print table of 3 in reverse
for(let i = 30 ; i >= 3 ; i = i -3){
    console.log(i)
}

// break statement with for 
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if( i == 3){
        break
    }
    console.log(i) // 1 // 2
}


for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    console.log(i)  // 1 // 2 // 3
    if( i == 3){
        break
    }

}

for(let i = 5 ; i >= 1 ; i--){   // 4 // 3
    console.log(i)   // 5 // 4 // 3
    if( i == 3){
        break
    }

}




