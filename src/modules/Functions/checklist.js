import { currentProject } from './projects';
import { removeElm } from './remove';

export const addCheckListEvent = () => {
  const lastTask = currentProject.tasks[currentProject.tasks.length - 1];
  const checkListImg = lastTask.checklist.firstElementChild;
  lastTask.checklist.addEventListener('click', () => {
    checkListImg.classList.add(`${lastTask.priority}`);
    checkListImg.style.animation = 'check 250ms linear';
  });
  checkListImg.addEventListener('animationend', () => {
    currentProject.tasks.splice(lastTask, 1);
    removeElm(lastTask.elm);
  });
};
