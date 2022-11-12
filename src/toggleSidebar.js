import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sdieBarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
  sdieBarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sdieBarOverlay.classList.remove('show');
});
