"use strict";

var a = "Pen";
var list = /*#__PURE__*/React.createElement("ul", {
  style: {
    "color": "red"
  }
}, /*#__PURE__*/React.createElement("li", null, a), /*#__PURE__*/React.createElement("li", null, "Book"), /*#__PURE__*/React.createElement("li", null, "Board"));
var temp = /*#__PURE__*/React.createElement("div", null, list, list, list, list);
ReactDOM.render(temp, document.querySelector('#root'));
