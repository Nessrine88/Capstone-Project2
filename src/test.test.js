import cardCounter from './test'; // Adjust the import path if needed

test('should update the card counter with the correct number of cards', () => {
  document.body.innerHTML = `
    <div class="card-container">
      <div class="containerLike"></div>
      <div class="containerLike"></div>
      <div class="containerLike"></div>
    </div>
  `;

  expect(cardCounter()).toBe(3);
});
test('should return 4 cards', () => {
  document.body.innerHTML = `
    <div class="card-container">
      <div class="containerLike"></div>
      <div class="containerLike"></div>
      <div class="containerLike"></div>
      <div class="containerLike"></div>
    </div>
  `;
  cardCounter();
  expect(cardCounter()).not.toBe(5);
});

test('should return 0 cards', () => {
  document.body.innerHTML = `
    <div class="card-container">
    </div>
  `;
  cardCounter();
  expect(cardCounter()).toBe(0);
});