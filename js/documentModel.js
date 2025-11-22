

// document object model

// it allows us to -  
// access html elements 
// it can change the styles of html elemnts
// add functionality to html elemnts


// getElementById
// getElementByTagName
// getElementClassName


// querySelector --> (id, class, tag)
// querySelectorAll



const myButton = document.getElementById("my-button")
const myTagElement = document.getElementsByTagName("button")
const myTagClass = document.getElementsByClassName("button")


const handleClick = () => {
    myButton.innerHTML = "New button";
    myButton.style.background = "gold"
}

myButton.addEventListener("click", handleClick);

// myButton.addEventListener("click", function(){
//     console.log("hello")
// })



// addEventListener




// console.log("inner html", myButton.innerHTML)
// console.log('inner text', myButton.innerText)

// console.log()


// console.log("classs element", myTagClass[0] )

// console.log('tag element', myTagElement[0])

// console.log("id", myButton)

// # id, . class




const queryID = document.querySelectorAll("#my-button")


// console.log(document.querySelectorAll("p"))

// console.log(queryID[0], queryID[1])
