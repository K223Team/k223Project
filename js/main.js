let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dont = document.querySelectorAll('.slider .dont li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
   if(active + 1 > lengthItems){
    active = 0;
   }else{
    active = active + 1;
   }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDont = document.querySelector('.slider .dont li.active');
    lastActiveDont.classList.remove('active');
    dont[active].classList.add('active');
}
