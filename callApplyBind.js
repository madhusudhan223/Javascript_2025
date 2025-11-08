

const circle = {
    radius: 20,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: function () {
        console.log("draw")
    }
}


// this --> global
// this --> circle

function getRadius(name, color){
    console.log(this.radius, name, color)
}

// getRadius("black")

// apply method --> takes method parameters in array format

// // getRadius.call(circle, "Round circle", "black", "" )

// getRadius.apply(circle, ["Round circle", "black", ""])


// bind  ---> always returns a new function

// const bindedFunction = getRadius.bind(circle, "Round circle", "black")
// bindedFunction()

// const bindedFunction = getRadius.bind(circle)
// bindedFunction("Round circle", "black")

// getRadius.bind(circle, "Round circle", "black")()

// getRadius.bind(circle)("Round circle", "black")


// call apply bind --> if you want a call a function with respect to particaular object reference


// getRadius.call(circle, "black")

// function is also a object ---> Function --> Object --> null




getRadius()





// this --> global object in node environment
// this --> window object in browser environment