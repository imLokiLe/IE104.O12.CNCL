import { resetCart, getArrCart, updateCartLocalStorage} from '../js/data_cart.js';
import { arrPayment, updatePaymentLocalStorage, resetPayment} from '../js/data_payment.js';

let arrCart = getArrCart();
// function updateNumberCart(){
//     let numberCart = 0;
//     let cart = document.querySelector(".cart-number");
//     for (let i = 0; i < arrCart.length; i++){
//         numberCart += arrCart[i].quantity;
//     }
//     return cart.innerHTML = numberCart;
// }
// updateNumberCart()
document.querySelector('.pre.cart-page').addEventListener('click', function() {
    window.location.href = '../cart.html';
});
document.querySelector('.pre.transport-page').addEventListener('click', function() {
    window.location.href = '../transpost.html';
});
function renderPaymentProduct (products){
    const paymentProduct = document.getElementById("all-order-product");
    const list = [...new Set(products)];
    paymentProduct.innerHTML = list.map((item) =>{
        const { id, image, name, quantity, totalPrice, unit } = item;
        return (
            `<div class="order-product" data-id="${id}">
                <img src="${image}" alt="image-product" class="image-product">
                <div class="product-name">
                    <p>${name}</p>
                    <p>SL: x<span>${quantity}<span></p>
                </div>
                <div class="product-fee">
                    <p>${totalPrice}</p>
                    <p>${unit}</p>
                </div>
            </div>`
        );
    }).join('');
};
renderPaymentProduct(arrPayment)

let selectedDeliveryInput = null;
const radioSelectDelivery = document.querySelectorAll('.select-delivery .select input[name="delivery"]');
console.log(radioSelectDelivery);
radioSelectDelivery.forEach(input => {
    input.addEventListener('change', function() {
        if (input.checked) {
            selectedDeliveryInput = input;
            const label = input.nextElementSibling;
            const deliveryPrice = label.querySelector('.delivery-price span').textContent;
            document.querySelector(".all-order-address .fee-pre").innerHTML = `${deliveryPrice},000đ`;
            renderTotalPaymentPrice(arrPayment, deliveryPrice);
        }
    });
});

let totalPayment = 0
function renderTotalPaymentPrice(products,deliveryPrice){
    if(deliveryPrice == null){
        deliveryPrice = 0
    };
    const list = [...new Set(products)];
    let totalPaymentPrice = 0;
    let totalQuantity = 0;
    for (const product of list) {
        const totalProductPaymentPrice = parseInt(product.totalPrice.replaceAll(',',''));
        const totalProductQuantity = parseInt(product.quantity);
        totalPaymentPrice += totalProductPaymentPrice;
        totalQuantity += totalProductQuantity;
    };
    totalPaymentPrice = totalPaymentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalPayment = totalPaymentPrice;
    document.querySelector('.provisional.price span').textContent =totalPaymentPrice ;
    document.querySelector('.total.price span').textContent =totalPaymentPrice;
    document.querySelector('.quantity').textContent = totalQuantity + ' sản phẩm.';
    if (deliveryPrice != 0) {
        document.querySelector('.transport.price span').textContent = deliveryPrice + ',000';
        document.querySelector('.promotional-delivery.price span').textContent = '-'+ deliveryPrice + ',000';
    };
};
renderTotalPaymentPrice(arrPayment);

// Function to start a countdown timer
function startCountdown(minuteElement, secondElement, initialMinutes) {
    let remainingTime = initialMinutes * 60; 

    const countdownInterval = setInterval(function () {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        minuteElement.textContent = minutes.toString().padStart(2, '0');
        secondElement.textContent = seconds.toString().padStart(2, '0');

        if (remainingTime === 0) {
            clearInterval(countdownInterval);
            window.location.href = '../confirm.html';
        } else {
            remainingTime--;
        }
    }, 1000);
}


function showPopup(selectedRadio) {
    if (selectedRadio) {
        const selectedValue = selectedRadio.id;
        const popupId = `${selectedValue}-popup`;
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('show');
            popup.querySelector('.total-price span').textContent = totalPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const minuteElement = popup.querySelector('.clock-countdown .clock .minute');
            const secondElement = popup.querySelector('.clock-countdown .clock .second');
            startCountdown(minuteElement, secondElement, 1/2);
        }
    }
}
function closePopup(selectedRadio) {
    if (selectedRadio) {
        const selectedValue = selectedRadio.id;
        const popupId = `${selectedValue}-popup`;
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('show');
        }
    }
}
const radioSelectPayment = document.querySelectorAll('.payment .radio input[name="payment"]');
console.log(radioSelectPayment);
let selectedPaymentInput = null;
radioSelectPayment.forEach(input => {
    input.addEventListener('change', function() {
        if(input.checked) {
            selectedPaymentInput = input;
        }
    });
});
const buyButton = document.querySelector('.btn-buy');
buyButton.addEventListener('click', function() {
    if (selectedDeliveryInput == null){
        alert('Vui lòng chọn hình thức giao hàng');
    } else if (selectedPaymentInput == null) {
        alert('Vui lòng chọn hình thức thanh toán');
    } else {
        if (selectedPaymentInput.id == 'cod'){
            window.location.href = '../confirm.html';
        } else {
            showPopup(selectedPaymentInput);
        }
    }
});
const btnCloseAll = document.querySelectorAll('.popup-close');
btnCloseAll.forEach(btnClose => {
    btnClose.addEventListener('click', function() {
        closePopup(selectedPaymentInput);
    });
});