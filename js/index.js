// v4

// .toggleAll : if everythin's true, make everything false
// .toggleAll : otherwise, make everything true





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
    },
    toggleAll: function(){
       
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // get  number of completed todos
        for(var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
        // case 1: if everythin's true, make everything false
        if(completedTodos === totalTodos){
            for(var a = 0; a < totalTodos; a++){
                this.todos[a].completed = false;
            }
        // case 2:  otherwise, make everything true
        }else{
            for(var b = 0; b < totalTodos; b++){
                this.todos[b].completed = true;
            }
        }
        this.displayTodos();
    }
};



// object to handle events on button clicks
var handlers = {
    displayTodos: function(){
        todoList.displayTodos();
    },
    toggleAll:function(){
        todoList.toggleAll();
    },
    addTodo:function(){
        var addTodoTextInput = document.getElementById('addTodoText');
        
        todoList.addTodo(addTodoTextInput.value);
        
        addTodoTextInput.value = '';
    },
    changeTodo:function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        
        changeTodoPositionInput = '';
        changeTodoTextInput = '';

    },
    deleteTodo:function(){
        var deleteTodoNumberInput = document.getElementById('deleteTodoNumberInput');
       
        todoList.deleteTodo(deleteTodoNumberInput.valueAsNumber);

        deleteTodoNumberInput = '';
    }
};
