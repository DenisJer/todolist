// it should  store todos array on object +
// it should have a displayTodos method+
// it should have a addTodo method+
// it should have a changeTodo method
// it should have a deleteTodo method


// v2

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
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    }

};



// function to change sertain todo item
function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}
// function to delete todo item
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}
