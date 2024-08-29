class Person {
    constructor(fullName, birthDate) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

const printPreOrder = (person) => {
    if (!person) return;
    console.log(`${person.fullName} (${person.birthDate})`);
    person.children.forEach(printPreOrder);
};

const printPostOrder = (person) => {
    if (!person) return;
    person.children.forEach(printPostOrder);
    console.log(`${person.fullName} (${person.birthDate})`);
};

const printInOrder = (person) => {
    if (!person || person.children.length === 0) {
        if (person) {
            console.log(`${person.fullName} (${person.birthDate})`);
        }
        return;
    }
    const mid = Math.floor(person.children.length / 2);
    person.children.slice(0, mid).forEach(printInOrder);
    console.log(`${person.fullName} (${person.birthDate})`);
    person.children.slice(mid).forEach(printInOrder);
};

const calculateHeight = (person) => {
    if (!person) return 0;

    if (person.children.length === 0) return 1;

    const heights = person.children.map(child => calculateHeight(child));
    return Math.max(...heights) + 1;
};


const grandfather = new Person("Michael Jordan", "01-01-1940");
const father = new Person("Rachel Jordan", "01-01-1970");
const child1 = new Person("Nicolas Jordan", "01-01-2000");
const child2 = new Person("Austin Jordan", "01-01-2005");

grandfather.addChild(father);
father.addChild(child1);
father.addChild(child2);

console.log("Pre-order:");
printPreOrder(grandfather);

console.log("\nPost-order:");
printPostOrder(grandfather);

console.log("\nIn-order:");
printInOrder(grandfather);

console.log("\nHeight of the tree:");
console.log(calculateHeight(grandfather));
