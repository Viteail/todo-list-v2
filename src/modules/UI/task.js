import {
  editBtnElm,
  removeTaskBtnElm,
  taskElm,
  showTaskOptions,
} from '../Functions/mouseover';

import { attachEventRemoveTask } from '../Functions/remove';

export const createTask = (args, priority, lastTask) => {
  const task = document.createElement('div');
  task.classList.add('task');
  task.appendChild(createCheckListWrapper(priority));
  task.appendChild(createTaskInfoWrapper(args));
  task.appendChild(createEditContainer());
  task.appendChild(createRemoveContainer(task));
  taskElm = task;
  showTaskOptions();
  lastTask.elm = task;
  return task;
};

const createCheckListWrapper = (priority) => {
  const checkListWrapper = document.createElement('div');
  checkListWrapper.classList.add('checklist-wrapper');
  checkListWrapper.appendChild(createCheckListBtn(priority));
  return checkListWrapper;
};

const createCheckListBtn = (priority) => {
  const checkListBtn = document.createElement('button');
  checkListBtn.classList.add('checklist-btn');
  checkListBtn.appendChild(createCheckListImg(priority));
  return checkListBtn;
};

const createCheckListImg = (priority) => {
  const checkListImg = document.createElement('img');
  checkListImg.classList.add('checklist-img');
  checkListImg.src = `icons/checklist-${priority}.svg`;
  return checkListImg;
};

const createTaskInfoWrapper = (args) => {
  const { name, desc, dueDate } = args;
  const taskInfoWrapper = document.createElement('div');
  taskInfoWrapper.classList.add('taskinfo-wrapper');
  taskInfoWrapper.appendChild(createNameContainer(name));
  taskInfoWrapper.appendChild(createDescContainer(desc));
  taskInfoWrapper.appendChild(createDueDateContainer(dueDate));
  return taskInfoWrapper;
};

const createNameContainer = (name) => {
  const nameContainer = document.createElement('div');
  nameContainer.classList.add('name-container');
  nameContainer.textContent = name;
  return nameContainer;
};

const createDescContainer = (desc) => {
  const descContainer = document.createElement('div');
  descContainer.classList.add('desc-container');
  descContainer.textContent = desc;
  return descContainer;
};

const createDueDateContainer = (dueDate) => {
  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('duedate-container');
  dueDateContainer.textContent = dueDate;
  return dueDateContainer;
};

const createEditContainer = () => {
  const editContainer = document.createElement('div');
  editContainer.classList.add('edit-container');
  editContainer.appendChild(createEditBtn());
  return editContainer;
};

const createEditBtn = () => {
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn', 'invisible');
  editBtn.appendChild(createEditImg());
  editBtnElm = editBtn;
  return editBtn;
};

const createEditImg = () => {
  const editImg = document.createElement('img');
  editImg.classList.add('edit-img');
  editImg.src = 'icons/edit.svg';
  return editImg;
};

const createRemoveContainer = (taskElm) => {
  const removeContainer = document.createElement('div');
  removeContainer.classList.add('remove-container');
  removeContainer.appendChild(createRemoveBtn(taskElm));
  return removeContainer;
};

const createRemoveBtn = (taskElm) => {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn', 'invisible');
  removeBtn.appendChild(createRemoveImg());
  removeTaskBtnElm = removeBtn;
  attachEventRemoveTask(removeBtn, taskElm);
  return removeBtn;
};

const createRemoveImg = () => {
  const removeImg = document.createElement('img');
  removeImg.classList.add('remove-img');
  removeImg.src = 'icons/trash.svg';
  return removeImg;
};
