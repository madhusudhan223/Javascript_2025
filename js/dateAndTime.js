


function updateDateAndTime(){
    const dateObject = new Date();

    const localeTime = dateObject.toLocaleTimeString() // 08:58:03

    const localeDate = dateObject.toLocaleDateString() // 05/12/2025

    console.log(localeDate)



    // console.log(localeTime)

    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();


    hours = (hours < 10 ? "0" : "") + hours
    minutes = (minutes < 10 ? "0" : "") + minutes
    seconds = (seconds < 10 ? "0" : "") + seconds

    const timeString = `${hours}:${minutes}:${seconds}`;

    const time = document.getElementById("time");

    time.innerText = timeString;

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; 
    const day = dateObject.getDay()

    const dateString = `${day}/${month}/${year}`;
    const dateEle = document.getElementById("date");

    dateEle.innerText = dateString



    // console.log('year', year, month, day)

  
}

updateDateAndTime()

setInterval(updateDateAndTime, 1000)

// setTimeout(()=>{}, 5000)

// 5000 msec -- 5 sec


// settimeout // setinterval




