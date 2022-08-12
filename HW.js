class Hamster {
    constructor (owner, name, price) {
    this.owner = owner
    this.name = name
    this.price = 15
}
wheelRun() {
    return `${this.name} makes the sound squeak squeak when he runs.`
}
eatFood() {
    return `${this.name} eats and says nibble nibble.`
}
getPrice() {
    return `The price of ${this.name} is ${this.price}.`
}
}

class Person {
    constructor (name, age, height) {
        this.name = name 
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return `The boy's name is ${this.name}.`
    }
    getAge() {
        return ` and he is ${this.age} years old.`
    }
    getWeight() {
        
        return `he's weight is also ${this.weight} because he is a baby.`
    }
    greet() {
        return `Hi, ${this.name} how are you? .`
    }
    eat() {
        return `your weight is now ${this.weight++} and you mood is ${this.mood++} you get happy when you eat.`
    }
    exercise() {
        return `The weight is now ${this.weight--} because you exercise 5 times a day. That's good Timmy you're losing weight`
    }

    ageUp () {
        return `${this.age += 9} You are 9 years old now!! Aren't you happy ${this.name}.`
    }
    ageUpAgain () {
       return `Now you are ${this.age ++} and you weigh ${this.weight+= 60} pounds, and you height is ${this.height+= 3}inches but your mood ${this.mood -= 10} why?, ${this.bankAccount +=50} this is your birthday money I hope it'll make you feel better.`

    }
    
    buyHamster() {
        this.hamsters.push(Hamster);
        return `${this.name} mood is now ${this.mood += 10} because he bought Gus and his bank account is ${this.bankAccount -= 15} but he doesn't care.`

    }
}

const timmy = new Person ('Timmy', 5, 7);
timmy.getName();
timmy.getAge();
timmy.getWeight('10');
timmy.greet();
timmy.eat();
timmy.exercise();
timmy.ageUp();
timmy.buyHamster();



const gus = new Hamster ('Timmy', 'Gus', )
console.log(gus.wheelRun(),gus.eatFood(),gus.getPrice())

console.log(timmy.getName(),timmy.getAge(),timmy.getWeight(),timmy.greet(),timmy.eat(),timmy.exercise(),timmy.ageUp(),timmy.ageUpAgain(),timmy.buyHamster());

