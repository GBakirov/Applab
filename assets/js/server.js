const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-header__top-menu-list")
const menuActiveLinks = document.querySelectorAll('.site-header__top-link');
const menuActiveLink = document.querySelector('.site-header__top-link');
const toUp = document.querySelector('.toUp');
const btn = document.querySelectorAll('.pricing--btn');
const btn1 = document.querySelector('.disable1');
const btn2 = document.querySelector('.disable2');
const btnClose = document.querySelector('.btn--close')
const monthlyCard = document.querySelector('.Monthly-card');
const annualyCard = document.querySelector('.Annualy-card');
const disable = btnClose.getAttribute('disable');


menuToggle.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
  menu.classList.toggle('sitenav--open')
  menu.classList.toggle('sitenav--close')
})

function changeActiveLink(){
  menuActiveLinks.forEach(link => link.classList.remove('site-menu__active'));
  this.classList.add('site-menu__active');
  menuToggle.classList.remove('active');
  menu.classList.toggle('sitenav--open')
  menu.classList.toggle('sitenav--close')
}



function changeActiveBtn(){
  btn.forEach(b => b.classList.remove('btn--close'));
  this.classList.add('btn--close');
  if(btn1.hasAttribute('disabled')){
    btn1.removeAttribute('disabled');
    btn2.setAttribute('disabled', 'disabled')
  }else{
    btn2.removeAttribute('disabled')
    btn1.setAttribute('disabled', 'disabled')
  }
  monthlyCard.classList.toggle('select');
  annualyCard.classList.toggle('select');
}





btn.forEach(b => b.addEventListener('click', changeActiveBtn));

menuActiveLinks.forEach(link => link.addEventListener('click', changeActiveLink));

window.addEventListener('scroll', ()=>{
  const scrol = window.scrollY;
  if(scrol > 70){
    toUp.classList.add('toUp-active')
  }else{
    toUp.classList.remove('toUp-active')
  }
})


