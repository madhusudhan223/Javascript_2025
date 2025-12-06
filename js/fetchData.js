


function fetchData(){

    const fetchBtn = document.getElementById("btn");
    // const table = document.getElementById('my-table');
    const itemList = document.getElementById("item-list")

    const handleFetch = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();

        // const htmlContent = response.map((item) => `<div>${item.username}</div>`).join("")

        // itemList.innerHTML = htmlContent

        response.forEach(element => {
            const myDiv = document.createElement("tr");
            myDiv.innerText = element.username;
            itemList.appendChild(myDiv)
        });

        // array to string -->
        console.log(htmlContent)
        console.log(response)

    }

    fetchBtn.addEventListener("click", handleFetch)

}

fetchData()