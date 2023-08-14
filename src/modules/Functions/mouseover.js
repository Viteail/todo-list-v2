import { taskElm, editBtnElm, removeTaskBtnElm } from '../UI/task';

export const showTaskOptions = () => {
  let taskOptionsDOM = [];
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
  let firstImg = 'icons/plus-black.svg';
  let secondImg = 'icons/plus.svg';
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
  let firstImg = 'icons/delete-black.svg';
  let secondImg = 'icons/delete.svg';
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
  let firstImg = 'icons/edit-black.svg';
  let secondImg = 'icons/edit.svg';
  changeImgOnHover(editBtn, firstImg, secondImg);
};

export const addEventRemoveBtn = (removeBtn) => {
  let firstImg = 'icons/trash-red.svg';
  let secondImg = 'icons/trash.svg';
  changeImgOnHover(removeBtn, firstImg, secondImg);
};

const changeImgOnHover = (btn, firstImg, secondImg) => {
  let img = btn.firstElementChild;
  btn.addEventListener('mouseover', () => (img.src = firstImg));
  btn.addEventListener('mouseout', () => (img.src = secondImg));
};
