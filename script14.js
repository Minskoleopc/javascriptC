// let names = ["chinmay","sarika","poorva","komal"]
// let q1 = names.reverse()
// console.log(q1)

// // program 2
// let cities = ["banglore", "kolkalta","nashik","chandrapur"]
// let q2 =cities.sort()
// console.log(q2)

// // program 3
// // flat()
// //                0            1          2
// //              0  1   2    0  1  2   0  1  2 
// let numbers = [[11,22,33],[44,55,66],[77,88,99]]
// console.log(numbers[1][2])
// let q3 = numbers.flat()
// console.log(q3)

// // program 4

// let a = [11,22,33]
// let b = [44,55,66]
// let q4 = a.concat(b)
// let q5 = b.concat(a)
// console.log(q4)
// console.log(q5)

// // program 5
// let info2 = ["chinmay","deshpande",7709192441]
// let q6 = info2.join('-') // "chinmay-deshpande-7709192441"
// let q7 = info2.join('@')
// let q8 = info2.join(' ')
// console.log(q6)
// console.log(q7)
// console.log(q8)

// // program 6 
// //              0        1       2
// let fruits = ["apple","mango","banana"]
// let q9 = fruits.includes('Apple')
// console.log(q9)


// let q10 = fruits.indexOf('banana')
// let q11 = fruits.indexOf('Banana')
// console.log(q10)
// console.log(q11)

// let q12 = fruits.at(6)
// let q13  = fruits[5]
// console.log(q12)
// console.log(q13)

// // program 7
// //                   0         1        2         3
// let vegetables = ["cabbage","potato","tomato","brinjal"]
// // vegetables.pop()
// // vegetables.shift()
// //vegetables.splice(startingIndex,numberOfElementtoBeDeleted)

// //vegetables.splice(1,2)
// //vegetables.splice(1,1)

// vegetables.splice(2,2,"ladyfinger","carrot")
// console.log(vegetables)

// // program 8 (slice)


// // program 9 (fill)


// let mkrs  = [35,40,45,77,88,25,30,15]

// // [40,45,50,82,93,30,35,20]

// // [40,45,50,82,93,35]

// let totalMrksofPassStudent = mkrs.map(function(el){
//     return el + 5
// }).filter(function(el,index,arr){
//     return el >= 35
// }).reduce(function(acc,el,index ,arr){
//     return  acc + el
// },0)

// console.log(totalMrksofPassStudent)


// // program 10

// //               0       1         2        3           4        5
// let cities2 = ["pune","mumbai","banglore","kolkata","chennai","nagpur"]
// //               -6      -5      -4         -3          -2          -1
// //cities2.slice(startIndex,EndIndex (not inclusive))
// let q111 = cities2.slice(1)
// console.log(q111)
// console.log(cities2.slice(1,5))
// console.log(cities2.slice(-6,5))
// console.log(cities2.slice(-1))
// console.log(cities2.slice(-5,-1))
// console.log(cities2.slice(1,-1))
// console.log(cities2.slice(-1,-2))

// fill 
//              0  1  2  3  4  5  6  7  8
let numbersb = [11,22,33,44,55,66,77,88,99]
//numbersb.fill("value",startindex,endIndex)
let q122 = numbersb.fill("chinmay",2)
let q123 = numbersb.fill("chinmay",2,numbersb.length-1)
console.log(q123)

let h = [22,33,44,55]
h.reverse()
console.log(h)




