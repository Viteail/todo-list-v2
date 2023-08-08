import { createAddTask } from '../UI/taskAdder';

export let todoListElm;
export let todoFormElm;

export const cancelTodoForm = (btn) => {
  btn.addEventListener('click', () => removeTodoForm());
};

export const removeTodoForm = () => {
  todoListElm.appendChild(createAddTask());
  todoFormElm.remove();
};
