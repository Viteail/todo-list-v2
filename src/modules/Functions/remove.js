import { createAddTask } from '../UI/taskAdder';
import { modalElm } from '../UI/modal';
import { todoListElm } from '../UI/todolist';
import { emptyTodoFormElms } from './addtask';
import { currentProject } from './projects';

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
        removeTaskDOM(taskElm);
      }
    });
  });
};

const removeTaskDOM = (taskElm) => {
  taskElm.remove();
};
