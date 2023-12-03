// slider
let slider = document.querySelector('.comment_slider .comment_list');
let items = document.querySelectorAll('.comment_slider .comment_list .comment_box');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.comment_slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    if (active == 0){
        items[active].style.display = 'block';
        items[1].style.display = 'none';
        items[2].style.display = 'none';
    }
    else if (active == 1){
        items[active].style.display = 'block';
        items[0].style.display = 'none';
        items[2].style.display = 'none';
    }
    else {
        items[active].style.display = 'block';
        items[0].style.display = 'none';
        items[1].style.display = 'none';
    }
    // 
    let last_active_dot = document.querySelector('.comment_slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    // refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// scroll smooth
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({
        behavior: "smooth" // Để có hiệu ứng mượt mà, có thể sử dụng "auto" nếu không cần hiệu ứng
      });
    }
  }

// toggle menu

let opt_service = document.getElementById('opt_service');
let opt_surgery = document.getElementById('opt_surgery');
let opt_treatment = document.getElementById('opt_treatment');
let menu_service = document.getElementById('table_menu');
let menu_surgery = document.getElementById('surgery_menu');
let menu_cure = document.getElementById('cure_menu');
opt_service.addEventListener('click', function(){
        menu_service.style.display = 'block';
        menu_surgery.style.display = 'none';
        menu_cure.style.display = 'none';
        opt_service.style.backgroundColor = '#fc591e';
        opt_service.style.color = 'white';
        opt_surgery.style.backgroundColor = '#fff';
        opt_surgery.style.color = '#fc591e';
        opt_treatment.style.backgroundColor = '#fff';
        opt_treatment.style.color = '#fc591e';
});
opt_surgery.addEventListener('click', function(){
        menu_service.style.display = 'none';
        menu_surgery.style.display = 'block';
        menu_cure.style.display = 'none';
        opt_service.style.backgroundColor = '#fff';
        opt_service.style.color = '#fc591e';
        opt_surgery.style.backgroundColor = '#fc591e';
        opt_surgery.style.color = 'white';
        opt_treatment.style.backgroundColor = '#fff';
        opt_treatment.style.color = '#fc591e';
});
opt_treatment.addEventListener('click', function(){
        menu_service.style.display = 'none';
        menu_surgery.style.display = 'none';
        menu_cure.style.display = 'block';
        opt_service.style.backgroundColor = '#fff';
        opt_service.style.color = '#fc591e';
        opt_surgery.style.backgroundColor = '#fff';
        opt_surgery.style.color = '#fc591e';
        opt_treatment.style.backgroundColor = '#fc591e';
        opt_treatment.style.color = 'white';
});

// scroll to top
let goTopBtn = document.querySelector('.go_top_btn');
window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if (window.scrollY > 200){
        goTopBtn.style.display = 'flex';
    }else{
        goTopBtn.style.display = 'none'
    }
}
goTopBtn.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// loading
document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (you can remove this in production)
    setTimeout(function () {
        document.querySelector(".loading-overlay").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 1000); // Adjust the delay time as needed
});