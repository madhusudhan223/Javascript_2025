







// const myString = `hello${myother}`
// console.log(`hello${myother}`)
// console.log("hello${myother}")

const fetchData = () => {
  
    const options = {
        method: "GET"
    }

    fetch("https://jsonplaceholder.typicodcxvdfe.com/todos", options)
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(err=> console.log(err))
}

fetchData()



// fetch("//", {})


// crud operations


// create --> post
// read ---> get // default
// update --> update
// delete --> delete


// --> get, post, update, delete


// it internally use promise


// make a network request



// api -> application programming interface


// json 



// api endpoint  ---> url 


//  frontend --> backend