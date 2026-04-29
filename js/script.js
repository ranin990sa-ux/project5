
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});



//End Animation

//Swiper
const swiper = new Swiper('.swiper', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//scroll reveal animation
const src=ScrollReveal({
    
}

)

//Start Animation
const sr=ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
});
sr.reveal('.hero-info',{origin:'top'});
sr.reveal('.hero-img');
sr.reveal('.features');
sr.reveal('.features-top');
sr.reveal('.boxes',{
    delay:'bottom',
    distance:'100px',
    interval:100,
    delay:600,
});
sr.reveal('.testimonial');
sr.reveal('.our-team');
sr.reveal('.team-slider');
sr.reveal('.faq-title');
sr.reveal('.faq-body', {
  origin:'bottom',
  distance:'100px',
  interval:100,
  delay:600,
});
sr.reveal('.course-title');
sr.reveal('.courses',{
  delay:600,
  distance:'100px',
  interval:100,
  origin:'bottom',
});

sr.reveal('.blog-title');
sr.reveal('.blogs',{
    delay:600,
    distance:'100px',
    interval:100,
    origin:'bottom',

});
sr.reveal('.brands',{
    delay:600,
    distance:'100px',
    interval:100,
    origin:'bottom',
});
sr.reveal('.news-container');
sr.reveal('.footer-container',{
    delay:600,
    distance:'100px',
    interval:100,
    origin:'bottom',
});
sr.reveal('.first');
