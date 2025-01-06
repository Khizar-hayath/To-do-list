const todolist = [{
  name: 'Learn a new skill',
  dueDate: '2026-06-01'
},{ 
  name: 'Jog 5km',
    dueDate: '2025-06-01'
  }];

renderTodoList();
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0 ; i<todolist.length ; i++){
    const todoObject = todolist[i];
    // const name = todoObject.name;    OR
    // const dueDate = todoObject.dueDate;   OR
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
    todolist.splice(${i} , 1);
    renderTodoList();
    "
    class = "delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }                               
  //console.log(todoListHTML);        // Display to do list in HTML array in console

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;       // To dispaly task on the desktop window
}

function addTodo() {    
  const inputElement = document.querySelector('.js-name-input');// Extract info
  // from the textbox
  const name = inputElement.value.trim();
  //console.log(name);

  const dateInputElement = document.querySelector('.js-due-date-input'); 
  const dueDate = dateInputElement.value.trim();
  todolist.push({
  name,                    //OR name: name,     [SHORTHAND PROPERTY SYNTAX]
  dueDate                  //dueDate: dueDate   [SHORTHAND PROPERTY SYNTAX]
});
  inputElement.value = '';
  renderTodoList();
}