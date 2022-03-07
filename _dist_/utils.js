const getImageUrl = async () => {
  const response = await fetch('https://randomfox.ca/floof/');
  const data = await response.json();
  return data.image;
}

export const createImageNode = async () => {
  const container = document.createElement('div');
  container.className = 'p-4';

  const image = document.createElement('img');
  const imageUrl = await getImageUrl();
  image.className = 'mx-auto rounded-md bg-gray-300';
  image.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  image.dataset.src = imageUrl;
  image.width = '320';

  container.appendChild(image);

  return [container, image];
};
