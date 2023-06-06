// map() , filter(), reduce(), forEach()
// find() , findIndex() , every() , some()


// program 1
//                 0     1   2    3
let birthYears = [1989, 1990, 1991, 1992]
let calAge = []
//[34,33,32,31]


for (let i = 0; i < birthYears.length; i++) {
    //    console.log(i)
    //    console.log(birthYears[i])
    //    console.log(2023 -birthYears[i])
    let x = 2023 - birthYears[i]
    calAge.push(x)
}
console.log(calAge)

// program 2
//           0  1   2  3 4  5  6
let marks = [22, 33, 44, 55, 22, 33, 66]
let above40 = []
// [44,55,66]
for (let i = 0; i < marks.length; i++) {
    //console.log(i)
    //console.log(marks[i])
    if (marks[i] > 40) {
        // console.log(marks[i])
        above40.push(marks[i])
    }
}
console.log(above40)


// program 3
//         0  1   2
let mks = [11,22,33]  // 66
let sum = 0

for(let i = 0 ; i < mks.length ; i++){
    //console.log(i)
    //console.log(mks[i])
    sum = sum + mks[i]
    //     0  +   11   =====> 11
    //     11 +   22   =====> 33
    //     33 +   33   =====> 66
}
console.log(sum)

// program 4

let cities = ["pune","nagpur","wardha","nashik"]
for(let i = 0 ; i < cities.length ; i++){
   // console.log(i)
   console.log("welcome "+cities[i])
}




