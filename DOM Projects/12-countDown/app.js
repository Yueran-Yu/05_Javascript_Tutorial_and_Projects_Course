const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date()
let tempaYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2020, 5, 17, 18, 32, 0)
let futureDate = new Date(tempaYear, tempMonth, tempDay + 10, 18, 32, 0)

// console.log(futureDate)
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()
const secs = futureDate.getSeconds()
let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${mins}am`

// future time in ms
const futureTime = futureDate.getTime()
    // console.log(futureTime)

function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today;
    // console.log(t)
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
        // calculate all values
    let days = Math.floor(t / oneDay)
    let hours = Math.floor((t % oneDay) / oneHour)
    let mins = Math.floor((t % oneHour) / oneMinute)
    let secs = Math.floor((t % oneMinute) / 1000)

    // set values array;
    const values = [days, hours, mins, secs]
    items.forEach(function(item, index) {
        // console.log(item.textContent + "---" + index)
        item.textContent = formatTime(values[index])
    })

    function formatTime(item) {
        if (item < 10) {
            return item = `0${item}`
        } else {
            return item
        }
    }

    if (t < 0) {
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired.</h4>`
    }
}


let countdown = setInterval(getRemainingTime, 1000)
    // getRemainingTime()