const themeToggle = document.getElementById('themeToggle');
const logoImg = document.getElementById('logoImg');
const body = document.body;
const icon = themeToggle.querySelector('i');

const darkLogo = 'images/dark.png';
const lightLogo = 'images/light.png';

if(localStorage.getItem('theme') === 'dark'){
  body.classList.add('dark-mode');
  logoImg.src = lightLogo;
  icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if(body.classList.contains('dark-mode')){
    logoImg.src = lightLogo;
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    logoImg.src = darkLogo;
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});





// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.navbar ul li a');

// function changeActiveLink(){
//   let scrollY = window.scrollY;

//   sections.forEach(section => {
//     const sectionHeight = section.offsetHeight;
//     const sectionTop = section.offsetTop - 120; // مسافة أمان بسبب الـ Navbar الـ Sticky
//     const sectionId = section.getAttribute('id');

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//       navLinks.forEach(link => {
//         link.classList.remove('active');
//         if(link.getAttribute('href') === '#' + sectionId){
//           link.classList.add('active');
//         }
//       });
//     }
//   });

//   // لو في أعلى الصفحة (الهيرو) خلي "الرئيسية" Active
//   if(scrollY < 300){
//     navLinks.forEach(link => link.classList.remove('active'));
//     document.querySelector('.navbar ul li a[href="#home"]')?.classList.add('active');
//   }
// }

// window.addEventListener('scroll', changeActiveLink);



const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(){
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
