async function fetchApi() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  return data;
}
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