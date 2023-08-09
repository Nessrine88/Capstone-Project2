import { loadImage } from "./Api.js"; 
const commentButton = document.querySelector('.comment-button');
commentButton.addEventListener('click', (e) => {
  const containerLike = e.target.parentElement;
  const imgPath = containerLike.parentElement.querySelector('img').src;
  containerLike.innerHTML = `
    <img src="${imgPath}" />
  
  `;

  console.log('click')
});

loadImage();
