
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector('.searchBtn');
    const closeBtn = document.querySelector('.closeBtn');
    const searchBox = document.querySelector('.searchBox');
    const cartIcon = document.querySelector('.cartBtn');
    const hamburgerIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    searchBtn.onclick = function () {
        searchBox.classList.add('active');
        closeBtn.classList.add('active');
        searchBtn.classList.add('active');
        cartIcon.style.display = 'none'; // Hide the cart icon
        closeBtn.style.marginLeft = '20px';
    };

    closeBtn.onclick = function () {
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
        cartIcon.style.display = 'flex'; // Show the cart icon again
        closeBtn.style.marginLeft = '0';
    };
    hamburgerIcon.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
    });
});
