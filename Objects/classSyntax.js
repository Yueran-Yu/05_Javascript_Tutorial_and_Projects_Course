class Employee {
  constructor(id) {
    this.id = id
  }
  showId() {
    console.log(`my id number is ${this.id}`)
  }
}
const john = new Employee(2)
console.log(john)
john.showId()

class Manager extends Employee {
  constructor(id, name, department) {
    super(id)
    this.name = name
    this.department = department
  }
  callMeeting() {
    console.log(`I'm calling a meeting`)
  }
}
const sara = new Manager(32,"sara", "sales")
console.log(sara)
sara.callMeeting()
sara.showId()

