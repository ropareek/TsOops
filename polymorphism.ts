class Person {
public name: string = ''
public role: string = '' 
}

class basketballPlayer extends Person {
    public setName(name: string){
    this.name = name
    this.role = 'BasketBall Player'
    }
    public getName(){
    return `User name: ${this.name} Role: ${this.role}`
    }
}

class golfPlayer extends Person {
    public setName(name: string){
    this.name = name
    this.role = 'Golf Player'
    }
    public getName(){
    return `User name: ${this.name} Role: ${this.role}`
    }
}

const person1 = new basketballPlayer()
const person2 = new golfPlayer()
person1.setName('Kevin Odongo')
person2.setName('Kevin Odongo')
console.log(person1.getName())
console.log(person2.getName())
