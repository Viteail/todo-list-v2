import { currentProject } from '../Functions/projects';
import { createAddTask } from './taskAdder';

export let todoListElm;
export let todoListContainerElm;

export const createTodoListContainer = (content) => {
  const todoListContainer = document.createElement('div');
  todoListContainer.classList.add('todolist-container');
  content.appendChild(todoListContainer);
  todoListContainer.appendChild(createTodoList());
  todoListContainerElm = todoListContainer;
};

export const createTodoList = () => {
  const todoList = document.createElement('div');
  todoList.classList.add('todolist');
  todoList.appendChild(createProjectName());
  todoList.appendChild(createAddTask());
  todoListElm = todoList;
  return todoList;
};

const createProjectName = () => {
  const projectName = document.createElement('div');
  projectName.classList.add('project-name');
  projectName.textContent = currentProject.name;
  return projectName;
};
