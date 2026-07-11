function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("bye!");
}

function handleDblClick() {
    console.log("you double clicked");
}
export default function Button() {
    return  (
        <div>
            <button onClick = {handleClick}>Click Me!</button>
            <p onMouseOver = {handleMouseOver}>this parah is for event demo  this parah is for event demo
                this parah is for event demo this parah is for event demo</p>
            <button onDoubleClick = {handleDblClick} >double click me!</button>
        </div>

    );
}

