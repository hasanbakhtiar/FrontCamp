document.querySelector('#btnOne').onclick =()=>{
    if (document.querySelector('#mode').className == 'light') {
        document.querySelector('#mode').className = 'dark';
        document.querySelector('nav').className="navbar navbar-expand-lg navbar-dark bg-dark";
    }else{
        document.querySelector('#mode').className = 'light';
        document.querySelector('nav').className="navbar navbar-expand-lg navbar-light bg-light";


    }
   
}