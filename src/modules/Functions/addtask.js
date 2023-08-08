import { createTodoForm } from '../UI/todoForm';
import { removeTodoForm, todoListElm } from './cancel';
import { Task, tasks, appendTask } from './Tasks';

export const addTaskEvent = (taskAdder) => {
  taskAdder.addEventListener('click', () => {
    createTodoForm(taskAdder.parentElement);
    taskAdder.remove();
  });
};

export let todoFormElms = [];

export let addTaskBtnElm;

export const addTask = () => {
  attachValidClass();
  addTaskBtnElm.addEventListener('click', () => {
    if (!validateForm()) return;
    let todo = new Task(
      todoFormElms[0].value,
      todoFormElms[1].value,
      todoFormElms[2].value,
      todoFormElms[3].value
    );
    tasks.push(todo);
    appendTask();
    removeTodoForm();
    emptyTodoFormElms();
  });
};

const validateForm = () => {
  if (todoFormElms[0].value === '') return false;
  return true;
};

const attachValidClass = () => {
  todoFormElms[0].addEventListener('input', () =>
    todoFormElms[0].value !== ''
      ? addTaskBtnElm.classList.add('valid')
      : addTaskBtnElm.classList.remove('valid')
  );
};

export const emptyTodoFormElms = () => {
  todoFormElms = [];
};
