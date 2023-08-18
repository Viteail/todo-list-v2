import { taskElm, editBtnElm, removeTaskBtnElm } from '../UI/task';

export let taskOptionsDOM = [];

export const showTaskOptions = () => {
  taskOptionsDOM.push({
    task: taskElm,
    edit: editBtnElm,
    remove: removeTaskBtnElm,
  });

  taskOptionsDOM.forEach((item) =>
    addMouseEventTask(item.task, item.edit, item.remove)
  );
};

const addMouseEventTask = (task, edit, remove) => {
  task.addEventListener('mouseover', () => {
    edit.classList.remove('invisible');
    remove.classList.remove('invisible');
  });
  task.addEventListener('mouseout', () => {
    edit.classList.add('invisible');
    remove.classList.add('invisible');
  });
};

export const showAddProject = (projectsContainer) => {
  const firstImg = 'icons/plus-black.svg';
  const secondImg = 'icons/plus.svg';
  const addProjectBtn = projectsContainer.lastElementChild;
  projectsContainer.addEventListener('mouseover', () =>
    addProjectBtn.classList.remove('invisible')
  );
  projectsContainer.addEventListener('mouseout', () =>
    addProjectBtn.classList.add('invisible')
  );
  changeImgOnHover(addProjectBtn, firstImg, secondImg);
};

export const showRemoveBtnProject = (project) => {
  const firstImg = 'icons/delete-black.svg';
  const secondImg = 'icons/delete.svg';
  const removeBtn = project.lastElementChild;
  project.addEventListener('mouseover', () =>
    removeBtn.classList.remove('invisible')
  );
  project.addEventListener('mouseout', () =>
    removeBtn.classList.add('invisible')
  );
  changeImgOnHover(removeBtn, firstImg, secondImg);
};

export const addEventEditBtn = (editBtn) => {
  const firstImg = 'icons/edit-black.svg';
  const secondImg = 'icons/edit.svg';
  changeImgOnHover(editBtn, firstImg, secondImg);
};

export const addEventRemoveBtn = (removeBtn) => {
  const firstImg = 'icons/trash-red.svg';
  const secondImg = 'icons/trash.svg';
  changeImgOnHover(removeBtn, firstImg, secondImg);
};

export const addEventCheckListBtn = (checkListBtn, priority) => {
  if (priority === 'low') {
  }
};

const changeImgOnHover = (btn, firstImg, secondImg) => {
  let img = btn.firstElementChild;
  btn.addEventListener('mouseover', () => (img.src = firstImg));
  btn.addEventListener('mouseout', () => (img.src = secondImg));
};
