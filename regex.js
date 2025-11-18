const regex = /^[a-zA-Z]+$/
const userInput = "abc123"

if (regex.test(userInput)){
    console.log("submit data")
} else {
    console.log("error")
}



// console.log("abc123".match(regex))