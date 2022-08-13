import React from "react";
import  ReactDOM from "react-dom";
import './sass/style.scss'
import photo from './img/img.jpg'
class App extends React.Component{
    render(){
        return(
           <div>
             <h1>Hello React</h1>
             <img width="300" src={photo} alt="err" />
           </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));