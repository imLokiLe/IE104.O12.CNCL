import { pets } from '../js/data_pets.js';
import { shops } from '../js/data_shops.js';
// Function to extract the product ID and type from the URL query parameters
function getProductInfoFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    const matches = idParam.match(/^([a-zA-Z]+)(\d+)$/);
    if (matches) {
        return {
            type: matches[1],
            id: matches[2]
        };
    } else {
        return {
            type: null,
            id: null
        };
    }
}

function fetchProductDetails(productInfo) {
    if (productInfo.type === 'pet') {
        return pets.find(pet => pet.id.toString() === productInfo.id) || null;
    } else if (productInfo.type === 'shop') {
        return shops.find(shop => shop.id.toString() === productInfo.id) || null;
    } else {
        return null;
    }
}

function renderProductDetails(productDetails) {
    if (productDetails) {
        document.querySelector('.page-container .product-infomation .image').innerHTML = 
            `<div class="img-large"><img class="img" src=${productDetails.image} alt=${productDetails.featured.type.name}></div>
            <div class="img-small-group">
                <div class="img-small-row">
                    <img src="./images/pets/alaska.jpg" alt="alaska" class="img-small">
                </div>
                <div class="img-small-row">
                    <img src="./images/pets/alaska.jpg" alt="alaska" class="img-small">
                </div>
                <div class="img-small-row">
                    <img src="./images/pets/alaska.jpg" alt="alaska" class="img-small">
                </div>
                <div class="img-small-row">
                    <img src="./images/pets/alaska.jpg" alt="alaska" class="img-small">
                </div>
            </div>`;
        document.querySelector('.page-container .product-infomation .infomation .title').innerHTML = `${productDetails.name}`;
        document.querySelector('.page-container .product-infomation .infomation .price span:first-child').innerHTML = `${productDetails.price}`;
        const starIcons = Array.from({ length: 5 }, (_, index) => {
            if (index < productDetails.rating) {
                return '<i class="fa-solid fa-star"></i>';
            } else {
                return '<i class="fa-regular fa-star"></i>';
            }
        }).join('');
        document.querySelector('.page-container .product-infomation .infomation .evaluate-info .star-evaluate').innerHTML = `<p class="number-star">${productDetails.rating}.0</p> ${starIcons}`
    } 
}
const productInfo = getProductInfoFromUrl();
const productDetails = fetchProductDetails(productInfo);
renderProductDetails(productDetails);

function updateQuantity(change){
    const quantityElement = document.querySelector(".quantity-num");
    let quantityProduct = parseInt(quantityElement.textContent);
    const newQuantity = quantityProduct + change;
    if (newQuantity < 1) {
        return; 
    }
    quantityElement.textContent = newQuantity;
};
document.querySelector(".quantity-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const targetButton = event.target.closest("button");
    if (targetButton) {
        const buttonValue = targetButton.getAttribute("value");
        if (buttonValue === "minus") {
            updateQuantity(-1);
            // console.log(document.querySelector(".quantity-num").textContent);
        } else if (buttonValue === "plus") {
            updateQuantity(1);
        }
    }
});

import { updateCartLocalStorage, getArrCart } from '../js/data_cart.js';
let arrCart = getArrCart();
let cart = document.querySelector(".cart-number");
console.log(cart);
function addToCartHandler(product) {
    let flag = false;
    let value = 0;
    let numberCart = parseInt(cart.textContent);
    numberCart += product.quantity;
    cart.innerHTML = numberCart;

    for (let i = 0; i < arrCart.length; i++) {
        if (product.id == arrCart[i].id) {
            flag = true;
            value = i;
        }
    }
    if (flag == false) {
        arrCart.push(product);
    } else {
        arrCart[value].quantity += product.quantity;
    }

    console.log(arrCart);
    updateCartLocalStorage();
}
let addCartButton = document.querySelector(".btn-cart-buy .add-cart");
console.log(addCartButton);
addCartButton.addEventListener("click", function (event) {
    event.preventDefault();
    let productId = productInfo.type + productInfo.id;
    console.log(productId);
    let productName = productDetails.name;
    console.log(productName);
    let productPrice = document.querySelector('.page-container .product-infomation .infomation .price span:first-child').textContent;
    console.log(productPrice);
    let productUnit = document.querySelector('.page-container .product-infomation .infomation .price span:last-child').textContent;
    console.log(productUnit);
    let productImage = productDetails.image;
    console.log(productImage);
    let productQuantity = parseInt(document.querySelector(".quantity-num").textContent);
    console.log(productQuantity);

    let product = {
        id: productId,
        name: productName,
        price: productPrice,
        unit: productUnit,
        image: productImage,
        quantity: productQuantity,
    };
    console.log(product);
    addToCartHandler(product);
});

import { arrPayment, updatePaymentLocalStorage, resetPayment} from '../js/data_payment.js';
resetPayment();
function addToPayment(product){
    let flag = false;
    for (let i = 0; i < arrPayment.length; i++) {
        if (product.id == arrPayment[i].id) {
            flag = true;
        }
    }
    if (flag == false) {
        arrPayment.push(product);
    } else {
        return;
    }
    updatePaymentLocalStorage();
}
let paymentButton = document.querySelector(".btn-cart-buy .buy-now");
console.log(paymentButton);
paymentButton.addEventListener('click', function (event) {
    event.preventDefault();
    let productId = productInfo.type + productInfo.id;
    let productName = productDetails.name;
    let productUnit = document.querySelector('.page-container .product-infomation .infomation .price span:last-child').textContent;
    let productImage = productDetails.image;
    let productQuantity = document.querySelector(".quantity-num").textContent;

    const priceElement = document.querySelector('.page-container .product-infomation .infomation .price span:first-child');
    const priceProduct = parseFloat(priceElement.textContent.replaceAll(',',''));
    const quantityProduct = parseInt(productQuantity);
    let total_price = priceProduct * quantityProduct;
    let productPrice = total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let productPayment = {
        id: productId,
        name: productName,
        totalPrice: productPrice,
        unit: productUnit,
        image: productImage,
        quantity: productQuantity,
    };
    console.log(productPayment);
    addToPayment(productPayment);
    
    // Thay đổi đường dẫn URL đến trang mới
    window.location.href = '../transpost.html';
});