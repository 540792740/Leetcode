function Parent(newName, newAge, newStatus) {
    this.age=newAge;
    var status= newStatus;
    this.name=newName;
    this.getAge=function(){return this.age};
}
Parent.prototype.getStatus=function(){return this.status; }
Parent.prototype.getName=function(){return this.name; }
Parent.prototype.sayHello=function(){
    console.log('My name is '+this.getName())
    console.log("My age is "+this.getAge())
    console.log('I am '+this.getStatus())

}
var p1 = new Parent("Sam", 23, "single");
p1.age= 24;
p1.name="Peter";
p1.sayHello()
console.log(p1)
