// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

// localStorage.setItem('name', 'john')
// sessionStorage.setItem('name', 'john')

localStorage.setItem('name', 'john')
localStorage.setItem('friend', 'peter')
const name = localStorage.getItem('name')
    // console.log(name)
localStorage.removeItem('name')
const another = localStorage.getItem('name')
    // console.log(another)
localStorage.clear()

// 94 JSON.stringify(), JSON.parse()
const friends = ['john', 'peter', 'bob']
localStorage.setItem('friends', JSON.stringify(friends))
const values = JSON.parse(localStorage.getItem('friends'))
console.log(values[2])

let fruits;
if (localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'))
} else {
    fruits = []
}

console.log(fruits)
    // fruits.push('apple')
fruits.push('orange')

localStorage.setItem('fruits', JSON.stringify(fruits))




// let fruits;

// if (localStorage.getItem('fruits')) {
//     fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//     fruits = [];
// }
// console.log(fruits);
// // fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('fruits', JSON.stringify(fruits));