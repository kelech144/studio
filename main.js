let toggle = document.querySelector('.menu-btn');
let icon = document.querySelector('.menu-btn i');
let menu = document.querySelector('nav');

toggle.addEventListener('click', () => {
  menu.classList.toggle('showmenu');

  if (menu.classList.contains('showmenu')) {
    icon.classList.remove('ri-menu-3-line');
    icon.classList.add('ri-close-line');
  } else {
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-3-line');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    if (href.length > 1) {
      e.preventDefault();

      const el = document.querySelector(href);

      if (el) {
        el.scrollIntoView({
          behavior:'smooth',
          block:'start'
        });
      }
    }
  });
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {

    menu.classList.remove('showmenu');

    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-3-line');

  });
});

const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting) en.target.classList.add('show');
      })
    },{threshold:0.12});
    reveals.forEach(r=>obs.observe(r));