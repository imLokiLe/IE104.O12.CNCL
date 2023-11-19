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
    // if (active <= lengthItems) {
    //     if (active != 0){
    //         items[active - 1].style.display = 'none';
    //     }
    // }
    // items[active].style.display = 'block';
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