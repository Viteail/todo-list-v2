import { appendImg } from '../Functions/checklist';

export const createTask = (args, priority) => {
  const task = document.createElement('div');
  task.classList.add('task');
  task.appendChild(createCheckListWrapper(priority));
  task.appendChild(createTaskInfoWrapper(args));
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
  checkListImg.src = appendImg(priority);
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
  console.log(dueDate)
  dueDateContainer.textContent = dueDate;
  return dueDateContainer;
};
