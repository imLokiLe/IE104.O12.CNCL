document.querySelector('.btn-cancel').addEventListener('click', function() {
    window.location.href = '../cart.html';
});
document.querySelector('.pre.cart-page').addEventListener('click', function() {
    window.location.href = '../cart.html';
});
document.querySelector('.btn-accept').addEventListener('click', function() {
    window.location.href = '../payment.html';
});
import { resetDelivery } from '../js/data_delivery.js';
resetDelivery();

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