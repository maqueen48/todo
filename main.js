const btnSubmit = document.querySelector("#btnSubmit");

let todos = document.querySelector("#todos");
const todoInput = document.querySelector("#todo");
btnSubmit.addEventListener('click', ()=>createTodo())
todoInput.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13){
        createTodo()
    }

})



function createTodo(){
    const todo = todoInput.value;
    const li = document.createElement("li");
    li.innerHTML = todo;
    todos.append(li);
}