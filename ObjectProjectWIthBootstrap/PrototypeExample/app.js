let Super = function(color, list){
  this.color = color;
  this.list = list
}
Super.prototype.newList = [10,10,10,10]

let super1 = new Super("red", [1,1,1,1])
let Sub = function () {}
Sub.prototype = new Super("green",[1])

let sub1 = new Sub()
let sub2 = new Sub()

Sub.prototype.list.push(4)
console.log("Sub.prototype.list.push(4) => sub1.list: " + sub1.list)
console.log("Sub.prototype.list.push(4) => sub2.list: " + sub2.list)
console.log("Sub.prototype.list.push(4) => super1.list: " + super1.list)

// Sub.prototype.newList.push(2,2,2,2)
sub1.newList.push(2,2,2,2)

console.log("sub1.newList.push(2,2,2,2) => sub1.newList: " + sub1.newList)
console.log("sub1.newList.push(2,2,2,2) => sub2.newList: " + sub2.newList)
console.log("sub1.newList.push(2,2,2,2) => super1.newList: " + super1.newList)
//结论： sub1.newList.push(2,2,2,2) ==> Sub.prototype.newList.push(2,2,2,2) ==> Super.prototype.newList.push(2,2,2,2)

// 覆写 仅仅是在当前 new的这块作用域里添加该属性，而原来原型链上的那个属性依然还在，不受影响
sub1.newList = [3,3,3,3]
console.log("sub1.newList = [3,3,3,3]: " +sub1.newList)
console.log("sub1.newList = [3,3,3,3]: " + sub2.newList)
console.log("sub1.newList = [3,3,3,3]: " + super1.newList)

















