// const text = document.querySelector('p');
// const btn = document.querySelector('button');


// const colorAction = ()=>{
//     text.attributes[0].value = 'b';
// } 

// btn.addEventListener('click',colorAction);



const list = document.querySelector('ul');
const btn = document.querySelector('button');

const toggleList = ()=>{
    if (list.attributes[0].value === "show") {
    list.attributes[0].value = "hide";
    btn.innerHTML = ">";
        
    }else{
    list.attributes[0].value = "show";
    btn.innerHTML = "X";
    }
}

btn.addEventListener('click',toggleList);