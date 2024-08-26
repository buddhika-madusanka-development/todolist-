const todoInput = document.querySelector('#todo-input');
const submitBTN = document.querySelector('.submit-btn');
const todoList = document.querySelector('.todos');

submitBTN.addEventListener("click", () => {
    const text = todoInput.value;
    if(text ==''){
        alert('Enter valid todo..');
    }
    else{
        let todo = document.createElement('li');
        const deleteTodod = document.createElement('span')

        todo.innerText = text;
        deleteTodod.innerHTML = 'Remove';

        todoList.appendChild(todo);
        todo.appendChild(deleteTodod);

        todoInput.value = "";
    }
})

todoList.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        markAsDone(e);
    }
    else if(e.target.tagName === 'SPAN'){
        removeTodo(e);
    }
})

const markAsDone = (e) => {
    e.target.classList.toggle('todo-done')
}

const removeTodo = (e) => {
    e.target.parentElement.remove();
}