import {getArrCart} from '../js/data_cart.js';

let arrCart = getArrCart();
function updateNumberCart(){
    let numberCart = 0;
    let cart = document.querySelector(".cart-number");
    for (let i = 0; i < arrCart.length; i++){
        numberCart += arrCart[i].quantity;
    }
    return cart.innerHTML = numberCart;
}
updateNumberCart();

window.addEventListener("load", function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const serviceChildLinks = document.querySelectorAll('.service-child-link');
    const serviceLink = document.querySelector('.parent-item');
    const serviceArrow = document.getElementById('service-icon');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Loại bỏ lớp active từ tất cả các mục
            menuItems.forEach(item => item.classList.remove('active'));
            // Thêm lớp active cho mục đang được nhấn
            this.classList.add('active');

            // Kiểm tra nếu đang nhấn vào dịch vụ, loại bỏ active khỏi các liên kết con và icon arrow
            if (this.classList.contains('parent-item')) {
                serviceChildLinks.forEach(link => link.classList.remove('active'));
                serviceArrow.classList.remove('active');
            }
        });
    });

    serviceLink.addEventListener('click', function (event) {
        event.preventDefault();

        // serviceChildLinks.forEach(serviceChildLink => {
        //     serviceChildLink.classList.remove('active');
        // });

        this.classList.add('active');
        serviceArrow.classList.add('active');
    });

    serviceChildLinks.forEach(link => {
        link.addEventListener('click', function () {
            serviceChildLinks.forEach(serviceChildLink => {
                serviceChildLink.classList.remove('active');
            });

            this.classList.add('active');

            serviceLink.classList.add('active');
            serviceArrow.classList.add('active');
        });
    });
});





    const searchBtn = document.querySelector('.searchBtn');
    const closeBtn = document.querySelector('.closeBtn');
    const searchWrapper = document.querySelector('.searchBox');
    const inputBox = searchWrapper.querySelector('.input');
    const suggestBox = searchWrapper.querySelector('.autocom-box');
    const cartIcon = document.querySelector('.cartBtn');
    
    // inputBox.onkeyup = (e) => {
    //     console.log(e.target.value);
    // }


    searchBtn.onclick = function () {
        searchWrapper.classList.add('active');
        closeBtn.classList.add('active');
        searchBtn.classList.add('active');
        cartIcon.style.display = 'none';
        closeBtn.style.marginLeft = '20px';
    };

    closeBtn.onclick = function () {
        searchWrapper.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
        cartIcon.style.display = 'flex';
        closeBtn.style.marginLeft = '0';
    };

const searchInput = document.getElementById('searchInput');
const autocomBox = document.querySelector('.autocom-box');

import { pets } from '../js/data_pets.js';
import { shops } from '../js/data_shops.js';
const suggestions = [];
pets.forEach(pet => {
    let petId = "pet" + pet.id;
    suggestions.push({ id: petId, name: pet.name });
});
shops.forEach(shop => {
    let shopId = "shop" + shop.id;
    suggestions.push({ id: shopId, name: shop.name });
});
console.log(suggestions);
// Một mảng giả định các đề xuất tìm kiếm
// const suggestions = [
//     'Đồ ăn cho chó',
//     'Đồ ăn cho mèo',
//     'Phụ kiện thú cưng',
//     'Dụng cụ huấn luyện',
//     'Đồ chơi cho thú cưng',
//     'Chó Alaska',
//     'Chó Pom',
//     'Chó Phốc sóc',
//     'Chó Corgi',
// ];

// Sự kiện khi người dùng nhập vào ô tìm kiếm
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    let matches = suggestions.filter(suggestion =>
        suggestion.name.toLowerCase().startsWith(searchTerm)
    );

    if (searchTerm.length === 0) {
        matches = [];
        autocomBox.style.display = 'none';
    }

    showSuggestions(matches);
});

// Hiển thị các đề xuất trong hộp đề xuất
function showSuggestions(matches) {
    if (matches.length === 0) {
        autocomBox.style.display = 'none';
        const searchBtnActive = document.querySelector('.searchBtn.active');
        searchBtnActive.addEventListener('click', function(event){
            event.preventDefault();
            window.location.href = `../Home.html`
        })
        return;
    }

    autocomBox.innerHTML = '';
    matches.forEach(match => {
        const listItem = document.createElement('li');
        listItem.innerText = match.name + ' '; // Thêm khoảng trắng vào cuối từ khóa
        listItem.addEventListener('click', function () {
            // searchInput.value = match.name;
            // autocomBox.style.display = 'none';
            const productId = match.id;
            // Replace 'product-page' with the actual URL of your product page
            window.location.href = `details.html?id=${productId}`;
        });
        autocomBox.appendChild(listItem);
    });

    autocomBox.style.display = 'block';
}

// Ẩn hộp đề xuất khi click bất kỳ đâu trên trang
document.addEventListener('click', function (e) {
    if (!e.target.closest('.searchBox')) {
        autocomBox.style.display = 'none';
    }
});

// highlight location
let locationList = ['nav_home', 'nav_store', 'nav_pet', 'nav_service', 'nav_blog', 'nav_contact'];
function setStyleLocation(href){
    if (href == 'http://127.0.0.1:5500/Home.html'){
        for (let i=0; i<locationList.length; i++){
            if (i==0){
                document.getElementById(locationList[i]).style.color = '#fc591e';
                document.getElementById('service-icon').style.color = 'black';
            }
            else{
                document.getElementById(locationList[i]).style.color = 'black';
            }
        }
    }
    else if ((href == 'http://127.0.0.1:5500/shop-category.html') || (href.slice(0, 42) == 'http://127.0.0.1:5500/details.html?id=shop')){
        for (let i=0; i<locationList.length; i++){
            if (i==1){
                document.getElementById(locationList[i]).style.color = '#fc591e';
                document.getElementById('service-icon').style.color = 'black';
            }
            else{
                document.getElementById(locationList[i]).style.color = 'black';
            }
        }
    }
    else if ((href == 'http://127.0.0.1:5500/pet-category.html') || (href.slice(0, 41) == 'http://127.0.0.1:5500/details.html?id=pet')){
        for (let i=0; i<locationList.length; i++){
            if (i==2){
                document.getElementById(locationList[i]).style.color = '#fc591e';
                document.getElementById('service-icon').style.color = 'black';
            }
            else{
                document.getElementById(locationList[i]).style.color = 'black';
            }
        }
    }
    else if ((href == 'http://127.0.0.1:5500/Vet.html') || (href == 'http://127.0.0.1:5500/Hotel.html') || (href == 'http://127.0.0.1:5500/Exercise.html')|| (href == 'http://127.0.0.1:5500/Grooming.html')){
        for (let i=0; i<locationList.length; i++){
            if (i==3){
                document.getElementById(locationList[i]).style.color = '#fc591e';
                document.getElementById('service-icon').style.color = '#fc591e';
            }
            else{
                document.getElementById(locationList[i]).style.color = 'black';
            }
        }
    }
    else if ((href == 'http://127.0.0.1:5500/blog.html') || (href == 'http://127.0.0.1:5500/blog-details.html') || (href == 'http://127.0.0.1:5500/blog-details-2.html')){
        for (let i=0; i<locationList.length; i++){
            if (i==4){
                document.getElementById(locationList[i]).style.color = '#fc591e';
                document.getElementById('service-icon').style.color = 'black';
            }
            else{
                document.getElementById(locationList[i]).style.color = 'black';
            }
        }
    }
    else if (href == 'http://127.0.0.1:5500/contact.html'){
        for (let i=0; i<locationList.length; i++){
            if (i==5){
                document.getElementById(locationList[i]).style.color = '#fc591e';
                document.getElementById('service-icon').style.color = 'black';
            }
            else{
                document.getElementById(locationList[i]).style.color = 'black';
            }
        }
    }
}

let currentLocation = window.location.href;
setStyleLocation(currentLocation);