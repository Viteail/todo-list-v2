import { createAddTask } from '../UI/taskAdder';
import { modalElm } from '../UI/modal';
import { todoListElm } from '../UI/todolist';
import { emptyTodoFormElms } from './addtask';
import { currentProject, projects, setDefaultProject } from './projects';

export let todoFormElm;

export const cancelTodoForm = (btn) => {
  btn.addEventListener('click', () => removeTodoForm());
};

export const removeTodoForm = () => {
  todoListElm.appendChild(createAddTask());
  emptyTodoFormElms();
  todoFormElm.remove();
};

export const cancelModal = (btn) => {
  btn.addEventListener('click', () => removeModal());
};

export const addWindowEvent = () => {
  window.onclick = (e) => {
    if (e.target === modalElm) {
      removeModal();
    }
  };
};

export const removeModal = () => {
  modalElm.remove();
};

export const removeTodoList = () => {
  todoListElm.remove();
};

export const attachEventRemoveTask = (btn, taskElm) => {
  btn.addEventListener('click', () => {
    currentProject.tasks.forEach((task, index) => {
      if (task.elm === taskElm) {
        currentProject.tasks.splice(index, 1);
        removeElm(taskElm);
      }
    });
  });
};

export const attachEventRemoveProject = (btn, projectElm) => {
  btn.addEventListener('click', () => {
    projects.forEach((project, index) => {
      if (project.elm === projectElm) {
        projects.splice(index, 1);
        setDefaultProject(projectElm);
        removeElm(projectElm);
      }
    });
  });
};

const removeElm = (elm) => {
  elm.remove();
};
