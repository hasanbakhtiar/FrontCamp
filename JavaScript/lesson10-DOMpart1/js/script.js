// DOM -> Document Object Module
// DOM(JavaScript) vasitesi ile bir basha olaraq html ve css mudeaxile ede bilirik.
// Create, Edit, Remove ve.s


// Selectors -> Seciciler
// document.getElementsByTagName('h1')[1].innerHTML = "Salam";
// document.getElementById('text').innerHTML = "New value";
// document.getElementsByClassName('test')[0].innerHTML = "new value 1";

// for(let a =0; a<10; a++){
//     document.getElementsByClassName('testText')[a].innerHTML = 'new text';
// }



// document.getElementsByTagName('p')[0].innerText= "<b>Hello</b>";


// QuerySelectors
// document.querySelector
// document.querySelectorAll

// document.querySelectorAll('p')[2].innerHTML="Hello1";
// document.querySelector('#a').innerHTML = "Hello1";

const text = document.querySelector('p');
// EVENTS -> Hadiseler
const changeText = ()=>{
    text.innerHTML = "Hello";
    text.style.background = "red";
    text.style.color = "#fff";
}
document.querySelector('button').addEventListener('click', changeText);

