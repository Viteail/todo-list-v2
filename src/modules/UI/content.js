import { contentElem } from '../..';

export const createContent = (container) => {
  const content = document.createElement('div');
  content.classList.add('content');
  container.appendChild(content);
  contentElem = content;
};
