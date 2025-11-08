


// objects
// arrays
// functions
// strings


// prototype ---> parent 

// 

// in js everything is object -->

// null super parent in js


// array --> Array --> Object --> null

// arr.__proto__.__proto__.__proto__

// function -> Function -> Object --> null

// myFunction.__proto__.__proto__.__proto__

// obj -> Object --> null

const obj = {};
obj.__proto__


// js object
const circle = {
    radius: 20,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: function(){
        console.log("draw")
    }
}


// you cannot modify existing properties -> you cannot add new property and you cannot remove the existing property.

// Object.freeze(circle);

// circle.radius = 30;

// circle.color = "black";
// // circle['color'] = "black"



// delete circle.location;

// console.log(circle)


// seal --> you cannot add new property and you cannot remove the existing property. you can modify the existing property


// Object.seal(circle);

// circle.color = "yellow";
// delete circle.radius

// circle.radius = 30;

// console.log(circle)



// Object.keys()

// json --> keys will be string format in json

// const circleJson = {
//     "radius": 20,
//     "location": {
//         x: 1,
//         y: 2
//     },
//     "isVisible": true,
//     "draw": function () {
//         console.log("draw")
//     }
// }

// circleJson.
// circle.






// js object , json

// json --> java script object notation



// Object.

// Object.keys()
// const name = '';

// console.log(circle.hasOwnProperty("name"))

// freeze
// seal 





// // if("draw" in circle){
// //     console.log("found the property")
// // }


// object methods

// in --> 

// for in --> objects
// for of -> arrays

// const keys = Object.keys(circle);
// const values = Object.values(circle);

// console.log(Object.values(circle));

// console.log(Object.entries(circle));



// 

// for (let item of Object.keys(circle)){
//      console.log(item == "isVisble"){

//      }
// }


// 

// factory functions --> camel case --> oneTwoThree


function createCircle(radius, isVisible){
    return {
        radius: radius,
        location: {
            x: 1,
            y: 2
        },
        isVisible: isVisible,
        draw: function () {
            console.log("draw")
        }
    }
}

// constructor functions --> Pascal case

// {} this , return this

function CreateCircle(radius, isVisible) {
  this.radius = radius;
  this.isVisible = isVisible;
  this.location = {
    x: 1,
    y: 2,
  },
  this.draw = function () {
      console.log("draw");
    };
    // return this
}

const circle1 = createCircle(10, true);
// const circle2 = createCircle(20, true);
// const circle3 = createCircle(30, false);
// console.log(circle1, circle2, circle3)

// const this = {};
// this.radius = 20;


// {}, this ==> {}, return this


const constructorCircle = new CreateCircle(40, true)

// console.log(constructorCircle);



// // constructor function


circle.test = '440'; // add property to object
delete circle.location // delete property from object


// let --> you can modify and you can reasssign objects
// const --> you can only modify -> you cannot reassign


// circle = {name:'hello'}

// console.log(circle)




// es6 features

// destructuring in objects
// const circleRadius = circle.radius
//

// const{radius:circleRadius, isVisible, location, draw} = circle;

// rest property ---> rest, spread ---> ...

// rest operator --->  objects, arrays
// spread operator --> functions parmeters


// var 

// let, const


// let --> if you want to want 

// const ---> 

// const 


// let


// let{radius, ...restObjects} = circle;

// console.log(radius);
// console.log(restObjects.isVisible)









// const radius = circle.radius

// const isVisible = circle.isVisible
// const location = circle.location
// const draw = circle.draw



    //   const{radius, location, isVisible, draw} = circle;

    //   console.log(radius)

// circle.radius
// circle.location
// circle.isVisible
// circle.draw






if (typeof circle.draw == "function"){
    // circle.draw()
}





// arrow function 

// const myArrowfunction = () => {
//     console.log('my arrow function')
// }



// anonymous functions --> function without name

// anonymous can be used when you are storing it in a varible


//  function myFunc() {
//     console.log("draw")
// }

// myFunc()

// myFunc();



