import './style.css';
import { fetchApi, getLikes, postLikes } from './modules/Api';

let pathImage;
async function loadImage() {
  const arr = await fetchApi();
  for (let i = 0; i < arr.length; i += 1) {
    const divConatinerSingleImage = document.createElement('div');
    pathImage = arr[i].show.image.medium;
    const img = document.createElement('img');
    const ContainerAllImages = document.querySelector('.hero');
    img.src = pathImage;
    divConatinerSingleImage.appendChild(img);
    ContainerAllImages.appendChild(divConatinerSingleImage);
    const containerLike = document.createElement('div');
    containerLike.classList.add('containerLike');
    const nameShow = arr[i].show.name;
    const nameShowparagraph = document.createElement('p');
    nameShowparagraph.textContent = nameShow;
    containerLike.appendChild(nameShowparagraph);
    divConatinerSingleImage.appendChild(containerLike);
    const containerHearth = document.createElement('div');
    containerHearth.classList.add('containerHearth');
    const Hearth = document.createElement('span');
    Hearth.classList.add('hearth');
    Hearth.innerHTML = "<i class='bx bxs-heart'></i>";
    Hearth.id = `show-${i + 1}`;
    containerHearth.appendChild(Hearth);
    containerLike.appendChild(containerHearth);

    const likeCountElement = document.createElement('span');
    likeCountElement.classList.add('likes_number');
    likeCountElement.textContent = '0';
    containerHearth.appendChild(likeCountElement);

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    containerLike.appendChild(commentButton);
  }
}

const containerAllImages = document.querySelector('.hero'); // Select the parent element

containerAllImages.addEventListener('click', async (event) => {
  const heartIcon = event.target.closest('.hearth');
  if (heartIcon) {
    const value = await postLikes(heartIcon.id);
    if (value === 'Created' || value === '201') {
      const likeCountElement = heartIcon.nextElementSibling;
      const currentCount = parseInt(likeCountElement.innerText, 10);
      likeCountElement.innerText = currentCount + 1;
    }
  }
});

async function initializeLikes() {
  const likeButtons = document.querySelectorAll('.hearth');
  const likesData = await getLikes();

  likeButtons.forEach(async (button) => {
    const showId = button.id;
    const likeData = likesData.find((item) => item.item_id === showId);
    if (likeData) {
      const likeCountElement = button.nextElementSibling;
      likeCountElement.innerText = likeData.likes;
    }
  });
}

(async () => {
  await loadImage();
  await initializeLikes(); // Wait for the likes to be initialized
})();
