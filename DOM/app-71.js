// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first')
    // const second = (first.nextSibling.nextSibling.style.color = 'purple')

// this way, you don't have to worry about the whitespace
first.nextElementSibling.style.color = 'red'
console.log(first.nextElementSibling)

// console.log(second)

const last = document.querySelector('#last')
    // const third = last.previousSibling.previousSibling.style.color = 'orange'
    // console.log(third)