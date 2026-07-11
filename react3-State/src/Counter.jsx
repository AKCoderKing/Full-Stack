import {useState} from "react";

function init() {
    console.log("init was called");
    return Math.random();

}

export default function Counter() {
    let [count , setCount] = useState(init); // this is only for initialization
    console.log("component is rendered");
    console.log(`count = ${count}`);
    function incCount() {
        // setCount(count += 1);
        setCount((currCount) => {
            return currCount +1;
        });
        setCount((currCount) => {
            return currCount +1;
        });
       // console.log(`inside increase count = ${count}`);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick = {incCount}>Increase Count</button>
        </div>

    );
}















