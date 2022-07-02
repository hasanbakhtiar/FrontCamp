// document.querySelector('button').onclick = ()=>{
//     // document.querySelector('p').classList.toggle('red');
//     // document.querySelector('p').classList.add('red');
//     // document.querySelector('p').classList.remove('red');
//     // document.querySelector('p').style.color="green";
// }

document.querySelector('button')



// document.querySelector('#modeBtn').onclick=()=>{
//     if (document.querySelector('nav').className == "navbar navbar-expand-lg navbar-light bg-light") {
//     document.querySelector('nav').className = "navbar navbar-expand-lg navbar-dark bg-dark"
//         document.querySelector('#modeBtn').className = "btn btn-outline-light";
//     }else{
//     document.querySelector('nav').className = "navbar navbar-expand-lg navbar-light bg-light"
//     document.querySelector('#modeBtn').className = "btn btn-outline-dark";
//     }
// }


// content selector
const navMenu = document.querySelector('nav');
// btn selector
const modeBtn = document.querySelector('#modeBtn');

// functions

const modeOne = ()=>{
        if (navMenu.className === 'navbar navbar-expand-lg navbar-light bg-light') {
            localStorage.setItem('mode','navbar navbar-expand-lg navbar-dark bg-dark')
            localStorage.setItem('modeBtn','btn btn-outline-light')
            navMenu.className = localStorage.getItem('mode');
            modeBtn.className = localStorage.getItem('modeBtn');
        }else{
            localStorage.setItem('mode','navbar navbar-expand-lg navbar-light bg-light')
            localStorage.setItem('modeBtn','btn btn-outline-dark')
            navMenu.className = localStorage.getItem('mode');
            modeBtn.className = localStorage.getItem('modeBtn'); 
        }
}

// actions
modeBtn.onclick = modeOne;
navMenu.className = localStorage.getItem('mode');
modeBtn.className = localStorage.getItem('modeBtn');


















// localStorage.setItem(); LS-e melumat elave etmek ucundur

// localStorage.getItem();  LS-den melumati cekmek ucundur

// localStorage.removeItem(); LS-den qeyd olunan melumati silmek ucundur

// localStorage.clear(); LS-de olan butun melumati silmek ucundur


// localStorage.setItem('name','Samir');
// localStorage.setItem('surname','Israfilov');
// localStorage.removeItem('name');
// localStorage.clear();
// document.querySelectorAll('p')[0].innerHTML = localStorage.getItem('name');
// document.querySelectorAll('p')[1].innerHTML = localStorage.getItem('surname');