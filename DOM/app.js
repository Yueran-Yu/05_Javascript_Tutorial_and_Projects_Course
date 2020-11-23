// window object = browser API
// document
// console.dir

// alert('hello');
// console.log(window);
// console.dir(document);
const h1 = document.getElementById('title');
// h1.style.color = 'red';
const btn = document.getElementById('btn');
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';

// 66 get elements by tag name
// getElementsByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods
let headings = document.getElementsByTagName('h2');
console.log(headings);
headings[0].style.color = 'red';

const items = document.getElementsByTagName('li');
console.log(items)
    // it is not an array since it is array like object
    // we cannot use our favorite for each method
    // items.forEach(function(item) { console.log(item) });

const betterItems = [...items]
betterItems.forEach(function(item) { console.log(item) });
items[2].style.color = 'green';

// 67 get elements by class name
const listItems = document.getElementsByClassName('special')
console.log(listItems)
listItems[1].style.color = 'blue'

// 68 querySelector('any css') - select single
// querySelectorAll('any css') - selects all
const result = document.querySelector('#result')
result.style.backgroundColor = 'lightblue'
const it = document.querySelectorAll('.special');
const lastItem = document.querySelector('li:last-child')
console.log(lastItem)
it.forEach(i => i.style.color = 'brown')

//69 select the element or group of elements that we want
// childNodes - returns all childNodes including whitespace which is treated as a text node
// children, firstChild, lastChild
const result1 = document.querySelector('#result')
const allChildren = result1.childNodes;
console.log(allChildren)
const childrenList = result1.children;
console.log(childrenList)
console.log(result1.firstChild)
console.log(result1.lastChild)