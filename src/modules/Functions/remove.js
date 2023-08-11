import { createAddTask } from '../UI/taskAdder';
import { modalElm } from '../UI/modal';
import { todoListElm } from '../UI/todolist';
import { emptyTodoFormElms } from './addtask';

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
