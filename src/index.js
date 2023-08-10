import './style.css';
import { loadImage } from './modules/Api';
// index.js

const containerAllImages = document.querySelector('.hero'); // Select the parent element
containerAllImages.addEventListener('click', (event) => {
  const heartIcon = event.target.closest('.hearth');
  if (heartIcon) {
    console.log('Heart clicked');
    heartIcon.style.color = 'red';
  
    // localStorage.setItem('colorCurrentItem','red');
  }
});

loadImage();
