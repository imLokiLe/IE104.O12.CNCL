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

// Dogs
function toggleDropdownDog() {
    const filterDog = document.getElementById("filterDog");
    filterDog.classList.toggle("show-dropdown");
}
const toggleDog = document.getElementById("toggleDog");
toggleDog.addEventListener("click", toggleDropdownDog);

// Cats
function toggleDropdownCat() {
    const filterCat = document.getElementById("filterCat");
    filterCat.classList.toggle("show-dropdown");
}
const toggleCat = document.getElementById("toggleCat");
toggleCat.addEventListener("click",toggleDropdownCat)

//Pagination
function renderPagination() {
    const totalPages = Math.ceil(pets.length / prePage);
    const paginationContainer = document.querySelector('.pagination-container');
    paginationContainer.innerHTML = '';

    // Button trở lại trang cũ
    const btnPrev = document.createElement('button');
    btnPrev.classList.add('btn-prep');
    btnPrev.innerHTML = '<i class="fa-solid fa-caret-left"></i>';
    btnPrev.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderpetCategory(pets);
        renderPagination();
      }
    });
    paginationContainer.appendChild(btnPrev);

    // Số trang
    const pagination = document.createElement('ul');
    pagination.classList.add('pagination');

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-product');
        pageItem.textContent = i;
        pageItem.setAttribute('value', i);
        if (i === currentPage) {
            pageItem.classList.add('current-page');
        }
        pageItem.addEventListener('click', () => {
            currentPage = i;
            renderpetCategory(pets);
            renderPagination();
        });
        pagination.appendChild(pageItem);
    }
    paginationContainer.appendChild(pagination);

    // Button đi tới trang mới 
    const btnNext = document.createElement('button');
    btnNext.classList.add('btn-next');
    btnNext.innerHTML = '<i class="fa-solid fa-caret-right"></i>';
    btnNext.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderpetCategory(pets);
        renderPagination();
      }
    });
    paginationContainer.appendChild(btnNext);
}

let prePage = 12;
let currentPage = 1;
// Show pets category
function renderpetCategory (pets) {
    const petsToRender = pets.slice((currentPage - 1) * prePage, currentPage * prePage);

    // Create a unique list of pets
    const list = [...new Set(petsToRender)];
    //const list = [...new Set(pets.map((item) => item))];
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
}


function displayFilteredPets(allCheckbox_dogs, allCheckbox_cats,  minPrice, maxPrice) {
    const selectedDogBreeds = Array.from(allCheckbox_dogs)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);
    const selectedCatBreeds = Array.from(allCheckbox_cats)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    // Filter dog pets based on selected breeds
    const filteredDogPets = selectedDogBreeds.length === 0
        ? pets
        : pets.filter(pet => pet.featured.genus === 'dog' && selectedDogBreeds.includes(pet.featured.type.id));

    const filteredCatPets = selectedCatBreeds.length === 0
        ? pets 
        : pets.filter(pet => pet.featured.genus === 'cat' && selectedCatBreeds.includes(pet.featured.type.id));

    let combinedFilteredPets;
    // Display filtered dog pets
    if(((filteredDogPets.length + filteredCatPets.length) == pets.length) || ((filteredDogPets.length == pets.length) && (filteredCatPets.length == pets.length))){
        combinedFilteredPets = pets;
        // renderpetCategory (pets);
    } else if(((filteredDogPets.length <= pets.length) && (filteredCatPets.length == pets.length))){
        combinedFilteredPets = filteredDogPets;
    } else if(((filteredDogPets.length == pets.length) && (filteredCatPets.length <= pets.length))){
        combinedFilteredPets = filteredCatPets;
    } else if(((filteredDogPets.length <= pets.length) && (filteredCatPets.length <= pets.length))){
        combinedFilteredPets = [...filteredDogPets, ...filteredCatPets];
    }
    const finalFilteredPets = combinedFilteredPets.filter(pet => {
        const petPrice = parseInt(pet.price.replaceAll(',',''));
        return petPrice >= minPrice && petPrice <= maxPrice;
    });
    renderpetCategory (finalFilteredPets);
}

function renderFilterOptions(filterOptionsElement, genus) {
    const uniqueBreeds = [...new Set(pets.filter(pet => pet.featured.genus === genus).map(pet => pet.featured.type.id))];
    
    filterOptionsElement.innerHTML = '';
    uniqueBreeds.forEach(breedId => {
        const breed = pets.find(pet => pet.featured.genus === genus && pet.featured.type.id === breedId).featured.type;
        const count = pets.filter(pet => pet.featured.genus === genus && pet.featured.type.id === breedId).length;

        const checkbox = document.createElement("li");
        checkbox.innerHTML = `
            <input type="checkbox" name="checkbox" id="${breed.id}">
            <label for="${breed.id}">
                <span class="pets-name">${breed.name}</span>
            </label>
            <span class="pets-count">(${count})</span>
        `;
        filterOptionsElement.appendChild(checkbox);
    });
}
function FilterOptions() {
    const selectAll_dog = document.querySelector(".filter-dog .checkbox-all input[type=checkbox]");
    const selectAll_cat = document.querySelector(".filter-cat .checkbox-all input[type=checkbox]");
    const allCheckbox_dogs = document.querySelectorAll(".filter-dog .pets-checkbox input[type=checkbox]");
    const allCheckbox_cats = document.querySelectorAll(".filter-cat .pets-checkbox input[type=checkbox]");

    let listBoolean_dog = [];
    let listBoolean_cat = [];

    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    progress = document.querySelector(".slider .progress");
    let priceGap = 50000;
    
    priceInput.forEach((input) => {
        input.addEventListener("input", (range) => {
            let minValue = parseInt(priceInput[0].value),
                maxValue = parseInt(priceInput[1].value);
    
            if (maxValue - minValue >= priceGap && maxValue <= 30000000) {
                if (range.target.className === "min-input") {
                    rangeInput[0].value = minValue;
                    progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
                } else {
                    rangeInput[1].value = maxValue;
                    progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
                }
            }
            displayFilteredPets(allCheckbox_dogs, allCheckbox_cats, minValue, maxValue);
        });
    });
      
    rangeInput.forEach((input) => {
        input.addEventListener("input", (range) => {
            let minValue = parseInt(rangeInput[0].value),
                maxValue = parseInt(rangeInput[1].value);
    
            if (maxValue - minValue < priceGap) {
                if (range.target.className === "min-range") {
                    rangeInput[0].value = maxValue - priceGap;
                } else {
                    rangeInput[1].value = minValue + priceGap;
                }
            } else {
                priceInput[0].value = minValue;
                priceInput[1].value = maxValue;
                progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
                progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
            }
            displayFilteredPets(allCheckbox_dogs, allCheckbox_cats, minValue, maxValue);
        });
    });

    allCheckbox_dogs.forEach(item => {
        item.addEventListener('change', function () {
            listBoolean_dog = Array.from(allCheckbox_dogs).map(i => i.checked);

            if (listBoolean_dog.includes(false)) {
                selectAll_dog.checked = false;
            } else {
                selectAll_dog.checked = true;
            }
            displayFilteredPets(allCheckbox_dogs, allCheckbox_cats, priceInput[0].value, priceInput[1].value);
        });
    });

    selectAll_dog.addEventListener('change', function () {
        allCheckbox_dogs.forEach(i => {
            i.checked = this.checked;
        });
        displayFilteredPets(allCheckbox_dogs, allCheckbox_cats, priceInput[0].value, priceInput[1].value);
    });

    allCheckbox_cats.forEach(item => {
        item.addEventListener('change', function () {
            listBoolean_cat = Array.from(allCheckbox_cats).map(i => i.checked);

            if (listBoolean_cat.includes(false)) {
                selectAll_cat.checked = false;
            } else {
                selectAll_cat.checked = true;
            }
            displayFilteredPets(allCheckbox_dogs, allCheckbox_cats, priceInput[0].value, priceInput[1].value);
        });
    });

    selectAll_cat.addEventListener('change', function () {
        allCheckbox_cats.forEach(i => {
            i.checked = this.checked;
        });
        displayFilteredPets(allCheckbox_dogs, allCheckbox_cats, priceInput[0].value, priceInput[1].value);
    });
}

renderpetCategory (pets)
renderFilterOptions(document.getElementById("filterOptionsDog"), 'dog');
renderFilterOptions(document.getElementById("filterOptionsCat"), 'cat');
renderPagination();
FilterOptions()