// primitives --> copies the value

// let x = 10;


// let y = x;

// x=20;

// console.log(x, y) // x and y are independent


// reference --> copies the reference (address)


// let x = {value: 10}

// let y = x ; // address copied  x, y ---> {value:10}

// x.value = 20

// console.log(x, y)




// shallow copy, deep copy --> 




// it combines both objects

// const obj1 = {value:10}
// const obj2 = {value: 20}

// used to combine two objects
// console.log(Object.assign(obj1, obj2));


// create a copy 3 ways --> 2 shallow copies --> 1 deep copy

// const obj = {value: 10, number : 40}

const obj = {
  name: "raj",
  phoneno: 95696569,
  address: {
    houseNo: "1-28",
  },
};

// const copyObj = Object.assign({}, obj); // object copy --> shallow copy
// const copyObj  = {...obj} // shallow copy

const copyObj =  JSON.parse(JSON.stringify(obj)) // deep copy

// 

copyObj.address.houseNo = "111"

console.log(obj)
console.log(copyObj)



// to make a deep copy

// stringify -- it converts your js object into json
// parse --> it converts json to js object

// const json = { "name": "raj", "phoneno": 95696569, "address": { "houseNo": "111" } }

// console.log("parse", JSON.parse(json))

// console.log("stringify", JSON.stringify(obj))







// shallow --> when you change the copied object - original object will get affected 
//deep-- > when you change the copied object - original object will not get affected 

// const copyObj = {...obj} // shallow copy









// simpler es6  spread operator ...   , rest operator ...

// console.log(copyObj)




// const obj = {x:10, x: 20}

// console.log(obj)



// obj1 = {...obj1 , ...obj2}

// 
