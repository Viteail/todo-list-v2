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
