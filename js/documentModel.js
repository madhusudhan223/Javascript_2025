

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


// vannilla javascript



const myButton = document.getElementById("my-button")
const myTagElement = document.getElementsByTagName("button")
const myTagClass = document.getElementsByClassName("button")
const inputBox = document.getElementById("my-input");
const myBox = document.querySelector(".box");

const handleBoxClick = () => {
    myBox.classList.remove("box")
    myBox.classList.add("myclass")

    // toggle
// if class is there it will remove that class
// if class is not there it will add that class

     myBox.classList.toggle("dummy")
    // myBox.classList.toggle("dummy", true) it will only add the class
    // myBox.classList.toggle("dummy", false) it will only remove the class

}

myBox.addEventListener("click", handleBoxClick)
 
console.log(myBox)





const handleClick = (event) => {
    // console.log(event)
    // myButton.innerHTML = "Hide";
    console.log(myButton.innerHTML)
    if (myButton.innerHTML == "Show"){
        
        myButton.innerHTML = "Hide";
        // myButton
        const list = document.createElement("ul");
        list.setAttribute("id", "unordered-list");
        // list.removeAttribute("id");
        list.innerHTML = "<li>list element 1</li> <li>list element 2</li>"

        const myEmptyDiv = document.getElementById('my-list');

        myEmptyDiv.appendChild(list)
        // myEmptyDiv.style.visibility = "visible";

        // console.log(list)
        myButton.style.background = "gold"

    }else{
        myButton.innerHTML = "Show";
        const myEmptyDiv = document.getElementById('my-list');
        // myEmptyDiv.style.visibility = "hidden";
        const unorderedList = document.getElementById('unordered-list');
        // myEmptyDiv.replaceChild("<div>My div</div>", unorderedList)
        myEmptyDiv.removeChild(unorderedList)
        myButton.style.background = "aqua"
    }

}


// classList

// add, remove, toggle

const handleMouseOver = () => {
    myButton.style.background = "gold"
}

const handleMouseLeave = () => {
    myButton.style.background = "aqua"
}

const handleScroll = (event) => {
    // console.log(event)
    // console.log(window.scrollY)
    // console.log(scrollY)
    // window.
    // console.log("user scrolling")
    
}
const handleFocus = (event) => {

    inputBox.style.border = "2px solid gold"
    // console.log("focused")
 
}
const handleBlur = (event) => {
   
}

const handleChange = (event) => {


    // console.log("change event", event.target.value)

    // console.log(inputBox.value)

}

const handleInput = (event) => {

    // console.log(event.target.value)

}

const handleKeyDown = (event) => {
    console.log("key down", event.target.value)
}

const handleKeyUp = (event) => {
    console.log("key up", event.target.value)
}


myButton.addEventListener("click", handleClick);

 inputBox.addEventListener("focus", handleFocus)
// inputBox.addEventListener("blur", handleBlur)


inputBox.addEventListener("change", handleChange)

inputBox.addEventListener("input", handleInput)

// inputBox.addEventListener("keydown", handleKeyDown)

inputBox.addEventListener("keyup", handleKeyUp)



// focus --> as soon as user enters into input
// onBlur -->  as soon as user leaves the input

// change
// input
// keydown
// key up


// document.


myButton.addEventListener("mouseover", handleMouseOver);
myButton.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("scroll", handleScroll)

// con



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




