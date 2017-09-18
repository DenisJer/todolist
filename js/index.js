// v3

// todoList.addTodo should add objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted dhould change the completed property




var todoList = {
    todos: [],
    // method to display todo items in this object
    displayTodos: function(){
        console.log(this.todos);
    },
    // method to add new todo item to this object
    addTodo: function(newTodo){
        this.todos.push(newTodo);
        this.displayTodos();
    },
    // method to change certain todo item on object
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    // method to delete todo item on this object
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};





