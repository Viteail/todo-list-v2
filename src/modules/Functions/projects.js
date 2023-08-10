import { projectMenuElm } from '../UI/sidebar';
import { createProject } from '../UI/project';

export class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
    this.elm = '';
  }
}

export let projects = [];

export let currentProject = projects[0];

export const appendProject = () => {
  let lastProject = projects[projects.length - 1];
  projectMenuElm.appendChild(
    createProject(lastProject, lastProject.name, lastProject.color)
  );
};

export const toggleCurrentProject = (project) => {
  project.addEventListener('click', () => {
    if (project.classList.contains('active-project')) return;
    currentProject = projects.filter((item) => project === item.elm);
    currentProject = currentProject[0];
    attachActiveProject();
    console.log(currentProject);
  });
};

const attachActiveProject = () => {
  projects.forEach((project) => project.elm.classList.remove('active-project'));
  currentProject.elm.classList.add('active-project');
};
