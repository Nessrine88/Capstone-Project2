// index.js
import './style.css';
import {
  postComments, postLikes, getLikes, apiLikes, displayComments,
} from './commentApi.js';

let pathImage;

async function fetchApi() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  return data;
}

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

    // nessrine code

    commentButton.addEventListener('click', async (e) => {
      const showInfo = arr[i].show;
      const showId = showInfo.id;
      const { score } = showInfo;
      const genres = showInfo.genres.join(', ');
      const { premiered } = showInfo;
      const { summary } = showInfo;
      const containerLike = e.target.parentElement;
      const imgPath = containerLike.parentElement.querySelector('img').src;
      const commentList = document.querySelector('.commentList');

      const getComments = async (itemId) => {
        try {
          const response = await fetch(`${apiLikes}/comments?item_id=${itemId}`);

          if (!response.ok) {
            throw new Error('Failed to fetch comments');
          }

          const responseData = await response.json();
          console.log('Successfully fetched comments:', responseData);

          displayComments(responseData, commentList);

          return responseData;
        } catch (error) {
          console.error('An error occurred while fetching comments:', error);
          throw error;
        }
      };

      const popupContainer = document.querySelector('.popupContainer');
      popupContainer.innerHTML = `

      <div class="popup">
      <div class='flex'>
      <div class="popup-header">
      <i class="bx bx-x close-icon"></i>
      </div>
      <div class="imageContainer"><img src="${imgPath}" /></div>
      <div class="informations">
      <h1>${nameShow}</h1>
      <hr>
       ${score !== undefined ? `<p>Score ${score}</p>` : ''}
       ${genres !== null ? `<p>Genres ${genres}</p>` : ''}
       ${premiered !== null ? `<p>Premiered ${premiered}</p>` : ''}
       ${summary !== null ? `<h2>Summary</h2><p> ${summary}</p>` : ''}
      <form id='commentForm'>
      <input id='commentName' type="text" placeholder="Name">
      <textarea id='commentTextarea' placeholder="write a comment"></textarea>
      <button class='c'>Comment</button>
      </form>
      </div>
      </div>
      <div class="comments-section">
      <h2>Comments</h2>
      <hr>
      <ul class="commentList"></ul>
      </div>
      </div>
 
        

      `;
      await getComments(showId);

      const commentBtn = document.querySelector('.c');

      commentBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const commentList = document.querySelector('.commentList');
        const commentName = document.getElementById('commentName').value;
        const commentText = document.getElementById('commentTextarea').value;
        const displayComment = document.createElement('div');
        displayComment.innerHTML = `
      <li id='lis'>${commentName}: ${commentText}</li>
`;
        commentList.appendChild(displayComment);
        await postComments(showId, commentName, commentText);
      });

      // popup close
      const popup = document.querySelector('.popup');
      const closeIcon = document.querySelector('.close-icon');

      closeIcon.addEventListener('click', () => {
        popup.remove(); // Remove the popup from the DOM
      });
      // add eventListener to the comment button of popup
    });
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