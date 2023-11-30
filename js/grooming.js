let btn = document.getElementById('selected_option');
let cat = document.getElementById('menu_cat');
let dog = document.getElementById('menu_detail');

function leftClick() {
	btn.style.left = '0';
	cat.style.display = 'none';
	dog.style.display = 'block';
}

function rightClick() {
	btn.style.left = '110px';
	cat.style.display = 'block';
	dog.style.display = 'none';
}

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
