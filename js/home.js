// show video
function openModal() {
    document.getElementById('videoModal').style.display = 'block';
    document.getElementById('videoModal').style.animation = 'none';
  }

  function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
  }

// rotate when scroll
window.addEventListener('scroll', () => {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Update the rotation of the image based on the scroll position
    const rotationValue = scrollPosition / 5; // Adjust the divisor for the rotation speed
    document.querySelector('.img_rotate').style.transform = `rotate(${rotationValue}deg)`;
  });

// home-slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

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
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
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

// home-blog
let blogs = document.querySelectorAll('.blog .blog_list .blog_content');
blogs.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        let img = element.getElementsByTagName('img');
        let mask = element.getElementsByTagName('span');
        let date = element.getElementsByClassName('date');
        img[0].style.transform = "scale(1)";
        mask[0].style.display = "block";
        date[0].style.backgroundColor = "black";
    })
    element.addEventListener('mouseleave', function(){
        let img = element.getElementsByTagName('img');
        let mask = element.getElementsByTagName('span');
        let date = element.getElementsByClassName('date');
        img[0].style.transform = "scale(1.15)";
        mask[0].style.display = "none";
        date[0].style.backgroundColor = "#fc591e";
    })
})

// home-moment
let moments = document.querySelectorAll('.moments .moments_wrapper .moment_item');
moments.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        let img = element.getElementsByTagName('img');
        img[0].style.scale = "1";
        let text = element.getElementsByTagName('h5');
        text[0].style.color = "#FF6B35";
    })
    element.addEventListener('mouseleave', function(){
        let img = element.getElementsByTagName('img');
        img[0].style.scale = "1.07";
        let text = element.getElementsByTagName('h5');
        text[0].style.color = "whitesmoke";
    })
})

// home-question
let question = document.querySelectorAll('.question .question_content .question_item');
let content = document.querySelectorAll('.question .question_content .question_item p');
let check = document.querySelectorAll('.question .question_content .question_item .check');
question.forEach(function(element, idx){
    element.addEventListener('click', function(){
        content.forEach(function(item){
            item.style.display = 'none';
        })
        content[idx].style.display = 'block';
        
        check.forEach(function(item){
            item.style.backgroundColor = '#000';
        })
        check[idx].style.backgroundColor = '#fc591e';
       
    })
})