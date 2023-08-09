let pathImage;
async function fetchApi() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
   console.log(data)
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
    containerHearth.appendChild(Hearth);
    containerLike.appendChild(containerHearth);
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    containerLike.appendChild(commentButton);

    //Nessrine Code
  
    commentButton.addEventListener('click', (e) => {
      const showInfo = arr[i].show;
      const score = showInfo.score;
      const genres = showInfo.genres.join(', ');
      const premiered = showInfo.premiered;
      const summary = showInfo.summary;
      const containerLike = e.target.parentElement;
      const imgPath = containerLike.parentElement.querySelector('img').src;
      const popupContainer=document.querySelector('.popupContainer')
     popupContainer.innerHTML = `

      <div class="popup">
      <div class="popup-header">
      <i class="bx bx-x close-icon"></i>
      </div>
      <div class="imageContainer"><img src="${imgPath}" /></div>
        <div class="informations">
        <h1>${nameShow}</h1>
        <p>Score ${score}</p>
        <p>Genres${genres}</p>
        <p>Premiered ${premiered}</p>
        <p>Summary ${summary}</p>
        <form>
        <textarea placeholder="write a comment"></textarea>
        </form>
        <button class='commentBtn'>Comment</button>
        </div>
        </div>

      `;
// Inside the loadImage function, after adding the HTML
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
  popup.remove(); // Remove the popup from the DOM
});

    });
  }
}




export { loadImage, fetchApi };