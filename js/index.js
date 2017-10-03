// v4

// .toggleAll : if everythin's true, make everything false
// .toggleAll : otherwise, make everything true





var todoList = {
    todos: [],
   
    // method to add new todo as an object
    addTodo: function(todoText){
       
        this.todos.push({
            todoText: todoText,
            completed: false
        });
      
    },
    // method to change certain todoText on todos object
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
       
    },
    // method to delete todo item on this object
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        
    },
    // method to toggle completed from false to true
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
       
    },
    toggleAll: function(){
       
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // get  number of completed todos
        // for(var i = 0; i < totalTodos; i++){
        //     if (this.todos[i].completed === true){
        //         completedTodos++;
        //     }
        // }
        this.todos.forEach(function(todo){
            if(todo.completed === true){
                completedTodos++;
            }
        });
        // // case 1: if everythin's true, make everything false
        // if(completedTodos === totalTodos){
        //     // for(var a = 0; a < totalTodos; a++){
        //     //     this.todos[a].completed = false;
        //     // }

        //     this.todos.forEach(function(todo){
        //         todo.completed = false;
        //     });
        // // case 2:  otherwise, make everything true
        // }else{
        //     // for(var b = 0; b < totalTodos; b++){
        //     //     this.todos[b].completed = true;
        //     // }

        //     this.todos.forEach(function(todo){
        //         todo.completed = true;
        //     });

        // }
        this.todos.forEach(function(todo){
            // case 1: if everythin's true, make everything false
                if(completedTodos === totalTodos){
                    todo.completed = false;
                    // case 2:  otherwise, make everything true
                } else {
                 todo.completed = true;
                }
        });
        
    }
};



// object to handle events on button clicks
var handlers = {
    addTodo:function(){
        var addTodoTextInput = document.getElementById('addTodoText');
        
        todoList.addTodo(addTodoTextInput.value);
        
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo:function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        
        changeTodoPositionInput = '';
        changeTodoTextInput = '';

        view.displayTodos();
    },
    deleteTodo:function(position){
    
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');

        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);

        toggleCompletedPositionInput = '';

        view.displayTodos();
    },
    toggleAll:function(){
        todoList.toggleAll();

        view.displayTodos();
    }
};
// object to control html views
var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        // for(var c = 0; c < todoList.todos.length; c++){
          
        //     var todoLi = document.createElement('li');
        //     var todo = todoList.todos[c];
        //     var todoTextWithCompletion = '';

        //     if (todo.completed === true ) {
        //         todoTextWithCompletion = '(x) ' + todo.todoText;
        //     } else {
        //         todoTextWithCompletion = '( ) ' + todo.todoText;
        //     }
            
        //     // todoLi.id = Math.round(Math.random() * 100);
        //     todoLi.id = c;
        //     todoLi.textContent = todoTextWithCompletion;  
        //     todoLi.appendChild(this.createDelteButton());
        //     todosUl.appendChild(todoLi);
        // }
        todoList.todos.forEach(function(todo, position){
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';
            if (todo.completed === true ) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;  
            debugger;
                todoLi.appendChild(this.createDeleteButton());
                todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton:function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';

        return deleteButton;
    },
    setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event){
          
            // get the element that was clicked on.
            var elementClicked = event.target;
        
            if (elementClicked.className === 'deleteButton'){
                // run handlers.delteTodo
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};
view.setUpEventListeners();

// students = ['denis', 'auste', 'dominykas'];
// function logName(name){
//     console.log(name);
// }
// // students.forEach(logName);
// students.forEach(function(element) {
 
//     console.log(element + ' mokiniai!');
// }, this);