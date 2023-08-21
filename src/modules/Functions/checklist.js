import { currentProject } from './projects';
import { removeElm } from './remove';

export const addCheckListEvent = (checkListBtn, taskObj) => {
  const checkListImg = checkListBtn.firstElementChild;
  checkListBtn.addEventListener('click', () => {
    checkListImg.classList.add(`${taskObj.priority}`);
    checkListImg.style.animation = 'check 250ms linear';
  });
  checkListImg.addEventListener('animationend', () => {
    currentProject.tasks.forEach((item, index) => {
      if (item.elm === taskObj.elm) currentProject.tasks.splice(index, 1);
    });
    removeElm(taskObj.elm);
  });
};
