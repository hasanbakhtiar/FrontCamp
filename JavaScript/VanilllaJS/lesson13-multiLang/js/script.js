// selectors
const multiLangItems = document.querySelectorAll('a');
const multiLangBtn = document.querySelector('#multilangBtn');

// multilang data with array
const az = ["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"];
const en = ["Home","About","Services","Blog","Contact"];

const multiLang=()=>{
    if (multiLangBtn.innerHTML === "AZ") {
            for(let j = 0; j < az.length;j++){
                multiLangItems[j].innerHTML = az[j];
            }
            multiLangBtn.innerHTML = 'EN';
        }else{
            for(let j = 0; j < en.length;j++){
                multiLangItems[j].innerHTML = en[j];
            }
            multiLangBtn.innerHTML = 'AZ';
        }
    }


multiLangBtn.onclick = multiLang;


document.querySelector('#mode').onclick = ()=>{
    if (document.querySelector('#mode').innerHTML === "Light") {
        document.querySelector('nav').className = 'navbar navbar-expand-lg navbar-light bg-light';
        document.querySelector('#mode').innerHTML = "Dark";
        document.querySelector('#mode').className = "btn btn-outline-dark ms-3";
        multiLangBtn.className = "btn btn-outline-dark";

    }else{
        document.querySelector('nav').className = 'navbar navbar-expand-lg navbar-dark bg-dark';
        document.querySelector('#mode').innerHTML = "Light";
        document.querySelector('#mode').className = "btn btn-outline-light ms-3";
        multiLangBtn.className = "btn btn-outline-light";
    }
    
}


