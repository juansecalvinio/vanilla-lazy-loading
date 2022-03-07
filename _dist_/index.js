import { registerImage } from './lazy.js';
import { createImageNode } from './utils.js';

// Load all images when page is ready
const allImages = document.querySelectorAll('img[data-src]');
allImages.forEach(registerImage);

// Add new images
const imageContainer = document.querySelector('#images');
const addButton = document.querySelector('button[type="submit"]');
addButton.addEventListener('click', async () => {
  const [node, image] = await createImageNode();
  registerImage(image);
  imageContainer.append(node);
});

// Clean all images
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});
