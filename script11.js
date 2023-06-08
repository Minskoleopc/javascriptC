// program 1 
let birthYears = [1989, 1990, 1991, 1992]
let ages = []

for (let i = 0; i < birthYears.length; i++) {
    //console.log(i)
    //console.log(birthYears[i])
    let a = 2023 - birthYears[i]
    ages.push(a)
}
console.log(ages)

// program 2
//             0    1    2    3
birthYears = [1989, 1990, 1991, 1992]
let q1 = birthYears.map(function (el, index, arr) {
    return 2023 - el

})
console.log(q1)

// program 3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let q2 = numbers.map(function (el, index, arr) {
    return el * 2
})
console.log(q2)

// program 4

let marks = [11, 22, 33, 44, 55]
let above30 = []

for (let i = 0; i < marks.length; i++) {
    //console.log(marks[i])
    if (marks[i] > 30) {
        above30.push(marks[i])
    }
}
console.log(above30)


let q3 = marks.filter(function (el, index, arr) {
    return el > 30
})
console.log(q3)


// program 5

let a = [11, 22, 33]
let sum = 0
for (let i = 0; i < a.length; i++) {
    sum = sum + a[i]
    //         0  +  11  ====> 11
    //         11  +  22 ====> 33
    //         33  +  33 =====> 66

}
console.log(sum)
let q5 = a.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q5)
















