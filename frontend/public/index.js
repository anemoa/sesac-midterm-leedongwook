const TodoList = document.querySelector('#todo_list');

const getTodos = async () => {

    try{
        const lists = await axios.get('https://jsonplaceholder.typicode.com/todos');

        // console.log(lists.data.slice(0,10));

        const listsLi = lists.data.slice(0,10);

        listsLi.forEach(ele => {
            // console.log(ele);
            const todoLi = document.createElement('li');
            todoLi.innerHTML = `
                <span class="todo_el">
                    <input type="checkbox" name="" id="todo${ele.id}">
                    <span class="content">${ele.title}</span>
                </span>
                <button onclick="deleteBtn()">X</button>`;
            TodoList.appendChild(todoLi);
        });

    }catch (error){
        console.log(error);
    }

}

document.addEventListener("DOMContentLoaded", ()=> {
	getTodos();
});


function addTodo(){
    const inputVal = document.querySelector('#illdo').value;
    console.log(inputVal);

    const newTodo = document.createElement('li');
    newTodo.innerHTML = `
        <span class="todo_el">
            <input type="checkbox" name="" id="todo">
            <span class="content">${inputVal}</span>
        </span>
        <button onclick="deleteBtn()"ㅛy>X</button>`;

    TodoList.appendChild(newTodo);
}


function deleteBtn(event){
    console.log(event);
    const li = event.target.parentElement;
    li.remove();
}