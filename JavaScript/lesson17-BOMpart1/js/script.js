const info = document.querySelector('span');

// info.innerHTML = screen.height;
// info.innerHTML = screen.width;
// info.innerHTML = screen.availHeight;
// info.innerHTML = screen.availWidth;
// info.innerHTML = screen.colorDepth;
// info.innerHTML = screen.pixelDepth;
// info.innerHTML = window.innerHeight; 

// if (window.innerHeight > 500) {
    //     document.querySelector('h4').innerHTML = "Hello";
    // }else{
        
        //     document.querySelector('h4').innerHTML = "Mello";
        // }

        
        
// info.innerHTML = location.href;
// info.innerHTML = location.hostname;
// info.innerHTML = location.host;
// info.innerHTML = location.port;
// info.innerHTML = location.pathname;
// info.innerHTML = location.origin;
// info.innerHTML = location.protocol;
// location.assign("https://www.google.com");
// let cd;

// // const a =()=>{history.back()}
// document.querySelector('#i').onclick = () =>{
//         // window.open("https://www.w3schools.com");
//      cd =  window.open("","hello","width=700,height=400");
// }

// document.querySelector('#c').onclick = ()=>{
//     // cd.close();
//     // cd.moveTo(500, 100);
//     // cd.resizeTo(500, 100);
// }

// info.innerHTML = navigator.appCodeName;
// info.innerHTML = navigator.appName;
// info.innerHTML = navigator.platform;
// info.innerHTML = navigator.product;
// info.innerHTML = navigator.appVersion;
// info.innerHTML = navigator.userAgent;
info.innerHTML = navigator.language;

if (navigator.language == "en-US") {
    document.querySelector('h4').innerHTML = "Hello";
}else if(navigator.language == "az-AZ"){
    document.querySelector('h4').innerHTML = "Salam";

}