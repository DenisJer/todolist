// it should  store todos array on object
// it should have a displayTodos method
// it should have a addTodo method
// it should have a changeTodo method
// it should have a deleteTodo method


// v2

var todoList = {
    todos: []
};

// function to display todos
function displayTodos(){
    console.log('My todos: ', todos);
}
// function to add new todo item
function addTodo(newTodo){
    todos.push(newTodo);
    displayTodos();
}
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
