const commentList = document.querySelector('.commentList');
const apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZkLkIUUV1lTLjqilepgf';
console.log(commentList);
function displayComments(responseData, commentList) {
  for (let i = 0; i < responseData.length; i += 1) {
    commentList = document.querySelector('.commentList');
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `<span>comment </span> ${i + 1}:<span>${responseData[i].username}: ${responseData[i].comment}</span>`;
    commentList.appendChild(commentDiv);
  }
}

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

export {
  postComments, postLikes, getLikes, apiLikes, displayComments,
};
