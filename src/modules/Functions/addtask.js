import { createTodoForm } from '../UI/todoForm';
import { removeTodoForm } from './remove';
import { Task, appendTask, appendEditedTask } from './Tasks';
import format from 'date-fns/format';
import { currentProject, projects } from './projects';
import { isEdit, editedTaskObj } from './edit';
import { getTodayDate } from './todayTodoList';
import { storageProjects } from './storage';

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
  const inboxTodoList = projects.find((project) => project.name === 'Inbox');
  const todayTodoList = projects.find((project) => project.name === 'Today');
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
    if (currentProject === todayTodoList) {
      inboxTodoList.tasks.push(todo);
      if (todo.dueDate !== getTodayDate()) {
        removeTodoForm();
        emptyTodoFormElms();
        storageProjects();
        return;
      }
    }
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
