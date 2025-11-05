


// objects
// arrays
// functions
// strings


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

console.log(constructorCircle);



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



