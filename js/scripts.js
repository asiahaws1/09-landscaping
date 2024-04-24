// Inject current year in footer
const newDate = new Date();
document.querySelector('#year').textContent = newDate.getFullYear()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'flip',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
 
    // start AutoPlay
    autoplay: {
        delay: 5000,
    },


  });

  //nav 

  const hb = document.querySelector('#hamburgerBtn');

  hb.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle('open');
  })

