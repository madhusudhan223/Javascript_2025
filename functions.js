// function myFunc() {
//     console.log("myFunc")
// }


// myFunc()


// const myHelper = function() {
//     console.log("myHelper")
// }

// myHelper()

// printNumbers()


// function printNumbers(){

// for (var i = 0; i < 5; i++) {
//     console.log("inside loop", i)
// }
//     console.log("outside loop", i)

// }

// es6  arrow functions

// let x= 20;
// let x = {value: 10}

// () => {

// }


const printNumbers = (value) => {
    for (var i = 0; i < 5; i++) {
        console.log("inside loop", i, value)
    }
}


// () --> when there are no parmaeters and if more than one parameter
// arrow --> this keyword will not be bind to current object it has its own binding

// printNumbers("my number")

// this --> referes to current


const circle = {
    radius: 20,
    location: {
        x: 1,
        y: 2,
        getX: () => {
            console.log(this)
        }
    },
    isVisible: true,
    draw: () => {
        console.log(this.radius)
    }
}


// function and 
// method -- will be declared inside of objects
 

// window/global

circle.location.getX();



// es6 

// spread, rest
// destructing
//arrow fucnt
// let var
// async awai




// for (var i = 0; i < 5; i++) {
//     console.log("inside loop", i)
// }



// higher order fucntions



// callback --> printHello-->  a function passed into another function as argument

// greet function --> higher order function -> any function which takes one or functions as arguments




function printHello() {
console.log("hello world")
}

// const printHello = () => {

// }

function greet(printMsg){
    console.log('greet')
    printMsg()
}

greet(printHello)





