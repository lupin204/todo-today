let todoList = [];
const todoUl = document.querySelector('#todoUl');


const initTodos = () => {
    console.log('init todos');

    todoHandleEvent();
}

const todoHandleEvent = () => {
    const $inputTodo = document.querySelector('#inputTodo');

    document.querySelector('#btnTodo').addEventListener('click', (e) => {
        e.preventDefault();
        const todoMsg = $inputTodo.value.trim();
        if (!todoMsg) { return false; }
        $inputTodo.value = '';

        const newToDoObj = {
            id: Date.now(),
            text: todoMsg
        }
        todoList.push(newToDoObj);
        addTodoElem(newToDoObj);

        saveStorageTodos();
    })


}

const showTodo = () => {
    document.querySelector('.main .todo-input').classList.remove('hidden');
    document.querySelector('.main .todo-list').classList.remove('hidden');
}

const hideTodo = () => {
    document.querySelector('.main .todo-input').classList.add('hidden');
    document.querySelector('.main .todo-list').classList.add('hidden');
}

const setTodoToday = (loginName) => {
    const todoItems = localStorage.getItem(`todotoday_todo_${loginName}`);
    if (todoItems != null) {
        const todoJson = JSON.parse(todoItems);
        todoList = todoJson;
        todoJson.forEach(todo => {
            addTodoElem(todo);
        })
    } else {
        todoList = [];

    }
}

const setTodoEmpty = () => {
    todoList = [];
    document.querySelector('#todoUl').innerHTML = '';
    document.querySelector('#inputTodo').value = '';

}

const addTodoElem = (newToDoObj) => {
    const li = document.createElement("li");   
    const span = document.createElement("span");
    li.id = newToDoObj.id
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",(e) => {
        const li = e.target.parentElement;
        li.remove();
        todoList = todoList.filter((toDo) => toDo.id !== parseInt(li.id));
        saveStorageTodos();
    });
    li.appendChild(span);   
    li.appendChild(button);
    todoUl.appendChild(li);
}

const saveStorageTodos = () => {
    localStorage.setItem(`todotoday_todo_${userName}`, JSON.stringify(todoList));
}



initTodos();
