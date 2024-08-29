class Node {
    constructor(name) {
        this.name = name;
        this.edges = [];
    }

    addEdge(node) {
        this.edges.push(node);
    }
}

class Person extends Node {
    constructor(name, age, city) {
        super(name);
        this.age = age;
        this.city = city;
        this.city.addEdge(this); 
    }
}

class City extends Node {
    constructor(name) {
        super(name);
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    findCity(cityName) {
        return this.nodes.find(node => node instanceof City && node.name === cityName);
    }

    listPeopleInCity(cityName) {
        const city = this.findCity(cityName);
        if (city) {
            console.log(`People living in ${cityName}:`);
            city.edges.forEach(({ name, age }) => console.log(`- ${name}, Age: ${age}`));
        } else {
            console.log(`City ${cityName} not found.`);
        }
    }
}


const graph = new Graph();


const [city1, city2] = [new City("New York"), new City("Los Angeles")];
[city1, city2].forEach(city => graph.addNode(city));


const [person1, person2, person3] = [
    new Person("Pedro Pedro", 25, city1),
    new Person("Bob el constructor", 30, city1),
    new Person("Charlie Brown", 28, city2)
];
[person1, person2, person3].forEach(person => graph.addNode(person));


graph.listPeopleInCity("New York");   
graph.listPeopleInCity("Los Angeles"); 
