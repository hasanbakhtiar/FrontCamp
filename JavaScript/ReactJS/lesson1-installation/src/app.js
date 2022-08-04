let a = "Pen";
const list = (
    <ul style={{"color":"red"}}>
        <li>{a}</li>
        <li>Book</li>
        <li>Board</li>
    </ul>
)
const temp = (
    <div>
        {list}
        {list}
        {list}
        {list}
    </div>
)

ReactDOM.render(temp,document.querySelector('#root'));