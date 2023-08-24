import { createHeader } from './modules/UI/header';
import { createSidebar } from './modules/UI/sidebar';
import { createContent } from './modules/UI/content';
import { createTodoListContainer } from './modules/UI/todolist';
import { loadProjects } from './modules/Functions/projects';

export let contentElem;

const container = document.querySelector('#container');

createHeader(container);
createContent(container);
createSidebar(contentElem);
createTodoListContainer(contentElem);
loadProjects();
