


function fetchData(){

    const fetchBtn = document.getElementById("btn");

    const handleFetch = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();

        console.log(response)

    }

    fetchBtn.addEventListener("click", handleFetch)

}

fetchData()