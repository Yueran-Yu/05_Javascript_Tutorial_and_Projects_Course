// ES6 Classes Prototypal Inheritance

//constructor function
function Employee(id){
  this.id = id
}

//
Employee.prototype.showId = function(){
  console.log(`my id number is ${this.id}`)
}

const john = new Employee(23)
console.log(john)
john.showId()

function Manager(id, name, department){
  Employee.call(this, id)
  this.name = name
  this.department = department
}

Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager

Manager.prototype.callMeeting = function(){
console.log(`I'm calling a meeting`)
}
const sara = new Manager(34, "sara", "sales")
console.log(sara)
sara.callMeeting()
sara.showId()