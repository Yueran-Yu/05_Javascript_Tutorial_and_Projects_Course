// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn')
const heading = document.querySelector('h2')


function changeColors() {
    let hasClass = heading.classList.contains('red')
    if (hasClass) {
        heading.classList.remove('red')
    } else {
        heading.classList.add('red')
    }
}
// btn.addEventListener('click', function() {
//     heading.classList.add('red')
// })
btn.addEventListener('click', changeColors)

//click
// mousedown , mouseup, mouseenter, mouseleave


// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behavior


const heading88 = document.querySelector('#l88')
const btn88 = document.querySelector('.btn.another')
console.log(btn88)
const link = document.getElementById('link')


heading88.addEventListener('click', function() {
    heading88.classList.add('blue')
    console.log(event.currentTarget)
    console.log(this)
})


btn88.addEventListener('click', function() {
    console.log(event.currentTarget)
    event.currentTarget.classList.add('blue')
})

function someFunc(e) {
    e.preventDefault();
}
link.addEventListener('click', someFunc)

//89