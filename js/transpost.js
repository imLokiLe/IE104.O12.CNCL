document.querySelector('.btn-cancel').addEventListener('click', function() {
    window.location.href = '../cart.html';
});
document.querySelector('.pre.cart-page').addEventListener('click', function() {
    window.location.href = '../cart.html';
});

import { resetDelivery } from '../js/data_delivery.js';
import { arrTranspost, updateTranspostLocalStorage, resetTranspost } from '../js/data_transpost.js';
resetTranspost();
resetDelivery();

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

function loadQuanHuyen() {
    var tinhThanhPho = document.getElementById("tinhThanhPho");
    var quanHuyen = document.getElementById("quanHuyen");
    var phuongXa = document.getElementById("phuongXa");
    var selectedTinhThanhPho = tinhThanhPho.options[tinhThanhPho.selectedIndex].value;
    var quanHuyenData = getQuanHuyenData(selectedTinhThanhPho);
    quanHuyen.innerHTML = '<option value="" disabled selected hidden>Chọn Quận/Huyện</option>';
    for (var i = 0; i < quanHuyenData.length; i++) {
        var option = document.createElement("option");
        option.value = quanHuyenData[i];
        option.text = quanHuyenData[i];
        quanHuyen.appendChild(option);
    }
    quanHuyen.disabled = false;
    phuongXa.disabled = true;
}

function loadPhuongXa() {
    var quanHuyen = document.getElementById("quanHuyen");
    var phuongXa = document.getElementById("phuongXa");
    var selectedQuanHuyen = quanHuyen.options[quanHuyen.selectedIndex].value;
    var phuongXaData = getPhuongXaData(selectedQuanHuyen);
    phuongXa.innerHTML = '<option value="" disabled selected hidden>Chọn Phường/Xã</option>';
    for (var i = 0; i < phuongXaData.length; i++) {
        var option = document.createElement("option");
        option.value = phuongXaData[i];
        option.text = phuongXaData[i];
        phuongXa.appendChild(option);
    }
    phuongXa.disabled = false;
}

function getQuanHuyenData(tinhThanhPho) {
    if (tinhThanhPho === "ha_noi") {
        return ["Quận Ba Đình", "Quận Hoàn Kiếm", "Quận Cầu Giấy"];
    } else if (tinhThanhPho === "hai_phong") {
        return ["Quận Hồng Bàng", "Quận Đồ Sơn", "Huyện An Dương"];
    } else if (tinhThanhPho === "dak_lak") {
        return ["Thành phố Buôn Ma Thuột", "Thị Xã Buôn Hồ", "Huyện M'Đrắk" ];
    } else if (tinhThanhPho === "gia_lai") {
        return ["Thành phố Pleiku", "Huyện Kông Chro", "Huyện Mang Yang"];
    } else if (tinhThanhPho === "hcm") {
        return ["Quận 1", "Thành phố Thủ Đức", "Quận Gò Vấp", "Huyện Củ Chi"];
    } else if (tinhThanhPho === "tien_giang") {
        return ["Thành phố Mỹ Tho", "Thị xã Cai Lậy", "Huyện Gò Công Tây"];
    }
}

function getPhuongXaData(quanHuyen) {
    if (quanHuyen === "Quận Ba Đình") {
        return ["Phường Phúc Xá", "Phường Trúc Bạch", "Phường Liễu Giai"];
    } else if (quanHuyen === "Quận Hoàn Kiếm") {
        return ["Phường Phúc Tân", "Phường Hàng Buồm"];
    } else if (quanHuyen === "Quận Cầu Giấy") {
        return ["Phường Nghĩa Đô", "Phường Trung Hoà", "Phường Mai Dịch"];
    } else if (quanHuyen === "Quận Hồng Bàng") {
        return ["Phường Quán Toan", "Phường Minh Khai", "Phường Phan Bội Châu"];
    } else if (quanHuyen === "Quận Đồ Sơn") {
        return ["Phường Ngọc Xuyên", "Phường Vạn Hương", "Phường Hợp Đức"];
    } else if (quanHuyen === "Huyện An Dương") {
        return ["Thị trấn An Dương", "Xã An Hoà", "Xã Lê Thiện"];
    } else if (quanHuyen === "Thành phố Buôn Ma Thuột") {
        return ["Phường Tân Lợi", "	Xã Ea Kao", "Xã Hòa Thắng"];
    } else if (quanHuyen === "Thị Xã Buôn Hồ") {
        return ["Phường Thống Nhất", "Xã Ea Blang", "Xã Ea Siên"];
    } else if (quanHuyen === "Huyện M'Đrắk") {
        return ["Thị trấn M'Đrắk", "Xã Krông Jing", "Xã Ea H'MLay"];
    } else if (quanHuyen === "Thành phố Pleiku") {
        return ["Phường Thống Nhất", "Xã Ia Kênh", "Xã Biển Hồ"];
    } else if (quanHuyen === "Huyện Kông Chro") {
        return ["Thị trấn Kông Chro", "Xã Đăk Tơ Pang", "Xã Yang Trung"];
    } else if (quanHuyen === "Huyện Mang Yang") {
        return ["Thị trấn Kon Dơng", "Xã Đăk Djrăng", "Xã Kon Thụp"];
    } else if (quanHuyen === "Quận 1") {
        return ["Phường Đa Kao", "Phường Bến Thành", "Phường Cầu Ông Lãnh"];
    } else if (quanHuyen === "Thành phố Thủ Đức") {
        return ["Phường Linh Trung", "	Phường Bình Chiểu", "	Phường Hiệp Bình Chánh"];
    } else if (quanHuyen === "Quận Gò Vấp") {
        return ["Phường 7", "Phường 8", "Phường 9"];
    } else if (quanHuyen === "Huyện Củ Chi") {
        return ["Thị trấn Củ Chi", "Xã Phú Hòa Đông", "Xã An Nhơn Tây"];
    } else if (quanHuyen === "Thành phố Mỹ Tho") {
        return ["Phường 4", "Phường 5", "Phường 10"];
    } else if (quanHuyen === "Thị xã Cai Lậy") {
        return ["Phường 1", "Phường Nhị Mỹ", "Xã Mỹ Phước Tây"];
    } else if (quanHuyen === "Huyện Gò Công Tây") {
        return ["Thị trấn Vĩnh Bình", "Xã Long Bình", "Xã Yên Luông"];
    }
}

let transport_tinhThanhPho;
document.getElementById("tinhThanhPho").addEventListener("change", function() {
    this.classList.add("selected");
    transport_tinhThanhPho = this.options[this.selectedIndex].innerHTML;
    loadQuanHuyen();
});
let transport_quanHuyen;
document.getElementById("quanHuyen").addEventListener("change", function() {
    this.classList.add("selected");
    transport_quanHuyen = this.options[this.selectedIndex].innerHTML;
    loadPhuongXa();
});
let transport_phuongXa;
document.getElementById("phuongXa").addEventListener("change", function() {
    this.classList.add("selected");
    transport_phuongXa = this.options[this.selectedIndex].innerHTML;
});
document.querySelector('.btn-accept').addEventListener('click', function() {
    let user_transport = {
        user_name: document.querySelector(".transpost-text .name").value,
        user_phone: document.querySelector(".transpost-text .phone").value,
        user_direction: document.querySelector(".transpost-text .direction").value,
        user_phuongXa: transport_phuongXa,
        user_quanHuyen: transport_quanHuyen,
        user_tinhThanhPho: transport_tinhThanhPho,
    }
    arrTranspost.push(user_transport);
    updateTranspostLocalStorage();
    window.location.href = '../payment.html';
});