

// local storage 
// session storage
// cookies --> very small piece of user information

// key , valeu



// string ==> arra[object]

// JSON.stringify
// JSON.parse

localStorage.setItem("name", "raj")
localStorage.setItem("phoneno", "769045345")

console.log(localStorage.getItem("name"))

localStorage.removeItem("name")


// to remove all keys
// localStorage.clear()


// sessionStore

sessionStorage.setItem("name", "ram")
sessionStorage.getItem("name")
sessionStorage.removeItem("name")
sessionStorage.clear()
// new Date(2026, 0, 1).toUTCString()

document.cookie = "name=raj;expires=Fri, 31 Dec 9999 23:59:59 GMT;sameSite=none"
document.cookie = "phoneno=769045345"




