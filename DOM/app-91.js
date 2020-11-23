// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
    // const heading = document.querySelector('.heading')
const sme = document.querySelector('.something')

function sayHello() {
    console.log('hello worot')
}

btn.addEventListener('click', function() {
    const element = document.createElement('h1')
    element.classList.add('heading')
    element.textContent = `I'm inside the container`
    container.appendChild(element)

})

// container.addEventListener('click', function(e) {
//     if (e.target.classList.contains('heading')) {
//         console.log('hello there')
//     }
// })

sme.addEventListener('click', function(e) {
    if (e.target.classList.contains('heading')) {
        console.log('hello there clicking the something div to test the bubbling from deep element to ourside element')
    }
})