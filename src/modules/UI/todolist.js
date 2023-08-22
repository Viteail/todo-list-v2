import { currentProject } from '../Functions/projects';
import { createAddTask } from './taskAdder';

export let todoListElm;
export let todoListContainerElm;
export let highPriorityContainerElm;
export let mediumPriorityContainerElm;
export let lowPriorityContainerElm;

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
  todoList.appendChild(createHighPriorityContainer());
  todoList.appendChild(createMediumPriorityContainer());
  todoList.appendChild(createLowPriorityContainer());
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

const createHighPriorityContainer = () => {
  const highPriorityContainer = document.createElement('div');
  highPriorityContainer.classList.add('high-priority-container');
  highPriorityContainerElm = highPriorityContainer;
  return highPriorityContainer;
};

const createMediumPriorityContainer = () => {
  const mediumPriorityContainer = document.createElement('div');
  mediumPriorityContainer.classList.add('medium-priority-container');
  mediumPriorityContainerElm = mediumPriorityContainer;
  return mediumPriorityContainer;
};

const createLowPriorityContainer = () => {
  const lowPriorityContainer = document.createElement('div');
  lowPriorityContainer.classList.add('low-priority-container');
  lowPriorityContainerElm = lowPriorityContainer;
  return lowPriorityContainer;
};
