// index.js
let pathImage;
import './style.css';

async function fetchApi() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  console.log(data);
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

    //nessrine code
    
   
    
    commentButton.addEventListener('click', async(e) => {
    
      let showInfo = arr[i].show;
      let showId = showInfo.id;
      const score = showInfo.score;
      const genres = showInfo.genres.join(', ');
      const premiered = showInfo.premiered;
      const summary = showInfo.summary;
      const containerLike = e.target.parentElement;
      const imgPath = containerLike.parentElement.querySelector('img').src;
     
  
      const popupContainer=document.querySelector('.popupContainer');
     popupContainer.innerHTML = `

     <div class="popup">
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
       
       <div class="comments-section">
       <h2>Comments</h2>
       <hr>
       <ul class="commentList"></ul>
     </div>
   
      
     </div>
   </div>
        

      `;

      const commentBtn=document.querySelector('.c');
commentBtn.addEventListener('click',async(e)=>{
e.preventDefault();
var commentName = document.getElementById('commentName').value;
      console.log(commentName);
      var commentText = document.getElementById('commentTextarea').value;

const displayComment = document.createElement('div');
displayComment.innerHTML = `
  <li>${commentName}: ${commentText}</li>
`;
commentList.appendChild(displayComment);

});
var commentName = document.getElementById('commentName').value;
      console.log(commentName);
      var commentText = document.getElementById('commentTextarea').value;
      
      let commentList=document.querySelector('.commentList');
      const getComments = async (itemId) => {
        try {
          const response = await fetch(`${apiLikes}/comments?item_id=${itemId}`);
      
          if (!response.ok) {
            throw new Error('Failed to fetch comments');
          }
      
          const responseData = await response.json(); // Read the response data once
          console.log('Successfully fetched comments:', responseData);
      
          for (let i = 0; i < responseData.length; i++) {
            const commentDiv = document.createElement('div');
            commentDiv.innerHTML = `<p>${responseData[i].comment}: ${responseData[i].username}</p>`;
            commentList.appendChild(commentDiv);
          }
      
          return responseData; // Return the JSON data
        } catch (error) {
          console.error('An error occurred while fetching comments:', error);
          throw error;
        }
      };
      
      const postComments = async (id, name, comment) => {
        try {
          const response = await fetch(`${apiLikes}/comments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ item_id: id, username: name, comment }),
          });
      
          const responseBody = await response.text(); // Read the response body once
      
          if (response.ok) {
            console.log('Comment posted successfully');
          } else {
            console.error('Failed to post comment:', response.statusText);
          }
      
          return responseBody; // Return the response body
        } catch (error) {
          console.error('An error occurred while posting the comment:', error);
          throw error;
        }
      };
      
      await postComments(showId, commentName, commentText);
      await getComments(showId);
      // popup close
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
  popup.remove(); // Remove the popup from the DOM
});
//add eventListener to the comment button of popup






  })
}}

const apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZkLkIUUV1lTLjqilepgf';

async function getLikes() {
  const response = await fetch(`${apiLikes}/likes`);
  return response.json();
}

async function postLikes(id) {
  const response = await fetch(`${apiLikes}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return response.text();
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