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
    }, 700); // Adjust the delay time as needed
});

document.querySelector(".back-home").addEventListener("click", function(){
    window.location.href = `../Home.html`;
})