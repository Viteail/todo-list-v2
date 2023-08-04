import { createHeader } from './modules/UI/header';
import { createSidebar } from './modules/UI/sidebar';

const content = document.querySelector('#content');

createHeader(content);
createSidebar(content);
