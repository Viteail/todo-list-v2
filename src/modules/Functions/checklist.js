import { currentProject, projects } from './projects';
import { removeElm } from './remove';
import { storageProjects } from './storage';

export const addCheckListEvent = (checkListBtn, taskObj) => {
  const todayTodoList = projects.find((project) => project.name === 'Today');
  const checkListImg = checkListBtn.firstElementChild;
  checkListBtn.addEventListener('click', () => {
    checkListImg.classList.add(`${taskObj.priority}`);
    checkListImg.style.animation = 'check 250ms linear';
  });
  checkListImg.addEventListener('animationend', () => {
    if (currentProject === todayTodoList) {
      projects.forEach((project) => {
        if (project !== todayTodoList && project.tasks.includes(taskObj))
          project.tasks.splice(project.tasks.indexOf(taskObj), 1);
      });
    }
    if (
      currentProject !== todayTodoList &&
      todayTodoList.tasks.includes(taskObj)
    ) {
      todayTodoList.tasks.splice(todayTodoList.tasks.indexOf(taskObj), 1);
    }
    currentProject.tasks.forEach((item, index) => {
      if (item.elm === taskObj.elm) currentProject.tasks.splice(index, 1);
    });
    removeElm(taskObj.elm);
    storageProjects();
  });
};
