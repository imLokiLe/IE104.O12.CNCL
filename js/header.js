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
    const searchBox = document.querySelector('.searchBox');
    const cartIcon = document.querySelector('.cartBtn');
    
    searchBtn.onclick = function () {
        searchBox.classList.add('active');
        closeBtn.classList.add('active');
        searchBtn.classList.add('active');
        cartIcon.style.display = 'none';
        closeBtn.style.marginLeft = '20px';
    };

    closeBtn.onclick = function () {
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
        cartIcon.style.display = 'flex';
        closeBtn.style.marginLeft = '0';
    };