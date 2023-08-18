import { projectName, projectColor, addProject } from '../Functions/addproject';
import { cancelModal, addWindowEvent } from '../Functions/remove';

export let modalElm;

export const createModal = (container) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.appendChild(createModalContent());
  modalElm = modal;
  addWindowEvent();
  container.appendChild(modal);
};

const createModalContent = () => {
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.appendChild(createHeaderModal());
  modalContent.appendChild(createInputsWrapper());
  modalContent.appendChild(createButtonsContainer());
  return modalContent;
};

const createHeaderModal = () => {
  const headerModal = document.createElement('div');
  headerModal.classList.add('header-modal');
  headerModal.textContent = 'Add project';
  return headerModal;
};

const createInputsWrapper = () => {
  const inputsWrapper = document.createElement('div');
  inputsWrapper.classList.add('inputs-wrapper');
  inputsWrapper.appendChild(createInputNameContainer());
  inputsWrapper.appendChild(createInputColorContainer());
  return inputsWrapper;
};

const createInputNameContainer = () => {
  const inputNameContainer = document.createElement('div');
  inputNameContainer.classList.add('inputname-container');
  inputNameContainer.appendChild(createInputNameLabel());
  inputNameContainer.appendChild(createInputName());
  return inputNameContainer;
};

const createInputNameLabel = () => {
  const inputNameLabel = document.createElement('div');
  inputNameLabel.classList.add('inputname-label');
  inputNameLabel.textContent = 'Name';
  return inputNameLabel;
};

const createInputName = () => {
  const inputName = document.createElement('input');
  inputName.classList.add('projectname-input');
  projectName = inputName;
  return inputName;
};

const createInputColorContainer = () => {
  const inputColorContainer = document.createElement('div');
  inputColorContainer.classList.add('inputcolor-container');
  inputColorContainer.appendChild(createInputColorLabel());
  inputColorContainer.appendChild(createInputColor());
  return inputColorContainer;
};

const createInputColorLabel = () => {
  const inputColorLabel = document.createElement('div');
  inputColorLabel.classList.add('inputcolor-label');
  inputColorLabel.textContent = 'Color';
  return inputColorLabel;
};

const createInputColor = () => {
  const inputColor = document.createElement('input');
  inputColor.type = 'color';
  inputColor.classList.add('projectcolor-input');
  projectColor = inputColor;
  return inputColor;
};

const createButtonsContainer = () => {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('projectbuttons-container');
  buttonsContainer.appendChild(createCancelBtn());
  buttonsContainer.appendChild(createAddProjectBtn());
  return buttonsContainer;
};

const createCancelBtn = () => {
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('project-cancel-btn');
  cancelBtn.textContent = 'Cancel';
  cancelModal(cancelBtn);
  return cancelBtn;
};

const createAddProjectBtn = () => {
  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('project-add-btn');
  addProjectBtn.textContent = 'Add';
  addProject(addProjectBtn);
  return addProjectBtn;
};
