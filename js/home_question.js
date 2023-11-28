let question = document.querySelectorAll('.question .question_content .question_item');
let content = document.querySelectorAll('.question .question_content .question_item p');
let check = document.querySelectorAll('.question .question_content .question_item .check');
question.forEach(function(element, idx){
    element.addEventListener('click', function(){
        content.forEach(function(item){
            item.style.display = 'none';
        })
        content[idx].style.display = 'block';
        
        check.forEach(function(item){
            item.style.backgroundColor = '#000';
        })
        check[idx].style.backgroundColor = '#fc591e';
       
    })
})