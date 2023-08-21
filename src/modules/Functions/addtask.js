import { createTodoForm } from '../UI/todoForm';
import { removeTodoForm } from './remove';
import { Task, appendTask, appendEditedTask } from './Tasks';
import format from 'date-fns/format';
import { currentProject } from './projects';
import { isEdit, editedTaskObj } from './edit';

export const addTaskEvent = (taskAdder) => {
  taskAdder.addEventListener('click', () => {
    if (isEdit) {
      appendEditedTask(editedTaskObj);
      removeTodoForm();
      return;
    }
    taskAdder.parentElement.appendChild(createTodoForm(isEdit));
    taskAdder.remove();
  });
};

export let todoFormElms = [];

export let addTaskBtnElm;

export const addTask = (isEdit) => {
  if (isEdit) return;
  attachValidClass(isEdit);
  addTaskBtnElm.addEventListener('click', () => {
    if (!validateForm() || isEdit) return;
    if (todoFormElms[2].value === '')
      todoFormElms[2].value = applyDefaultDate();
    let todo = new Task(
      todoFormElms[0].value,
      todoFormElms[1].value,
      formatDate(todoFormElms[2].value),
      todoFormElms[3].value
    );
    currentProject.tasks.push(todo);
    appendTask();
    removeTodoForm();
    emptyTodoFormElms();
  });
};

export const validateForm = () => {
  if (todoFormElms[0].value === '') return false;
  return true;
};

export const attachValidClass = (isEdit) => {
  if (isEdit) addTaskBtnElm.classList.add('valid');
  todoFormElms[0].addEventListener('input', () =>
    todoFormElms[0].value !== ''
      ? addTaskBtnElm.classList.add('valid')
      : addTaskBtnElm.classList.remove('valid')
  );
};

export const emptyTodoFormElms = () => {
  todoFormElms = [];
};

export const formatDate = (dueDate) => {
  return format(new Date(dueDate), 'dd-MM-yyyy');
};

const applyDefaultDate = () => {
  return format(new Date(), 'yyyy-MM-dd');
};
