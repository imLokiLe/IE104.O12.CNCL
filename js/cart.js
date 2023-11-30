// cart.js
import { resetCart, getArrCart, updateCartLocalStorage} from '../js/data_cart.js';

// Xóa dữ liệu trong arrCart và cập nhật Local Storage
// resetCart();
// Lấy dữ liệu từ Local Storage hoặc sử dụng mảng trống nếu không có dữ liệu
let arrCart = getArrCart();
let arrProductSelect =[];
function updateNumberCart(){
    let numberCart = 0;
    let cart = document.querySelector(".cart-number");
    for (let i = 0; i < arrCart.length; i++){
        numberCart += arrCart[i].quantity;
    }
    return cart.innerHTML = numberCart;
}
updateNumberCart()
// Log arrCart trong cart.js
// console.log('arrCart in cart.js:', arrCart);

function renderCartProduct(products){
    document.querySelector(".product-name.title").innerHTML = `Tất cả (${updateNumberCart()} sản phẩm)`
    const cartProduct = document.getElementById("cart-product");
    const list = [...new Set(products)];

    cartProduct.innerHTML = list.map((item, index) =>{
        const { id, name, price, unit, image, quantity} = item;
        const productPrice = parseInt(price.replaceAll(',',''));
        const productQuantity = parseInt(quantity);
        const total_price_product = productPrice * productQuantity;
        const total_price = total_price_product.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return (
            `<div class="product" data-id="${id}">
                <input type="checkbox" name="checkbox" id="product-${index}">
                <img src="${image}" alt="image-product" class="image-product"> 
                <label for="product-${id}">
                    <span class="product-name">${name}</span>
                </label>
                <div class="price-product">
                    <p>${price}</p>
                    <p>${unit}</p>
                </div>
                <div class="quantity-btn">
                    <button type="button" class="cart-minus-btn" value="minus">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <p class="quantity-num">${quantity}</p>
                    <button type="button" class="cart-plus-btn" value="plus">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div class="total_price">
                    <p>${total_price}</p>
                    <p>${unit}</p>
                </div>
                <button type="button" class="delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`
        );
    }).join('');
}
renderCartProduct(arrCart)

function updateQuantity(product, change){
    const quantityElement = product.querySelector(".quantity-num");
    let quantityProduct = parseInt(quantityElement.textContent);
    // Cập nhật quantity mới
    const newQuantity = quantityProduct + change;
    if (newQuantity < 1) {
        return; 
    }
    quantityElement.textContent = newQuantity;
    const priceElement = product.querySelector(".price-product p:first-child");
    const price = parseFloat(priceElement.textContent.replaceAll(',',''));

    const total_price = price * newQuantity;

    const total_priceElement = product.querySelector(".total_price p:first-child");
    total_priceElement.textContent = total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Lấy thông tin sản phẩm
    const productId = product.dataset.id;

    // Tìm sản phẩm trong arrCart và cập nhật quantity
    const cartItem = arrCart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
    }
    updateCartLocalStorage();

    // Cập nhật lại thông tin sản phẩm trong arrProductSelect (nếu sản phẩm đã được chọn)
    const isChecked = product.querySelector("input[type=checkbox]").checked;
    if (isChecked) {
        const productIndex = arrProductSelect.findIndex(item => item.dataset.id === productId);
        if (productIndex !== -1) {
            arrProductSelect[productIndex] = product;
        }
        totalPriceSelect(document.querySelectorAll(".cart-product-all .product input[type=checkbox]"));
    }
}
function attackQuantity(){
    let quantityButton = document.querySelectorAll(".quantity-btn");
    quantityButton.forEach(function (quantityButton) {
        quantityButton.addEventListener("click", function (event) {
            event.preventDefault();
            const targetButton = event.target.closest("button");
            if (targetButton) {
                const buttonValue = targetButton.getAttribute("value");
                let product = event.target.closest(".product");
                if (buttonValue === "minus") {
                    updateQuantity(product, -1);
                } else if (buttonValue === "plus") {
                    updateQuantity(product, 1);
                }
                
            }
            updateNumberCart();
            document.querySelector(".product-name.title").innerHTML = `Tất cả (${updateNumberCart()} sản phẩm)`
        });
    });
}
attackQuantity();

function removeProductCart(product) {
    const productId = product.dataset.id;
    const cartItem = arrCart.find(item => item.id === productId);
    if (cartItem) {
        arrCart.splice(cartItem, 1);
        updateCartLocalStorage();
    }
};
let deleteProduct = document.querySelectorAll(".delete-btn");
deleteProduct.forEach(function(deleteProduct){
    deleteProduct.addEventListener("click", function(event){
        event.preventDefault();
        const targetButton = event.target.closest("button");
        if (targetButton) {
            let product = event.target.closest(".product");
            removeProductCart(product);
        }
        location.reload();
    });
});
document.querySelector(".cart-all .fa-trash").addEventListener("click", () =>{
    resetCart();
    location.reload();
});


function totalPriceSelect(allCheckbox){
    arrProductSelect = Array.from(allCheckbox)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.closest('.product'));

    let total_price = 0;
    let total_quantity = 0;
    for (const product of arrProductSelect){
        const priceElement = product.querySelector(".price-product p:first-child");
        const priceProduct = parseFloat(priceElement.textContent.replaceAll(',',''));
        const quantityElement = product.querySelector(".quantity-num");
        const quantityProduct = parseInt(quantityElement.textContent);
        let total_priceProduct = priceProduct * quantityProduct;
        total_price += total_priceProduct;
        total_quantity += quantityProduct;
    }
    let provisionalPrice = document.querySelector('.provisional.price span:first-child');
    provisionalPrice.textContent = total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const unitElement = document.querySelector('.provisional.price span:last-child');
    const unit = unitElement.textContent;
    if (arrProductSelect.length > 0) {
        let totalPrice = document.querySelector('.total.price p:first-child');
        totalPrice.textContent = total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + unit;
    } else {
        document.querySelector('.total.price p:first-child').textContent = `Vui lòng chọn sản phẩm`;
    }
    document.querySelector(".btn-buy p").innerHTML = `Mua hàng (${total_quantity})`
};
const selectAll = document.querySelector(".cart-product-all .cart-all input[type=checkbox]");
const allCheckbox = document.querySelectorAll(".cart-product-all .product input[type=checkbox]");
let listBoolean = [];
allCheckbox.forEach(item => {
    item.addEventListener('change', function () {
        listBoolean = Array.from(allCheckbox).map(i => i.checked);
        if (listBoolean.includes(false)) {
            selectAll.checked = false;
        } else {
            selectAll.checked = true;
        }
        totalPriceSelect(allCheckbox);
        attackPayment();
    });
});

selectAll.addEventListener('change', function () {
    allCheckbox.forEach(i => {
        i.checked = this.checked;
    });
    totalPriceSelect(allCheckbox)
    attackPayment();
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
function attackPayment(){
    document.querySelector('.btn-buy').addEventListener('click', function() {
        if(arrProductSelect.length > 0) {
            for (const product of arrProductSelect){
                let productId = product.dataset.id;
                let productName = product.querySelector(".product-name").textContent;
                let productPrice = product.querySelector(".total_price p:first-child").textContent;
                let productUnit = product.querySelector(".total_price p:last-child").textContent;
                let productImage = product.querySelector(".image-product").getAttribute("src");
                let productQuantity = product.querySelector(".quantity-num").textContent;
                let productPayment = {
                    id: productId,
                    name: productName,
                    totalPrice: productPrice,
                    unit: productUnit,
                    image: productImage,
                    quantity: productQuantity,
                };
                addToPayment(productPayment);
            }
            
            // Thay đổi đường dẫn URL đến trang mới
            window.location.href = '../transpost.html';
        } else {
            alert("Vui lòng chọn sản phẩm");
        }
    });
}
attackPayment()