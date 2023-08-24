import { projectMenuElm } from '../UI/sidebar';
import { createProject } from '../UI/project';
import { removeTaskAdder, loadTasks, appendTaskByPriority } from './Tasks';
import { todoListContainerElm, createTodoList } from '../UI/todolist';
import { removeTodoList } from './remove';
import { emptyTodoFormElms } from './addtask';
import { isEdit } from './edit';
import { storageProjects } from './storage';
import { addTodayTasks } from './todayTodoList';

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
  storageProjects();
};

const appendStoredProject = () => {
  const todayTodoList = projects.find((project) => project.name === 'Today');
  const inboxTodoList = projects.find((project) => project.name === 'Inbox');
  projects.forEach((project) => {
    if (project !== todayTodoList && project !== inboxTodoList) {
      projectMenuElm.appendChild(
        createProject(project, project.name, project.color)
      );
    }
  });
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
  emptyTodoFormElms();
  isEdit = false;
};

export const loadProjects = () => {
  const inboxTodoList = projects.find((project) => (project.name = 'Inbox'));
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  inboxTodoList.tasks = JSON.parse(localStorage.getItem('inboxTodoTasks'));
  if (inboxTodoList.tasks === null) inboxTodoList.tasks = [];
  addTodayTasks();
  currentProject.tasks.forEach((task) => appendTaskByPriority(task));
  if (storedProjects !== null) {
    projects = projects.concat(storedProjects);
    appendStoredProject();
  }
};
