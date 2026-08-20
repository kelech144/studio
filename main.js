const whatsappNumber = "2347026682447";
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
    


const modal = document.getElementById("projectModal");
    const selectedPackage =
      document.getElementById("selectedPackage");

    let selectedService = "";


    function openModal(service) {

      selectedService = service;

      selectedPackage.textContent =
        "You're interested in " + service;

      modal.classList.add("show");

      document.body.style.overflow = "hidden";
    }


    function closeModal() {

      modal.classList.remove("show");

      document.body.style.overflow = "auto";
    }


    /* Close when clicking outside */

    modal.addEventListener("click", function(e) {

      if (e.target === modal) {
        closeModal();
      }

    });


    /* =========================
       WHATSAPP
    ========================== */

    function sendToWhatsApp() {

      const name =
        document.getElementById("clientName").value.trim();

      const business =
        document.getElementById("businessName").value.trim();

      const message =
        document.getElementById("projectMessage").value.trim();


      if (!name) {

        alert("Please enter your name.");

        return;
      }


      const whatsappMessage =
`Hello Kelech,

I'm interested in your service.

Name: ${name}

Business/Brand: ${business || "Not provided"}

Project details:
${message || "I'd like to discuss this project with you."}

I'd like to know the next steps.`;


      const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


      window.open(url, "_blank");

    }