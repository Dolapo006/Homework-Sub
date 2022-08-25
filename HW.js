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
        this.ate = 0
        this.workout = 0
    }
    getName() {
        return `The boy's name is ${this.name}.`
    }
    getAge() {
        return ` and he is ${this.age} years old.`
    }
    getWeight() {
        
        return `he's weight is also ${this.weight}`
    }
    greet() {
        return `Hi, ${this.name} how are you? .`
    }
    sad() {
       return `At this point, ${this.name} is a little bummed. As a precious child, he feels he's seen it all`
    }

    eatAgain () {
        return `He eats ${this.ate += 5} a day. You are eating alot ${this.name}`
    }
    eat() {
        return `your weight is now ${this.weight+= 30} pounds and you mood is ${this.mood+=4} you get happy when you eat.`
    }
    exercise() {
        return `Timmy is going to kindergarten soon so he is exercising ${this.workout += 5} times a day. His weight is now ${this.weight-= 10} pounds because he's been exercising. That's good Timmy you're losing weight`
    }


    ageUp () {
       return `Now you are ${this.age +=10} years old  and you weigh ${this.weight+= 10} pounds, and you height is ${this.height+= 50}feet but your mood ${this.mood -= 2} why?, ${this.bankAccount +=10} this is your birthday money I hope it'll make you feel better.`

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
timmy.sad();
timmy.eatAgain();
timmy.eat();
timmy.exercise();
timmy.ageUp();
timmy.buyHamster();



const gus = new Hamster ('Timmy', 'Gus', )
console.log(gus.wheelRun(),gus.eatFood(),gus.getPrice())

console.log(timmy.getName());
console.log(timmy.getAge());
console.log(timmy.getWeight());
console.log(timmy.greet());
console.log(timmy.sad());
console.log(timmy.eatAgain());
console.log(timmy.eat());
console.log(timmy.exercise());
console.log(timmy.ageUp());
console.log(timmy.buyHamster());


// class Dinner {
//     constructor( appetizer, entree, dessert) {

    
//     this.appetizer = 'appetizer';
//     this.entree = 'entree'
//     this.dessert = 'dessert'
//     }
    

// }
//  class Chef {
//     constructor (dinnerType) {
//     this.dinnerType = dinnerType;
//     }
//     makeDinner(appetizer,entree,dessert) {
//         const newDinner = new Dinner(appetizer, entree, dessert);

//     }
//  }





// // newDinner.makeDinner('shrimp salad', 'spagetti aglio', 'vanilla cake')
// // newDinner.makeDinner('bread sticks', 'burger and fries', 'chocolate ice cream')
// // newDinner.makeDinner('naan and butter', 'butter chicken and rice', 'coconut cookies')

// // console.log(newDinner)