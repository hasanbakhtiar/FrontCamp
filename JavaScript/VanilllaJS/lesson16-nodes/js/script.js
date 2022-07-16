// const text  = document.querySelector(".text");
// const info  = document.querySelector(".info");

// // info.innerHTML = text.firstChild.nodeType;
// // if (text.nodeName === "H1") {
// //     console.log('a');
// // }else{
// //     console.log('b');
// // }
// // info.innerHTML = text.nodeName;
// // info.innerHTML = text.firstChild.nodeValue;
// // info.innerHTML = text.parentNode.nodeName;
// // info.innerHTML = text.parentNode.nodeName;
// // info.innerHTML = document.querySelector('ul').childNodes[2].firstChild.nodeValue;
// // info.innerHTML = document.querySelector('ul').lastChild.firstChild.nodeValue;
// // info.innerHTML = document.querySelectorAll('li')[1].previousSibling.firstChild.nodeValue;
// // info.innerHTML = document.querySelectorAll('li')[1].nextSibling.firstChild.nodeValue;
// const infoValue=()=>{
//     info.innerHTML = document.querySelector('input').value;
// }


// TODO APP Start
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('#todoBtn');
const todoList = document.querySelector('.list');

const todoApp = () => {
    const li = document.createElement('li');
    li.innerHTML = todoInput.value;
    todoList.appendChild(li);
    todoInput.value = "";
    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through'
    })
    li.ondblclick = () => {
        li.remove();
    }
}
todoBtn.onclick = todoApp;

// TODO APP End