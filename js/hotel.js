// toggle room button 
let btn = document.getElementById('selected_option');
let text = document.getElementsByClassName('room_toggle_btn');

function room_leftClick() {
	btn.style.left = '0';
    text[0].style.color = 'white';
    text[1].style.color = 'black';
}

function room_rightClick() {
	btn.style.left = '175px';
    text[1].style.color = 'white';
    text[0].style.color = 'black';
}

// toggle rule button
let rule = document.getElementById('rule_note_selected');
let rule_text = document.getElementsByClassName('rule_note_toggle_btn');

function rule_leftClick() {
	rule.style.left = '0';
    rule_text[0].style.color = 'white';
    rule_text[1].style.color = 'black';
}

function rule_rightClick() {
	rule.style.left = '150px';
    rule_text[1].style.color = 'white';
    rule_text[0].style.color = 'black';
}