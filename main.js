const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-regular");

stars.forEach((stars, starPosition) => {
  stars.addEventListener("click", () => {
    updateRating(starPosition)
  });
})

function updateRating(starPosition) {
  stars.forEach((stars, index) => {
    if( index <= starPosition) {
      stars.classList.add("active");
    } else {
      stars.classList.remove("active");
    }
  });

  emojis.forEach((emojis) => {
    emojis.style.transform = `translateX(-${starPosition * 50}px)`;
  })
};