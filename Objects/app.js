/*
Objects are collections of key value pairs
property values can be strings, numbers, booleans, arrays and functions
however if the property value is function they are called methods instead
*/

// object literal syntax
// const person = {
//   name: "john",
//   lastname: "anderson",
//   age: 26,
//   married: true,
//   children: ['ann', 'peter'],
//   fullname: function(){
//     console.log(`hello my name is ${this.name} ${this.lastname}`)
//   },
//   ["last-name"]:"anderson"
// }


// person.fullname()
// console.log(person)
// console.log(person.name)
// const age = person.age
// console.log(age)
// const firstChild = person.children[0]
// console.log(firstChild)
// person.greeting()
// console.log(person["last-name"])

// add property
// person.city ="chicago"
// delete person.married
// console.log(person)


//  object literal syntax
// const bob = {
//   name: "bob",
//   lastname: "jordan",
//   age: 23,
//   married: true,
//   children: ['fsf', 'efqeq'],
//   fullname: function(){
//     console.log(`hello my name is ${this.name} ${this.lastname}`)
//   },
//   ["last-name"]:"anderson"
// }

// bob.fullname()

// blue print
// factory functions and constructor functons
// factory functions

function createPerson(name, lastname) {
  return {
    name: name,
    lastname: lastname,
    fullname: function () {
      console.log(`hello my name is ${this.name} ${this.lastname}`)
    }
  }
}

// const john = createPerson('john', 'andrson')

// for constructor function the name of the constructor need to start with capital letter
function Person(name, lastname) {
  this.name = name
  this.lastname = lastname
  this.fullname = function () {
    console.log(`hello my name is ${this.name} ${this.lastname}`)
  }
  // console.log(this)
}

// "new" keyword: first it creates an empty object
// it sets ”this“ to point back to the object
// last, we can omit the "return" statement using the "new"
const john1 = new Person('hoe', 'loa')
// console.log(john1.constructor)

//arrays and functions are in fact objects in javascript
// const bob = {}
// console.log(bob.constructor)
// const list = []
// console.log(list.constructor)
// const sayHi = function(){}
// console.log(sayHi.constructor)

// const susy = new john1.constructor('susy', 'carpenter')
// console.log(susy)
// susy.fullname

/*
prototype inheritance model
javascript uses prototypal inheritance model.
that means that every constructor function/class has a property
property that is shared by every instance of the constructor
so any properties and methods of prototype can be accessed by every instance. prototype property returns object.
*/

function Student(name, lastName, role){
  this.name = name
  this.lastName = lastName
  this.role = role
}



// 我对原型（prototype） 的理解是，一个生成对象的模板，通过 .prototype.xxxx = ”xxxx“ 把新属性挂靠在该模板上，并且可以对 该新加的属性赋值， 那在 new 对象的时候，就能省略掉一些共同的参数代码，比如 如下两个对象，注释掉的 学校那一行


Student.prototype.school = "crystal grove high shcool"
Student.prototype.greet = function(){
  console.log(`
  Hello I'm ${this.name} ${this.lastName} and I'm ${this.role} in the ${this.school}
  `)
}


const john2 = new Student(
  "john",
  "conor",
  "sutdent"
  // ,"crystal grove high shcool"
)

const bob1 = new Student(
  "bob",
  "jordan",
  "student"
  // ,"crystal grove high shcool"
)

// console.log(john2)
// console.log(bob1)
john2.greet()
bob1.greet()

// console.log(john2.constructor.prototype)
// console.log(object.getPrototypeOf(bob))

// all objects in javascript inherit from the prototype of a Object() constructor function.When we say objects we mean arrays and functions because they are also objects

const bob = {}
// Object constructor
console.log(bob.constructor)
console.log(Object.getPrototypeOf(bob))
console.log(Object.getPrototypeOf(john2))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(john2)))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(john2))))

const list = []
console.log(list.constructor)
console.log(Object.getPrototypeOf(list))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(list)))