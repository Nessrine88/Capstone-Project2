
let pathImage;
const app_id = 'your_app_id_here'; // Replace with the actual app ID

let apiBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'; // Replace with your actual API base URL
const commentData = {};

async function fetchApi() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
   console.log(data)
  return data;
 
}

function updateCommentList(popupContainer, showId) {
  const commentList = popupContainer.querySelector('.commentList');
  commentList.innerHTML = '';

  if (commentData[showId]) {
    commentData[showId].forEach((comment) => {
      const commentParagraph = document.createElement('li');
      commentParagraph.classList.add('commentLi');
      commentParagraph.textContent = `${comment.name}: ${comment.text}`;
      commentList.appendChild(commentParagraph);
    });
  }
};

async function loadCommentsFromApi(showId) {
  try {
    const response = await fetch(`${apiBaseUrl}comments?item_id=${showId}`);
    if (response.status === 200) {
      const data = await response.json();
      return data; // Return the fetched comments array
    } else {
      console.error('Failed to fetch comments from API:', response.statusText);
      return []; // Return an empty array if fetching comments fails
    }
  } catch (error) {
    console.error('Error loading comments from API:', error);
    return []; // Return an empty array if an error occurs
  }
};





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
    containerHearth.appendChild(Hearth);
    containerLike.appendChild(containerHearth);
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    containerLike.appendChild(commentButton);

    //Nessrine Code
   
  
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
      await loadCommentsFromApi(showId);
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
     
      updateCommentList(popupContainer, showId);

      // Define the base URL for the API


async function postCommentToApi(showId, commentText) {
  const apiUrl = `${apiBaseUrl}apps/`; // Assuming this endpoint handles comment submissions
 

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        showId: showId,
        comment: commentText
      })
    });

    return response;
  } catch (error) {
    console.error('Error posting comment to API:', error);
    throw error;
  }
}


const commentForm=document.getElementById('commentForm')
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
     
    const commentTextarea=document.getElementById('commentTextarea');
    const commentName=document.getElementById('commentName').value;
        const commentText = commentTextarea.value;
        // Send comment data to the API
        const response = await postCommentToApi(showInfo.id, commentText); // You need to implement this function
        if (response.status === 201) {
          if (!commentData[showId]) {
            commentData[showId] = [];
          }
          commentData[showId].push({ name: commentName, text: commentText });
     // Update the comments list in the popup
 updateCommentList(popupContainer, showId);
         
    
          // Clear the form
          commentTextarea.value = '';

        } else {
          // Handle error case
          console.error('Failed to post comment to API');
        }
      });
// popup close
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
  popup.remove(); // Remove the popup from the DOM
});

    });

    
  }
}




export { loadImage, fetchApi };

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
export { fetchApi, postLikes, getLikes };

