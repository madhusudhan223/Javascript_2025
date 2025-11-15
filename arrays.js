
// arrays
// objects
// function


const arr = [2, 20, 33, 9, 8];
const arrName = ['ram', 'anand', 'suresh'];

// console.log(arrName.join(''))


const name = "suresh" ;

console.log(name.split("").reverse().join(""))






// join method --> it converts array into string

// console.log(arrName.join(" "))
// const arrName = ['ram', 'anand', 'suresh'];
// console.log(arrName.reverse())

// some, every

// some ---> one of the element should satisfy the condition
// every --> all the elemnts should satisfy the condition

console.log(arr.some(item => item > 40))  /// false

console.log(arr.every(item => item > 10)) // false

console.log(arr.every(item => item > 1)) // true

// arr.map().filter().reverse


// console.log(arrName.sort())
// console.log(arrName)

// console.log(arr.sort((a,b)=> {
//     if(a>b){
//         return 1
//     }else if(a<b){
//         return -1
//     }else{
//         return 0
//     }
// }))


// console.log(arr.sort((a, b) => a - b))
console.log(arr.sort((a, b) => b - a))
// 


// ascending --> increasing

// descending -> decreasing 


// a > b return 1
// a==b return 0
// a < b return -1




// for(let i=0 ; i < arr.length, i++){
//     sum+=arr[i]
// }

// const sum = arr.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue)
//     return accumulator + currentValue
// }, 20)

// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(sum)

// 0, 1 --> 1
// 1, 2 --> 3
// 3, 3 --> 


// accumulator --> the value returned from the previous callback 


// if you dont mention initial value it picks first element as intial value

// first(callback, intialvalue)


// (item, index, arrObj) => {

// }



// console.log(arr.filter(item => item % 2 == 0));
// console.log(arr)

// console.log(arr.length)

const arrObj = [{name: "raj", id: 223}, {name:'ram', id: 200}, {name: 'ramesh', id: 100}]

// console.log(arrObj.filter(item => item.id > 100))

// console.log(arr.indexOf(10))

// console.log(arrObj.findIndex((item)=> item.name == "ramesh" ))

// console.log(Array.from("abc"));


// 

const obj = {name: 'raj', id : 223, phone:"95605i60i"} 

obj.id = 223 *2 

const newObj = { ...obj, id: 223 * 2 }

// console.log(newObj)

// console.log(arrObj.map((item) => {
//     return {...item, id: item.id * 2}
// }));



//
//  

// filter









// findIndex

//

// arr.splice(5,0,6,7, 8 )

// arr.splice(2,2)

// arr.splice(0, 3)

// arr.splice(1, 2);

// const arrowFunction = (element) => {
//     return element == 3
// }

// const arrowFunction1 = (element, index, arr) => {
//     console.log(element, index, arr )
//     return element == 3
// }

const arrowFunction = (element) => element == 3

// find a id which grater than 100
// console.log(arr.find(item => item > 3))

// console.log(arrObj.find(item => item.id > 100))

// console.log(arrObj.find(item => item.name == "ramesh"))

// console.log(arrObj.find(arrowFunction1))


// foreach 

// arrObj.forEach((item, index, arr)=> {
//     console.log()

// })

// 

const doubleArray = arr.map(item => item * 2)

// console.log(doubleArray, arr)


// user details, produtdetail --> arrays --> map 


// console.log(arr.forEach(item => console.log(item * 2)))





// arr.find()

// console.log(arr)


// map, filter, reduce
// foreach, sort, find

// 6, 7


// start ---> 
// delete count 
// which elements you need to add


// const strArray = ["hello", "raj", "ram"];

// arr.push(4) // it adds the elemnt to the array at the end
// arr.unshift(10) // it adds the element to the array at the starting
// arr.pop() // it removes the elment at the end of the array
// arr.shift() // it removes the elment at starting of the array

// const arryObjects = [
//   {
//     x: 1,
//     y: { z: 40 },
//   }
// ];
// //

// const copyArray = [...arryObjects]

// copyArray[0].y.z = 60


// console.log(arr)

// const copyArray = [...arr]
// const copyArrrayFrom = Array.from(arr)
// const copyArrrayslice = arr.slice()


// splice --> it can add the element / it can remove the elemnt at any position

// const sliceCopy = arr.slice(-2);
// console.log(sliceCopy)


// slice

// console.log(arr.slice(2, 4)) // 2,3 
// console.log(arr.slice(2, 5)) // 2, 3, 4

// console.log(copyArray)


// method ---> what is the input it takes and what it returns









// ecommerce 
// banking
// insurance
// medical








