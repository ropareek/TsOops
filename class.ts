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

class Person {
    private readonly credentials: string = ''
    private name: string = ''
 
    constructor(value: string){
       this.credentials = value
    }
 
    public setName(name: string): void {
       if(!this.credentials) return
       this.name = name
       // logic get department
       
    }
 
    public getName(){
      return `Employee name: ${this.name} having credentials: ${this.credentials}`
    }
}

const person1 = new Person('2'); // this gives warning if arguement for 'value' was not provided

person1.setName('Rohan')


console.log('', person1.getName());
