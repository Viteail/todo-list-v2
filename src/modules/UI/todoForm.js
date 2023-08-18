import { cancelTodoForm } from '../Functions/remove';
import {
  addTask,
  addTaskBtnElm,
  todoFormElms,
} from '../Functions/addtask';
import { saveTask } from '../Functions/edit';

export let todoFormElm;

export const createTodoForm = (isEdit) => {
  const todoForm = document.createElement('div');
  todoForm.classList.add('todo-form');
  todoFormElm = todoForm;
  todoForm.appendChild(createTaskNameInput());
  todoForm.appendChild(createTaskDescriptionInput());
  todoForm.appendChild(createTaskDetailsContainer());
  todoForm.appendChild(createButtonsContainer(isEdit));
  return todoForm;
};

const createTaskNameInput = () => {
  const taskNameInput = document.createElement('input');
  taskNameInput.classList.add('taskname-input');
  taskNameInput.placeholder = 'Task name';
  todoFormElms.push(taskNameInput);
  console.log(todoFormElms);
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

const createButtonsContainer = (isEdit) => {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  buttonsContainer.appendChild(createCancelBtn(isEdit));
  buttonsContainer.appendChild(createAddTaskBtn(isEdit));
  return buttonsContainer;
};

const createCancelBtn = (isEdit) => {
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.textContent = 'Cancel';
  cancelTodoForm(cancelBtn, isEdit);
  return cancelBtn;
};

const createAddTaskBtn = (isEdit) => {
  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('addtask-btn');
  if (isEdit) addTaskBtn.textContent = 'Save';
  if (!isEdit) addTaskBtn.textContent = 'Add task';
  addTaskBtnElm = addTaskBtn;
  addTask(isEdit);
  saveTask(addTaskBtn, isEdit);
  return addTaskBtn;
};
