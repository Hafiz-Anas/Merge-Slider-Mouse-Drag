const pcView = document.querySelector('.pc-view');
const cardContainer = document.querySelector('.card-container');
let moving = false;
let mouselastPosition = 0;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;

pcView.addEventListener('mousedown', (e) => {
  moving = true;
  mouselastPosition = e.pageX;
  transform = window.getComputedStyle(cardContainer)
  .getPropertyValue('transform') !== 'none'
  ? window.getComputedStyle(cardContainer)
  .getPropertyValue('transform').split(',')[4].trim()
  : 0;
  console.log(transform);
});

pcView.addEventListener('mousemove', (e) => {
    if(moving) {
        const diffx = e.pageX - mouselastPosition;
        if (e.pageX - lastPageX > 0) {
            if (transformValue > 0) {
              return;
            }
          } else {
            if (Math.abs(transformValue) > cardContainer.offsetWidth - 480) {
              return;
            }
          }
        transformValue = parseInt(transform) + diffx;
        cardContainer.style.transform = `translatex(${transformValue}px)`;
    }
    lastPageX = e.pageX;
});

pcView.addEventListener('mouseup', () => {
  moving = false;
});