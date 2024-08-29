class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }

    toString() {
        return `Person(Name: ${this.name}, Arrived Time: ${this.arrivedTime})`;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }


    enqueue(person) {
        this.queue.push(person);
        console.log(`Added "${person.name}" to the queue.`);
    }


    dequeue() {
        if (this.queue.length > 0) {
            const person = this.queue.shift();
            console.log(`Removed "${person.name}" from the queue.`);
            return person;
        } else {
            console.log("The queue is empty!");
            return null;
        }
    }


    peek() {
        if (this.queue.length > 0) {
            const person = this.queue[0];
            console.log(`First in queue: "${person.name}"`);
            return person;
        } else {
            console.log("The queue is empty!");
            return null;
        }
    }

    
    isEmpty() {
        return this.queue.length === 0;
    }

    
    size() {
        return this.queue.length;
    }

    
    display() {
        console.log("Current queue of people:");
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i].toString());
        }
    }
}


const AQueue = new Queue();

const person1 = new Person("Alice", "09:00 AM");
const person2 = new Person("Bob", "09:05 AM");
const person3 = new Person("Charlie", "09:10 AM");


AQueue.enqueue(person1);
AQueue.enqueue(person2);
AQueue.enqueue(person3);


AQueue.display();


AQueue.peek();


AQueue.dequeue();
AQueue.dequeue();


AQueue.display();


console.log(`Is queue empty? ${AQueue.isEmpty()}`);

AQueue.dequeue();
console.log(`Is queue empty? ${AQueue.isEmpty()}`);
