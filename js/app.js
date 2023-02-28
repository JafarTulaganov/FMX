new Swiper('.projektSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    prevEl: '.projekt__prev',
    nextEl: '.projekt__next',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.5,
    },
  }
})

let modal = document.getElementById('modal')
    modalCaller = document.querySelectorAll('.modal__card')
    modalClose = document.getElementById('modal__x')
  
modalCaller.forEach(el => {
  el.addEventListener('click', function() {
    modal.classList.add('show-modal')
  })
});

if(modalClose){
  modalClose.addEventListener('click', () => {
    modal.classList.remove('show-modal')
  })
}

function scrollHeader(){
  let navBottom = document.getElementById('navbar__bottom')
  if(this.scrollY >= 50) navBottom.classList.add('scroll-header'); else navBottom.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

let navToggle = document.getElementById('toggle')
    navBottom = document.getElementById('navbar__bottom')

if(navToggle){
  navToggle.addEventListener('click', () => {
    navBottom.classList.toggle('show-menu')
    navToggle.classList.toggle('close-btn')
  })
}

