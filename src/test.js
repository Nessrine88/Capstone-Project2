const cardCounter = () => {
  const cards = document.querySelectorAll('.containerLike');
  return cards.length;
};
console.log(cardCounter());
export default cardCounter;
