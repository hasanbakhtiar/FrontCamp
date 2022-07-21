document.querySelector('button').onclick=function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.querySelector("p").innerHTML = this.responseText;
    }
    xhttp.open("GET", "../data/data.txt");
    xhttp.send();
}