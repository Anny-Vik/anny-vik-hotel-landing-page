// burger mobile menu
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__nav-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle('header__nav-row--mobile');
};


/*Phone mask*/
mask('[data-tel-input]');

//remove '+' if input is empty
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
  input.addEventListener('input', ()=>{
    if(input.value == '+') input.value = '';
  })
  input.addEventListener('blur', ()=> {
    if (input.value == '+') input.value = '';
  })
});


