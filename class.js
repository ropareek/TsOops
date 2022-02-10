// //person class
// class Person  {
//     name : string = '';
//     age : number = 0;
//     greetings(){
//         return this.name + ' ' + this.age;
//     }
// }
// //person1 is an instance of class Person
// const person1: any = new Person();
// person1.name = 'Rohan Pareek';
// person1.age = 22;
// console.log(person1.greetings());
// ABSTRACTION
// person class object
// class Person {
//     public name: string = ''
//     public age: string = ''
//     public greetings(){
//       return this.name + ' ' + this.age
//     } 
// }
var Person = /** @class */ (function () {
    function Person(value) {
        this.credentials = '';
        this.name = '';
        this.credentials = value;
    }
    Person.prototype.setName = function (name) {
        if (!this.credentials)
            return;
        this.name = name;
        // logic get department
    };
    Person.prototype.getName = function () {
        return "Employee name: ".concat(this.name, " credentials: ").concat(this.credentials);
    };
    return Person;
}());
var person1 = new Person('2'); // this gives warning if arguement for 'value' was not provided
person1.setName('Rohan');
console.log('', person1.getName());
