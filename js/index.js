// v3

// .displayTodos should show .todoText
// .displayTodos should tell if .todos is empty
// .displayTodos should show .completed




var todoList = {
    todos: [],
    // method to display todo items in this object
    displayTodos: function(){
        // check if todo list is empty
        if(this.todos.length === 0 || this.todos === undefined){
            console.log('Your todo list is empty');
        }else{
             // looping all todos
             for(i = 0; i < this.todos.length; i++){
                 // check if todo is completed
                if(this.todos[i].completed === true){
                    console.log("(x)", this.todos[i].todoText);
                }else{
                    console.log("()", this.todos[i].todoText);
                }
            }
        }
          
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
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    // method to delete todo item on this object
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    // method to toggle completed from false to true
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};










