const endDateis = "17 February 2023 9:00 AM";
document.getElementById("endDate").innerHTML = endDateis;
const input = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDateis) ; // changes the date in milliseconds
    const now = new Date()
    // console.log(end,now)
    const diff = (end -now)/1000;
    // console.log(diff/ 86400)

    input[0].value = Math.floor(diff/86400)
    console.log(input[0].value)
    input[1].value = Math.floor((diff/3600)%60)
    console.log(input[1].value)

    input[2].value = Math.floor((diff/60)%60)
    input[3].value = Math.floor((diff)%60)
}

window.setInterval(clock,1000)
// clock()



// 1 day = 24 hrs
// 1 hr = 60 min 
// 60 min = 3600sec

