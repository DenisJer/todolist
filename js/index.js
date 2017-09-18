// v3

// todoList.addTodo should add objects+
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted dhould change the completed property




var todoList = {
    todos: [],
    // method to display todo items in this object
    displayTodos: function(){
        console.log(this.todos);
    },
    // method to add new todo as an object
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    // method to change certain todoText on todos object
    changeTodo: function(position, todoText){
        //this.todos[position] = todoText;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    // method to delete todo item on this object
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};





