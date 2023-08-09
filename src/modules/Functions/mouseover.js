export let taskOptionsDOM = [];
export let editBtnElm;
export let removeBtnElm;
export let taskElm;

export const showTaskOptions = () => {
  taskOptionsDOM.push({
    task: taskElm,
    edit: editBtnElm,
    remove: removeBtnElm,
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
  const addProjectBtn = projectsContainer.lastElementChild;
  projectsContainer.addEventListener('mouseover', () =>
    addProjectBtn.classList.remove('invisible')
  );
  projectsContainer.addEventListener('mouseout', () =>
    addProjectBtn.classList.add('invisible')
  );
  changeImgOnHover(addProjectBtn);
};

const changeImgOnHover = (addProjectBtn) => {
  let addProjectImg = addProjectBtn.firstElementChild;
  addProjectBtn.addEventListener(
    'mouseover',
    () => (addProjectImg.src = 'icons/plus-black.svg')
  );
  addProjectBtn.addEventListener(
    'mouseout',
    () => (addProjectImg.src = 'icons/plus.svg')
  );
};
