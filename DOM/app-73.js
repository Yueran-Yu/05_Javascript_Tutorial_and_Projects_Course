// nodeValue
// textContent

const item = document.getElementById('special1');
const value = item.firstChild.nodeValue
const easyValue = item.textContent
console.log(value)
console.log(easyValue)

// console.log(item.childNodes)

// getAttribute();
// setAttribute();
const first = document.querySelector('.first')
const classValue = first.getAttribute('id')
console.log(classValue)

const link = document.getElementById('link')
const showLink = link.getAttribute('href')
console.log(showLink)


const last = link.nextElementSibling
last.setAttribute('class', 'first')
last.textContent = 'I also have a class of first'
console.log(last)

const links = document.querySelectorAll('.first')
console.log(links)

// 75 className, classList
const first1 = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const classValue1 = first.className
console.log(classValue1)

second.className = 'colors'
second.classList.add('text')
third.classList.add('colors', 'text')
third.classList.remove('text')
const result75 = third.classList.contains('colors')
console.log(result75)

//76 createElement createTextNode appendChild
const result76 = document.querySelector('#result')
const first76 = document.querySelector('.red')

// create empty element
const bodyDiv = document.createElement('div')
const text = document.createTextNode('a simple body div')
bodyDiv.appendChild(text)
    // document.body.appendChild(bodyDiv)

const heading76 = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading76.appendChild(headingText)
heading76.classList.add('blue')
result76.appendChild(heading76)


document.body.insertBefore(bodyDiv, result76)
result76.insertBefore(heading76, first76)
const smallHeading = document.createElement('h4')
const smallText = document.createTextNode('this is a small heading text')
smallHeading.classList.add('red')
smallHeading.appendChild(smallText)
document.body.replaceChild(smallHeading, bodyDiv)

console.log(result76.children)

// 79 prepend innerText
const heading79 = document.createElement('h2')
heading79.innerText = `I am a dynamic heading`;
document.body.prepend(heading79)