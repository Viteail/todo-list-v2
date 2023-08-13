import { projectMenuElm } from '../UI/sidebar';
import { createProject } from '../UI/project';
import { removeTaskAdder, loadTasks } from './Tasks';
import { todoListContainerElm, createTodoList } from '../UI/todolist';
import { removeTodoList } from './remove';

export class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
    this.elm = '';
  }
}

export let projects = [];

export let currentProject;

export const appendProject = () => {
  let lastProject = projects[projects.length - 1];
  projectMenuElm.appendChild(
    createProject(lastProject, lastProject.name, lastProject.color)
  );
};

export const toggleCurrentProject = (project) => {
  project.addEventListener('click', () => {
    if (
      project.classList.contains('active-project') ||
      projects.filter((item) => project === item.elm).length === 0
    )
      return;
    currentProject = projects.filter((item) => project === item.elm);
    currentProject = currentProject[0];
    loadProjectContent();
  });
};

export const setDefaultProject = (project) => {
  if (currentProject.elm !== project) return;
  currentProject = projects[0];
  loadProjectContent();
};

const attachActiveProject = () => {
  projects.forEach((project) => project.elm.classList.remove('active-project'));
  currentProject.elm.classList.add('active-project');
};

const loadProjectContent = () => {
  attachActiveProject();
  removeTodoList();
  todoListContainerElm.appendChild(createTodoList());
  removeTaskAdder();
  loadTasks();
};
