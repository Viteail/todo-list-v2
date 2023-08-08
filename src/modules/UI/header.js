export const createHeader = (container) => {
  const header = document.createElement('div');
  header.classList.add('header');
  container.appendChild(header);
  header.appendChild(createIcon());
  header.appendChild(createTitle());
};

const createIcon = () => {
  const icon = document.createElement('img');
  icon.classList.add('checklist-icon');
  icon.src = 'icons/checklist.svg';
  return icon;
};

const createTitle = () => {
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = 'Todo List';
  return title;
};
