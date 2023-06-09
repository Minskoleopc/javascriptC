// map() , filter() , reduce() , forEach()
// find() , findIndex() , some() , every()

// program 1
let birthYears = [1989,1990,1991,1992]
let ages = birthYears.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(ages)


// program 2
let numbers = [1,2,3,4,5,6,7,8,9,10]
let tableOfThree  = numbers.map(function(el,index,arr){
    return  el * 3
})
console.log(tableOfThree)

// program 3

let marks = [33,44,55,66,33,44,56]
let q2 = marks.filter(function(el,index,arr){
    return el > 40
})
console.log(q2)

// program 4
let numbersB = [11,22,33]
let q3  = numbersB.reduce(function(acc,el,index,arr){
    return acc + el  // acc ==> 66
},0)
console.log(q3)



