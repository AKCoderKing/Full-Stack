import {useState} from "react";

export default function TodoList () {
       let [todos,setTodos] = useState(["sample Task"]);
       let [newTodo,setNewTodo] = useState("");

       let addNewTask = () => {
           console.log("we have to add new task in todo");
       };

    return ( 
        <div>
            <input placeholder = "add a task" value ={newTodo}></input>
            <button onClick ={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>

            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}