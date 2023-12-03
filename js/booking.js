// popup confirm
var countdown = 10; // Set the initial countdown value
var countdownElement = document.getElementById('countdown');

function startCountdown() {
    // Update the countdown element
    countdownElement.textContent = countdown;

    // Decrease the countdown
    countdown--;

    // Check if countdown is completed
    if (countdown < 0) {
    redirectToHomePage();
    } else {
    // Schedule the next countdown iteration after 1 second
    setTimeout(startCountdown, 1000);
    }
}

function redirectToHomePage() {
    window.location.href = '../Home.html';
}
function cancel(){
    let popup_cancel = document.getElementById('popup_cancel');
    popup_cancel.style.display = 'none';
}

// Format date booking
function formatDate(inputDate) {
    // Chuyển đổi định dạng ngày từ "YYYY-MM-DD" sang "DD-MM-YYYY"
    var dateParts = inputDate.split("-");
    var formattedDate = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
    return formattedDate;
  }
// Get service type
var selectedServices = [];
function getSelectedServices() {
    // Lấy danh sách các checkbox có name là "serviceType"
    var checkboxes = document.querySelectorAll(".service_type label input");
    
    // Lặp qua danh sách để kiểm tra xem checkbox nào đã được chọn
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedServices.push(checkboxes[i].value);
      }
      else{
        var index = selectedServices.indexOf(checkboxes[i].value);
        if (index !== -1) {
          selectedServices.splice(index, 1);
        }
      }
    }
}
function select_service(){
    let checkboxes_service = document.querySelectorAll(".service_type label");
    let check = document.querySelectorAll(".service_type label input");
    checkboxes_service.forEach(function(element, idx){
        element.addEventListener('click', function(){
            if (check[idx].checked==true){
                element.style.color = 'white';
                element.style.backgroundColor = '#fc591e';
            }
            else{
                element.style.color = 'black';
                element.style.backgroundColor = 'white';
            }
        })
    })
}
$(document).ready(function(){
    select_service();
    let btn_confirm = document.getElementById('btn_confirm');
    btn_confirm.addEventListener('click', function() {
        getSelectedServices();
        let confirm_service=[];
        for(let i = 0; i<selectedServices.length; i++){
            if (i!=0 && i!=(selectedServices.length)){
                confirm_service.push(', ')
            }
            confirm_service.push(selectedServices[i])
        }
        // fill content form confirm
        $('#confirm_name').html($('#name').val());
        $('#confirm_phone').html($('#phone').val());
        $('#confirm_service').html(confirm_service);
        $('#confirm_date').html(formatDate($('#date').val()));
        $('#confirm_time').html($('#time').val());
        $('#confirm_note').html($('#note').val());
        // show popup
        var popup = document.getElementById('popup');
        popup.style.display = 'block';
        startCountdown();
        });
    let btn_cancel = document.getElementById('btn_cancel');
    btn_cancel.addEventListener('click', function(){
        var popup_cancel = document.getElementById('popup_cancel');
        popup_cancel.style.display = 'block';
    })
})

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
    }, 500); // Adjust the delay time as needed
});