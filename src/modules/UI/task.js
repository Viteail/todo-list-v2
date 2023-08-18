import {
  showTaskOptions,
  addEventEditBtn,
  addEventRemoveBtn,
  addEventCheckListBtn,
} from '../Functions/mouseover';
import { attachEventRemoveTask } from '../Functions/remove';
import { editTask } from '../Functions/edit';
import { addCheckListEvent } from '../Functions/checklist';

export let editBtnElm;
export let removeTaskBtnElm;
export let taskElm;

export const createTask = (args, priority, taskObj) => {
  const task = document.createElement('div');
  task.classList.add('task');
  task.appendChild(createCheckListWrapper(priority, taskObj));
  task.appendChild(createTaskInfoWrapper(args));
  task.appendChild(createEditContainer());
  task.appendChild(createRemoveContainer(task));
  taskElm = task;
  showTaskOptions();
  taskObj.elm = task;
  editTask();
  addCheckListEvent();
  return task;
};

const createCheckListWrapper = (priority, taskObj) => {
  const checkListWrapper = document.createElement('div');
  checkListWrapper.classList.add('checklist-wrapper');
  checkListWrapper.appendChild(createCheckListBtn(priority, taskObj));
  return checkListWrapper;
};

const createCheckListBtn = (priority, taskObj) => {
  const checkListBtn = document.createElement('button');
  checkListBtn.classList.add('checklist-btn');
  checkListBtn.appendChild(createCheckListImg(priority));
  checkListBtn.appendChild(createCheckImg(priority));
  taskObj.checklist = checkListBtn;
  addEventCheckListBtn(checkListBtn, priority);
  return checkListBtn;
};

const createCheckListImg = (priority) => {
  const checkListImg = document.createElement('img');
  checkListImg.classList.add('checklist-img');
  checkListImg.src = `icons/checklist-${priority}.svg`;
  return checkListImg;
};

const createCheckImg = (priority) => {
  const checkImg = document.createElement('img');
  checkImg.classList.add('check-img', 'invisible');
  checkImg.src = `icons/check-${priority}.svg`;
  return checkImg;
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
  addEventEditBtn(editBtn);
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
  addEventRemoveBtn(removeBtn);
  return removeBtn;
};

const createRemoveImg = () => {
  const removeImg = document.createElement('img');
  removeImg.classList.add('remove-img');
  removeImg.src = 'icons/trash.svg';
  return removeImg;
};
