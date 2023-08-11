import { cancelTodoForm, todoFormElm, todoListElm } from '../Functions/remove';
import { addTask, addTaskBtnElm, todoFormElms } from '../Functions/addtask';

export const createTodoForm = (todoList) => {
  const todoForm = document.createElement('div');
  todoForm.classList.add('todo-form');
  todoList.appendChild(todoForm);
  todoListElm = todoList;
  todoFormElm = todoForm;
  todoForm.appendChild(createTaskNameInput());
  todoForm.appendChild(createTaskDescriptionInput());
  todoForm.appendChild(createTaskDetailsContainer());
  todoForm.appendChild(createButtonsContainer());
};

const createTaskNameInput = () => {
  const taskNameInput = document.createElement('input');
  taskNameInput.classList.add('taskname-input');
  taskNameInput.placeholder = 'Task name';
  todoFormElms.push(taskNameInput);
  return taskNameInput;
};

const createTaskDescriptionInput = () => {
  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.classList.add('taskdescription-input');
  taskDescriptionInput.placeholder = 'Description';
  todoFormElms.push(taskDescriptionInput);
  return taskDescriptionInput;
};

const createTaskDetailsContainer = () => {
  const taskDetailsContainer = document.createElement('div');
  taskDetailsContainer.classList.add('taskdetails-container');
  taskDetailsContainer.appendChild(createDueDateInput());
  taskDetailsContainer.appendChild(createPrioritySelect());
  return taskDetailsContainer;
};

const createDueDateInput = () => {
  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('duedate-input');
  dueDateInput.type = 'date';
  todoFormElms.push(dueDateInput);
  return dueDateInput;
};

const createPrioritySelect = () => {
  const prioritySelect = document.createElement('select');
  prioritySelect.classList.add('priority-select');

  const priorityLow = document.createElement('option');
  priorityLow.textContent = 'Priority Low';
  priorityLow.value = 'low';

  const priorityMedium = document.createElement('option');
  priorityMedium.textContent = 'Priority Medium';
  priorityMedium.value = 'medium';

  const priorityHigh = document.createElement('option');
  priorityHigh.textContent = 'Priority High';
  priorityHigh.value = 'high';

  prioritySelect.add(priorityLow);
  prioritySelect.add(priorityMedium);
  prioritySelect.add(priorityHigh);
  todoFormElms.push(prioritySelect);
  return prioritySelect;
};

const createButtonsContainer = () => {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  buttonsContainer.appendChild(createCancelBtn());
  buttonsContainer.appendChild(createAddTaskBtn());
  return buttonsContainer;
};

const createCancelBtn = () => {
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.textContent = 'Cancel';
  cancelTodoForm(cancelBtn);
  return cancelBtn;
};

const createAddTaskBtn = () => {
  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('addtask-btn');
  addTaskBtn.textContent = 'Add task';
  addTaskBtnElm = addTaskBtn;
  addTask();
  return addTaskBtn;
};
