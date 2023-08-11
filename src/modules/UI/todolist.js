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
  // todoList.appendChild(createPriorityHighContainer());
  // todoList.appendChild(createPriorityMediumContainer());
  // todoList.appendChild(createPriorityLowContainer());
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

const createPriorityHighContainer = () => {
  const priorityHighContainer = document.createElement('div');
  priorityHighContainer.classList.add('priorityhigh-container', 'invisible');
  priorityHighContainer.appendChild(createPriorityHighText());
  return priorityHighContainer;
};

const createPriorityHighText = () => {
  const priorityHighText = document.createElement('div');
  priorityHighText.classList.add('priorityhigh-text');
  priorityHighText.textContent = 'Priority High';
  return priorityHighText;
};

const createPriorityMediumContainer = () => {
  const priorityMediumContainer = document.createElement('div');
  priorityMediumContainer.classList.add(
    'prioritymedium-container',
    'invisible'
  );
  priorityMediumContainer.appendChild(createPriorityMediumText());
  return priorityMediumContainer;
};

const createPriorityMediumText = () => {
  const priorityMediumText = document.createElement('div');
  priorityMediumText.classList.add('prioritymedium-text');
  priorityMediumText.textContent = 'Priority Medium';
  return priorityMediumText;
};

const createPriorityLowContainer = () => {
  const priorityLowContainer = document.createElement('div');
  priorityLowContainer.classList.add('prioritylow-container', 'invisible');
  priorityLowContainer.appendChild(createPriorityLowText());
  return priorityLowContainer;
};

const createPriorityLowText = () => {
  const priorityLowText = document.createElement('div');
  priorityLowText.classList.add('prioritylow-text');
  priorityLowText.textContent = 'Priority Low';
  return priorityLowText;
};
