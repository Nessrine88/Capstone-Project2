import commentCounter from './commentsCounter'; // Adjust the path as needed

test('should return 0 when no comments are present', () => {
  // Create a mock document with no comments
  document.body.innerHTML = '<div></div>';

  // Call the function and expect the result to be 0
  expect(commentCounter()).toBe(0);
});

test('should return the correct number of comments', () => {
  // Create a mock document with three comment elements
  document.body.innerHTML = `
    <div class="comment_span"></div>
    <div class="comment_span"></div>
    <div class="comment_span"></div>
  `;

  // Call the function and expect the result to be 3
  expect(commentCounter()).toBe(3);
});

test('should handle edge cases', () => {
  // Test with an empty document
  document.body.innerHTML = '';

  // Call the function and expect the result to be 0
  expect(commentCounter()).toBe(0);

  // Test with various numbers of comment elements
  document.body.innerHTML = `
    <div class="comment_span"></div>
    <div class="comment_span"></div>
  `;

  // Call the function and expect the result to be 2
  expect(commentCounter()).toBe(2);
});
