// toggle room button 
let btn = document.getElementById('selected_option');
let text = document.getElementsByClassName('room_toggle_btn');
let normal = document.getElementById('normal');
let vip = document.getElementById('vip')

function room_leftClick() {
	btn.style.left = '0';
    text[0].style.color = 'white';
    text[1].style.color = 'black';
    normal.style.display = 'block';
    vip.style.display = 'none';
}

function room_rightClick() {
	btn.style.left = '175px';
    text[1].style.color = 'white';
    text[0].style.color = 'black';
    normal.style.display = 'none';
    vip.style.display = 'block';
}

// toggle rule button
let rule = document.getElementById('rule_note_selected');
let rule_text = document.getElementsByClassName('rule_note_toggle_btn');
let note_content = document.getElementById('note_content');
let rule_content = document.getElementById('rule_content');

function rule_leftClick() {
	rule.style.left = '0';
    rule_text[0].style.color = 'white';
    rule_text[1].style.color = 'black';
    note_content.style.display = 'block';
    rule_content.style.display = 'none';
}

function rule_rightClick() {
	rule.style.left = '150px';
    rule_text[1].style.color = 'white';
    rule_text[0].style.color = 'black';
    note_content.style.display = 'none';
    rule_content.style.display = 'block';
}

// scroll smooth
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({
        behavior: "smooth" // Để có hiệu ứng mượt mà, có thể sử dụng "auto" nếu không cần hiệu ứng
      });
    }
  }

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
