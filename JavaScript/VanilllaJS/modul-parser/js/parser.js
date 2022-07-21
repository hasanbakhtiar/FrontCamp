let parser, xmlMelumat;

let text =
  "<bookstore><book>" +
  "<title>Everyday Italian</title>" +
  "<author>Giada De Laurentiis</author>" +
  "<year>2005</year>" +
  "</book></bookstore>";

parser = new DOMParser();
xmlMelumat = parser.parseFromString(text, "text/xml");

document.querySelectorAll("li")[0].innerHTML =
  xmlMelumat.querySelector("title").innerHTML;

  document.querySelectorAll("li")[1].innerHTML =
  xmlMelumat.querySelector("author").innerHTML;

  document.querySelectorAll("li")[2].innerHTML =
  xmlMelumat.querySelector("year").innerHTML;
