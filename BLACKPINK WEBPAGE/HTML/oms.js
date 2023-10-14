var swiper = new swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredslides: true,
  slidesPerview: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: 'swiper-pagination',
  },
  loop: true,
});
  