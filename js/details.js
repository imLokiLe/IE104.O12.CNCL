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

let flag_product = '';
function fetchProductDetails(productInfo) {
    if (productInfo.type === 'pet') {
        flag_product = 'pet';
        document.querySelector('.address a:nth-child(3)').innerHTML = `Thú cưng`;
        document.querySelector('.address a:nth-child(3)').href = '../pet-category.html';
        return pets.find(pet => pet.id.toString() === productInfo.id) || null;
    } else if (productInfo.type === 'shop') {
        flag_product = 'shop';
        document.querySelector('.address a:nth-child(3)').innerHTML = `Cửa hàng`;
        document.querySelector('.address a:nth-child(3)').href = '../shop-category.html';
        return shops.find(shop => shop.id.toString() === productInfo.id) || null;
    } else {
        // window.location.href = '../Home.html';
        return null;
    }
}

function renderProductDetails(productDetails) {
    if (productDetails) {
        if(flag_product == 'pet'){
            document.querySelector('.product-suggest.shop .sub-title').innerHTML = `Sản phẩm dành cho ${productDetails.name}`;
        } else {
            // document.querySelector('.product-suggest.pet').classList.add('hidden');
            document.querySelector('.product-suggest.shop .sub-title').innerHTML = `Sản phẩm tương tự`;
            document.querySelector('.product-suggest.pet .sub-title').innerHTML = `Các sản phẩm khác`;
        }
        document.querySelector('.address .product-link.current-link').innerHTML = `${productDetails.name}`;
        document.querySelector('.page-container .product-infomation .image').innerHTML = 
            `<div class="img-large"><img class="img" src=${productDetails.image} alt=${productDetails.featured.type.name}></div>
            <div class="img-small-group">
                <div class="img-small-row">
                    <img  src=${productDetails.image} alt=${productDetails.featured.type.name} class="img-small">
                </div>
                <div class="img-small-row">
                    <img  src=${productDetails.image} alt=${productDetails.featured.type.name} class="img-small">
                </div>
                <div class="img-small-row">
                    <img  src=${productDetails.image} alt=${productDetails.featured.type.name} class="img-small">
                </div>
                <div class="img-small-row">
                    <img  src=${productDetails.image} alt=${productDetails.featured.type.name} class="img-small">
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
if(productDetails == null){
    window.location.href = '../Home.html'
};
renderProductDetails(productDetails);
// console.log(productDetails.featured.genus)

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
// Tùy duyên
// console.log(parseInt(cart.textContent));
// let numberCart = parseInt(cart.textContent);
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

    updateCartLocalStorage();
}
let addCartButton = document.querySelector(".btn-cart-buy .add-cart");
addCartButton.addEventListener("click", function (event) {
    event.preventDefault();
    let productId = productInfo.type + productInfo.id;
    let productName = productDetails.name;
    let productPrice = document.querySelector('.page-container .product-infomation .infomation .price span:first-child').textContent;
    let productUnit = document.querySelector('.page-container .product-infomation .infomation .price span:last-child').textContent;
    let productImage = productDetails.image;
    let productQuantity = parseInt(document.querySelector(".quantity-num").textContent);

    let product = {
        id: productId,
        name: productName,
        price: productPrice,
        unit: productUnit,
        image: productImage,
        quantity: productQuantity,
    };
    addToCartHandler(product);
    console.log(cart);
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
    addToPayment(productPayment);
    
    // Thay đổi đường dẫn URL đến trang mới
    window.location.href = '../transpost.html';
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
    }, 700); // Adjust the delay time as needed
});

function renderPetSuggest(productGenus, productId){
    const similarPets = pets.filter(product => product.featured.genus === productGenus && product.id !== productId);
    console.log(similarPets);
    const productList = document.querySelector(".product-suggest.pet .product-slider .all-product");
    console.log(productList);
    
    // return similarPets;
    productList.innerHTML = similarPets.map((item) => {
        const { id, image, name, price, unit, rating } = item;

        const starIcons = Array.from({ length: 5 }, (_, index) => {
            if (index < rating) {
                return '<i class="full fa-solid fa-star"></i>';
            } else {
                return '<i class="empty fa-solid fa-star"></i>';
            }
        }).join('');

        return (
            `<div class="product" data-id="pet${id}">
                <a href="details.html?id=pet${id}" class="product-link">
                    <div class="product-image">
                        <div class="star-and-bag_plus">
                            <div class="star">${starIcons}</div>
                            <button class="bag-shopping btn-add-cart" type="button">
                                <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Line"><path d="m22.29 6.06a3 3 0 0 0 -2.29-1.06h-14v-1a3 3 0 0 0 -3-3h-1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v10a5 5 0 0 0 2.9 4.52 3 3 0 1 0 5.42.48h2.36a3 3 0 1 0 5.46-.39 3 3 0 0 0 1.49-2.12l1.33-8a3 3 0 0 0 -.67-2.43zm-11.79 13.94a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm7 1a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm2.15-4.84a1 1 0 0 1 -1 .84h-9.65a3 3 0 0 1 -3-3v-7h14a1 1 0 0 1 .76.35 1 1 0 0 1 .23.82z"/><path d="m16.08 11h-1.5v-1.5a1 1 0 0 0 -2 0v1.5h-1.5a1 1 0 1 0 0 2h1.5v1.5a1 1 0 0 0 2 0v-1.5h1.5a1 1 0 0 0 0-2z"/></g></svg>
                            </button>
                        </div>
                        <img src=${image} alt=${name} class="image-product">
                    </div>
                    <div class="product-information">
                        <div class="price-product">
                            <span>${price}</span>
                            <span>${unit}</span>
                        </div>
                        <div class="name-product">${name}</div>
                    </div>
                </a>
            </div>`
        );
    }).join('');
}
renderPetSuggest(productDetails.featured.genus, productDetails.id)

function renderShopSuggest(productGenus, productId){
    const similarPets = shops.filter(product => product.featured.genus === productGenus && product.id !== productId);
    console.log(similarPets);
    const productList = document.querySelector(".product-suggest.shop .product-slider .all-product");
    console.log(productList);
    
    // return similarPets;
    productList.innerHTML = similarPets.map((item) => {
        const { id, image, name, price, unit, rating } = item;

        const starIcons = Array.from({ length: 5 }, (_, index) => {
            if (index < rating) {
                return '<i class="full fa-solid fa-star"></i>';
            } else {
                return '<i class="empty fa-solid fa-star"></i>';
            }
        }).join('');

        return (
            `<div class="product" data-id="shop${id}">
                <a href="details.html?id=shop${id}" class="product-link">
                    <div class="product-image">
                        <div class="star-and-bag_plus">
                            <div class="star">${starIcons}</div>
                            <button class="bag-shopping btn-add-cart" type="button">
                                <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Line"><path d="m22.29 6.06a3 3 0 0 0 -2.29-1.06h-14v-1a3 3 0 0 0 -3-3h-1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v10a5 5 0 0 0 2.9 4.52 3 3 0 1 0 5.42.48h2.36a3 3 0 1 0 5.46-.39 3 3 0 0 0 1.49-2.12l1.33-8a3 3 0 0 0 -.67-2.43zm-11.79 13.94a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm7 1a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm2.15-4.84a1 1 0 0 1 -1 .84h-9.65a3 3 0 0 1 -3-3v-7h14a1 1 0 0 1 .76.35 1 1 0 0 1 .23.82z"/><path d="m16.08 11h-1.5v-1.5a1 1 0 0 0 -2 0v1.5h-1.5a1 1 0 1 0 0 2h1.5v1.5a1 1 0 0 0 2 0v-1.5h1.5a1 1 0 0 0 0-2z"/></g></svg>
                            </button>
                        </div>
                        <img src=${image} alt=${name} class="image-product">
                    </div>
                    <div class="product-information">
                        <div class="price-product">
                            <span>${price}</span>
                            <span>${unit}</span>
                        </div>
                        <div class="name-product">${name}</div>
                    </div>
                </a>
            </div>`
        );
    }).join('');
}
renderShopSuggest(productDetails.featured.genus, productDetails.id)

function Slider(product){
    let currentIndex = 0;
    const itemsPerPage = 4; 
    const SuggestContainer = document.querySelector(`.product-suggest.${product} .product-slider .all-product`);
    const SuggestProducts = SuggestContainer.querySelectorAll('.product');
    const totalItems = SuggestProducts.length;
    const totalDots = Math.ceil(totalItems / itemsPerPage);
    const sliderDotContainer = document.querySelector(`.product-suggest.${product} .product-slider .slider-dot`);
    console.log(sliderDotContainer);
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('i');
        dot.className = 'fa-solid fa-circle';
        dot.onclick = () => goToIndex(i * itemsPerPage);
        sliderDotContainer.appendChild(dot);
    }
    function updateSlider() {
        SuggestProducts.forEach(product => {
            const translateValue = -currentIndex * (217 + 69);
            product.style.transform = 'translateX(' + translateValue + 'px)';
        });

        // Update slider dots
        const dots = sliderDotContainer.querySelectorAll('.slider-dot i');
        console.log(dots);
        dots.forEach((dot, index) => {
            index === currentIndex / itemsPerPage ? dot.classList.add('active') : dot.classList.remove('active');
        });
    }
    function moveSlider(direction) {
        if (direction === 'btn-next' && currentIndex < totalItems - 1) {
            currentIndex = (currentIndex + 1) % (totalItems - 3);
        } else if (direction === 'btn-prev' && currentIndex > 0) {
            currentIndex = (currentIndex -1 + (totalItems - 3)) % (totalItems - 3);
        }
        updateSlider();
    }
    function goToIndex(index) {
        currentIndex = index;
        updateSlider();
    }
    const SuggestBtn = document.querySelectorAll(`.product-suggest.${product} .product-slider .slider-btn`);
    SuggestBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            const className = event.target.closest("button").className;
            if (className.includes('btn-next')) {
                moveSlider('btn-next');
            } else if (className.includes('btn-prev')) {
                moveSlider('btn-prev');
            }
        });
    });
}
Slider('pet');
Slider('shop');


function addToCartSuggestHandler(product) {
    let flag = false;
    let value = 0;
    let numberCart = parseInt(cart.textContent);
    numberCart++;
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
        arrCart[value].quantity++;
    }

    console.log(arrCart);
    updateCartLocalStorage();
}
function attachAddToCart(){
    let addCartButtons = document.querySelectorAll(".btn-add-cart");

    addCartButtons.forEach(function (addCartButton) {
        addCartButton.addEventListener("click", function (event) {
            event.preventDefault();
            let productContainer = event.target.closest(".product");
            let productId = productContainer.dataset.id;
            let productName = productContainer.querySelector(".name-product").textContent;
            let productPrice = productContainer.querySelector(".price-product span:first-child").textContent;
            let productUnit = productContainer.querySelector(".price-product span:last-child").textContent;
            let productImage = productContainer.querySelector(".image-product").getAttribute("src");
            let productQuantity = 1;

            let product = {
            id: productId,
            name: productName,
            price: productPrice,
            unit: productUnit,
            image: productImage,
            quantity: productQuantity,
            };
            addToCartSuggestHandler(product);
            console.log(cart);
        });
    });
}
attachAddToCart();