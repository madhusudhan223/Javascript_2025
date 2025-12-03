







// const myString = `hello${myother}`
// console.log(`hello${myother}`)
// console.log("hello${myother}")

const fetchDataPromise = () => {
  
    const options = {
        method: "GET",
        headers:{},
        body:JSON.stringify({})
    }

    fetch("https://jsonplaceholder.typicode.com/todos", options)
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(err=> console.log(err))
}




// fetchData()

const fetchData = async () => {
    const data =  await fetch("https://jsonplaceholder.typicode.com/todos");
    const response =  await data.json();
    return response
}

fetchData().then(res => console.log(res))





// async function return promise -> we should be careful while calling async function




// query params
// appid and id are query params

// `https://jsonplaceholder.typicode.com/todos?appid=mobile&id=test`



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