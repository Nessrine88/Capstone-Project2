/**
 * @jest-environment jsdom
 */

import displayComments from '../commentApi.js';

document.body.innerHTML = `
      <div>
        <h2 class="commentTitle"></h2>
        <ul class="commentList"></ul>
      </div>`;

describe('displayComments function', () => {
  test('updates comment title with correct count', () => {
    const responseData = [
      { username: 'user1', comment: 'comment1' },
      { username: 'user2', comment: 'comment2' },
    ];

    const commentTitle = document.querySelector('.commentTitle');

    displayComments(responseData);

    const commentTitles = commentTitle.getElementsByTagName('h2');
    expect(commentTitles[0].textContent).toContain(`Comments (${responseData.length})`);
  });
});
