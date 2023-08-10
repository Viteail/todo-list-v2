import { createModal } from '../UI/modal';
import { removeModal } from './cancel';
import { Project, projects, appendProject } from './projects';

export let projectName;
export let projectColor;

export const addProjectEvent = (projectAdder, container) => {
  projectAdder.addEventListener('click', () => createModal(container));
};

export const addProject = (addProjectBtn) => {
  attachValidClass(addProjectBtn);
  addProjectBtn.addEventListener('click', () => {
    if (!validateForm()) return;
    let project = new Project(projectName.value, projectColor.value);
    projects.push(project);
    appendProject();
    removeModal();
    console.log(projects);
  });
};

const validateForm = () => {
  if (projectName.value === '') return false;
  return true;
};

const attachValidClass = (addProjectBtn) => {
  projectName.addEventListener('input', () =>
    projectName.value !== ''
      ? addProjectBtn.classList.add('valid')
      : addProjectBtn.classList.remove('valid')
  );
};
