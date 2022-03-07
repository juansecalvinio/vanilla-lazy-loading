let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => {
  const nodeImg = intersectionEntry.target;
  nodeImg.src = nodeImg.dataset.src;
  nodeImg.onload = () => {
    loadedImages += 1;
    logState();
  }
  
  observer.unobserve(nodeImg);
}


// Create function registerImage
export const registerImage = (image) => {
  // IntersectionObserver -> observer(image)
  observer.observe(image);
  totalImages += 1;
  logState();
}

function logState() {
  console.log(`⚪️ Total imágenes: ${totalImages}`);
  console.log(`🟢 Imágenes cargadas: ${totalImages}`);
  console.log('================================');
}