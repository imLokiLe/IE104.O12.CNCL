let blogs = document.querySelectorAll('.blog .blog_list .blog_content');
blogs.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        let img = element.getElementsByTagName('img');
        let mask = element.getElementsByTagName('span');
        let date = element.getElementsByClassName('date');
        img[0].style.transform = "scale(1)";
        mask[0].style.display = "block";
        date[0].style.backgroundColor = "black";
    })
    element.addEventListener('mouseleave', function(){
        let img = element.getElementsByTagName('img');
        let mask = element.getElementsByTagName('span');
        let date = element.getElementsByClassName('date');
        img[0].style.transform = "scale(1.15)";
        mask[0].style.display = "none";
        date[0].style.backgroundColor = "#fc591e";
    })
})