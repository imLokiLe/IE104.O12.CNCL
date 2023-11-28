let item = document.querySelectorAll('.moments .moments_wrapper .moment_item');
item.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        let img = element.getElementsByTagName('img');
        img[0].style.scale = "1";
        let text = element.getElementsByTagName('h5');
        text[0].style.color = "#FF6B35";
    })
    element.addEventListener('mouseleave', function(){
        let img = element.getElementsByTagName('img');
        img[0].style.scale = "1.07";
        let text = element.getElementsByTagName('h5');
        text[0].style.color = "whitesmoke";
    })
})