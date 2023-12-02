
// Hiển thị pop up khi Liên hệ
let popup = document.getElementById('popup');
let btnSubmit = document.getElementById('btn_complete');

btnSubmit.addEventListener('click', function(event) {
    // Ngăn chặn hành vi mặc định của form (nếu có)
    event.preventDefault();

    popup.style.display = 'block';
});

function hidePopup() {
  let popup = document.getElementById('popup');
  popup.style.display = 'none';
}

let btnAgree = document.getElementById('btn_agree');
btnAgree.addEventListener('click', function() {
    hidePopup();
});



// Các hàm focus và blur giữ nguyên
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  // nếu người dùng không nhập gì vào trường đó, thì loại bỏ class "focus" từ phần tử cha.
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
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
  }, 3000); // Adjust the delay time as needed
});


