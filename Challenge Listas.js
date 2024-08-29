class Todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.next = null; 
    }
}

class TodoList {
    constructor() {
        this.head = null; 
    }

    addTodo(title, description) {
        const newTodo = new Todo(title, description);
        if (!this.head) {
            this.head = newTodo;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newTodo;
        }
    }

    printTodos() {
        for (let current = this.head; current; current = current.next) {
            console.log(`Title: ${current.title}`);
            console.log(`Description: ${current.description}`);
            console.log('--------------------');
        }
    }
}


const todoList = new TodoList();

todoList.addTodo('Plan vacation', 'Research and book flights for summer vacation.');
todoList.addTodo('Write report', 'Draft the quarterly report for the finance department.');
todoList.addTodo('Grocery shopping', 'Buy vegetables, fruits, and snacks.');
todoList.addTodo('Clean house', 'Vacuum the living room and dust the shelves.');
todoList.addTodo('Call family', 'Catch up with parents and siblings.');


todoList.printTodos();
