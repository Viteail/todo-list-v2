import { createAddTask } from '../UI/taskAdder';
import { modalElm } from '../UI/modal';
import { todoListElm } from '../UI/todolist';
import { emptyTodoFormElms } from './addtask';
import { currentProject, projects, setDefaultProject } from './projects';
import { todoFormElm } from '../UI/todoForm';
import { editedTaskObj } from './edit';
import { appendEditedTask } from './Tasks';

export const cancelTodoForm = (btn, isEdit) => {
  btn.addEventListener('click', () => removeTodoForm(isEdit));
};

export const removeTodoForm = (isEdit) => {
  if (!isEdit) todoListElm.appendChild(createAddTask());
  if (isEdit) appendEditedTask(editedTaskObj);
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

export const removeElm = (elm) => {
  elm.remove();
};
