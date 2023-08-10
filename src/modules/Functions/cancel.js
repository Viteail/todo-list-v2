import { createAddTask } from '../UI/taskAdder';
import { modalElm } from '../UI/modal';

export let todoListElm;
export let todoFormElm;

export const cancelTodoForm = (btn) => {
  btn.addEventListener('click', () => removeTodoForm());
};

export const removeTodoForm = () => {
  todoListElm.appendChild(createAddTask());
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
