//Lấy data
import { pets } from '../js/data_pets.js';
// console.log(pets)

// Filter 
//Price 
function toggleDropdownPrice() {
    const filterPrice = document.getElementById("filterPrice");
    filterPrice.classList.toggle("show-dropdown");
}
const togglePrice = document.getElementById("togglePrice");
togglePrice.addEventListener("click",toggleDropdownPrice)

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".slider .progress");
let priceGap = 50;
priceInput.forEach(input => {
    input.addEventListener("input", range => {
        //Lấy 2 giá trị min max và chuyển sang dạng số
        let minValue = parseInt(priceInput[0].value),
        maxValue = parseInt(priceInput[1].value);

        if ((maxValue - minValue >= priceGap)&& maxValue <= 1000){
            if(range.target.className === "min-input"){
                rangeInput[0].value = minValue;
                progress.style.left = (minValue / rangeInput[0].max) * 100 + '%';
            }
            else{
                rangeInput[1].value = maxValue;
                progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + '%';
            }
        }
    });
});
rangeInput.forEach(input => {
    input.addEventListener("input", range => {
        //Lấy 2 giá trị min max và chuyển sang dạng số
        let minValue = parseInt(rangeInput[0].value),
        maxValue = parseInt(rangeInput[1].value);

        if (maxValue - minValue < priceGap){
            if(range.target.className === "min-range"){
                rangeInput[0].value = maxValue - priceGap;
            }else{
                rangeInput[1].value = minValue + priceGap;
            }
        }
        else{
            priceInput[0].value = minValue;
            priceInput[1].value = maxValue;
            progress.style.left = (minValue / rangeInput[0].max) * 100 + '%';
            progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + '%';
        }
    });
});

// Dogs
function toggleDropdownDog() {
    const filterDog = document.getElementById("filterDog");
    filterDog.classList.toggle("show-dropdown");
}
const toggleDog = document.getElementById("toggleDog");
toggleDog.addEventListener("click", toggleDropdownDog);

const selectAll_dog = document.querySelector(".filter-dog .checkbox-all input[type=checkbox]");
const allCheckbox_dogs = document.querySelectorAll(".filter-dog .pets-checkbox input[type=checkbox]");
let listBoolean_dog = [];

allCheckbox_dogs.forEach(item => {
    item.addEventListener('change', function(){
        allCheckbox_dogs.forEach(i => {
            listBoolean_dog.push(i.checked) ;
        })
        if(listBoolean_dog.includes(false)){
            selectAll_dog.checked = false;
        } else {
            selectAll_dog.checked = true;
        }
        listBoolean_dog = []
    });
});
selectAll_dog.addEventListener('change', function () {
    if (this.checked) {
        allCheckbox_dogs.forEach(i => {
            i.checked = true;
        })
    } else {
        allCheckbox_dogs.forEach(i => {
            i.checked = false;
        })
    }
});

// Cats
function toggleDropdownCat() {
    const filterCat = document.getElementById("filterCat");
    filterCat.classList.toggle("show-dropdown");
}
const toggleCat = document.getElementById("toggleCat");
toggleCat.addEventListener("click",toggleDropdownCat)

const selectAll_cat = document.querySelector(".filter-cat .checkbox-all input[type=checkbox]");
const allCheckbox_cats = document.querySelectorAll(".filter-cat .pets-checkbox input[type=checkbox]");
let listBoolean_cat = [];

allCheckbox_cats.forEach(item => {
    item.addEventListener('change', function(){
        allCheckbox_cats.forEach(i => {
            listBoolean_cat.push(i.checked) ;
        })
        if(listBoolean_cat.includes(false)){
            selectAll_cat.checked = false;
        } else {
            selectAll_cat.checked = true;
        }
        listBoolean_cat = []
    });
});
selectAll_cat.addEventListener('change', function () {
    if (this.checked) {
        allCheckbox_cats.forEach(i => {
            i.checked = true;
        })
    } else {
        allCheckbox_cats.forEach(i => {
            i.checked = false;
        })
    }
});


const list = [...new Set(pets.map((item) => item))];
const productList = document.getElementById("product-list");

productList.innerHTML = list.map((item) => {
    const { image, name, price, unit, rating } = item;

    const starIcons = Array.from({ length: 5 }, (_, index) => {
        if (index < rating) {
            return '<i class="full fa-solid fa-star"></i>';
        } else {
            return '<i class="empty fa-solid fa-star"></i>';
        }
    }).join('');

    return (
        `<div class="product">
            <a href="" class="product-link">
                <div class="product-image">
                    <div class="star-and-bag_plus">
                        <div class="star">${starIcons}</div>
                        <div class="bag-shopping">
                            <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Line"><path d="m22.29 6.06a3 3 0 0 0 -2.29-1.06h-14v-1a3 3 0 0 0 -3-3h-1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v10a5 5 0 0 0 2.9 4.52 3 3 0 1 0 5.42.48h2.36a3 3 0 1 0 5.46-.39 3 3 0 0 0 1.49-2.12l1.33-8a3 3 0 0 0 -.67-2.43zm-11.79 13.94a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm7 1a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm2.15-4.84a1 1 0 0 1 -1 .84h-9.65a3 3 0 0 1 -3-3v-7h14a1 1 0 0 1 .76.35 1 1 0 0 1 .23.82z"/><path d="m16.08 11h-1.5v-1.5a1 1 0 0 0 -2 0v1.5h-1.5a1 1 0 1 0 0 2h1.5v1.5a1 1 0 0 0 2 0v-1.5h1.5a1 1 0 0 0 0-2z"/></g></svg>
                        </div>
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