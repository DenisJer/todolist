// it should have a function store todos
// it should have a function display todos +
// it should have a function add todos +
// it should have a function delete todos
// it should have a function edit todos


// v1

var todos = [];

function displayTodos(){
    console.log('My todos: ', todos);
}

function addTodo(newTodo){
    todos.push(newTodo);
    displayTodos();
}

function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}
addTodo('new todo');

changeTodo(0, "changed todo");
changeTodo(0, "changed todo again");
