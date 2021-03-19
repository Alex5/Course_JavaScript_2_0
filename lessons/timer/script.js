const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((total / 1000) % 60),
        minutes = Math.floor((total / 1000 / 60) % 60),
        hours = Math.floor((total / (1000 * 60 * 60)) % 24),
        days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {total, seconds, minutes, hours, days}
}

const updateClock = () => {
    const amount = getTimeRemaining(deadline)
    console.log(amount)

    const clock = document.querySelector('#timer')

    const daysSpan = clock.querySelector('.days'),
        hoursSpan = clock.querySelector('.hours'),
        minutesSpan = clock.querySelector('.minutes'),
        secondsSpan = clock.querySelector('.seconds');

    daysSpan.innerHTML = amount.days
    hoursSpan.innerHTML = amount.hours
    minutesSpan.innerHTML = amount.minutes
    secondsSpan.innerHTML = amount.seconds

    if (amount.total <= 0) {
        clearInterval(timeInterval)
    }
}

const babyDatePicker = document.querySelector('#babyDate')
const clock = document.querySelector('#timer')

let today = new Date();
let dd = today.getDate() + 1;
let mm = today.getMonth() + 1; //January is 0!
const yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
babyDatePicker.setAttribute('min', today)
let deadline = ''

babyDatePicker.oninput = () => {
    deadline = babyDatePicker.value
    console.log(babyDatePicker.value)
    clock.style.display = 'block'
}

updateClock()

const timeInterval = setInterval(updateClock, 1000)

getTimeRemaining(deadline)

