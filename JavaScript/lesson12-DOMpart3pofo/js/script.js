// select content
const hero =  document.querySelector('.hero');
const menu = document.querySelector('.menu');

// select button
const go = document.querySelector('#go');
const menuBtn = document.querySelector('#menuBtn');

const showMenu =()=>{
    hero.attributes[0].value = 'hide';
    menu.attributes[0].value = 'show';
}

const hideMenu =()=>{
    hero.attributes[0].value = 'show';
    menu.attributes[0].value = 'hide';
}

go.onclick = showMenu;
menuBtn.onclick = hideMenu;

go.accessKey = "w";
menuBtn.accessKey = "q";