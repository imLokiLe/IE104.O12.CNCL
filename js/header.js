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

// Một mảng giả định các đề xuất tìm kiếm
const suggestions = [
    'Đồ ăn cho chó',
    'Đồ ăn cho mèo',
    'Phụ kiện thú cưng',
    'Dụng cụ huấn luyện',
    'Đồ chơi cho thú cưng',
    'Chó Alaska',
    'Chó Pom',
    'Chó Phốc sóc',
    'Chó Corgi',
];

// Sự kiện khi người dùng nhập vào ô tìm kiếm
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    let matches = suggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(searchTerm)
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
        return;
    }

    autocomBox.innerHTML = '';
    matches.forEach(match => {
        const listItem = document.createElement('li');
        listItem.innerText = match + ' '; // Thêm khoảng trắng vào cuối từ khóa
        listItem.addEventListener('click', function () {
            searchInput.value = match;
            autocomBox.style.display = 'none';
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
