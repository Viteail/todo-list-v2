import { projectMenuElm } from '../UI/sidebar';
import { createProject } from '../UI/project';

export class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
  }
}

export let projects = [
  { name: 'Inbox', tasks: [] },
  { name: 'Today', tasks: [] },
];

export let currentProject = projects[0];

export const appendProject = () => {
  let lastProject = projects[projects.length - 1];
  projectMenuElm.appendChild(
    createProject(lastProject.name, lastProject.color)
  );
};
