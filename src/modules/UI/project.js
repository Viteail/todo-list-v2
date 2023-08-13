import { toggleCurrentProject } from '../Functions/projects';
import { showRemoveBtnProject } from '../Functions/mouseover';
import { attachEventRemoveProject } from '../Functions/remove';

export const createProject = (lastProject, name, color) => {
  const project = document.createElement('div');
  project.classList.add('project');
  project.appendChild(createColorContainer(color));
  project.appendChild(createNameContainer(name));
  project.appendChild(createRemoveBtn(project));
  lastProject.elm = project;
  toggleCurrentProject(project);
  showRemoveBtnProject(project);
  return project;
};

const createColorContainer = (color) => {
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('project-color-container');
  colorContainer.appendChild(createColorDiv(color));
  return colorContainer;
};

const createColorDiv = (color) => {
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('color-div');
  colorDiv.style.background = color;
  return colorDiv;
};

const createNameContainer = (name) => {
  const nameContainer = document.createElement('div');
  nameContainer.classList.add('project-name-container');
  nameContainer.textContent = name;
  return nameContainer;
};

const createRemoveBtn = (project) => {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('project-remove-btn', 'invisible');
  removeBtn.appendChild(createRemoveImg());
  attachEventRemoveProject(removeBtn, project);
  return removeBtn;
};

const createRemoveImg = () => {
  const removeImg = document.createElement('img');
  removeImg.classList.add('project-remove-img');
  removeImg.src = 'icons/delete.svg';
  return removeImg;
};
