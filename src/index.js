import './style.css';

let pathImage;
async function fetchApi() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  return data;
}

async function loadImage() {
  const arr = await fetchApi();
  for (let i = 0; i < arr.length; i += 1) {
    pathImage = arr[i].show.image.medium;
    const img = document.createElement('img');
    const body = document.querySelector('.hero');
    img.src = pathImage;
    body.appendChild(img);
  }
}

loadImage();
