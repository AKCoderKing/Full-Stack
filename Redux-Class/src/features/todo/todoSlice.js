import { createSlice,nanoid } from '@reduxjs/toolkit'
const initialState = {
    todos : [{id : "abc" ,task : "demo-task",isDone: false}],

};

export const todoSlice = createSlice({  // createslice banayenge jisse ki aur bhi function isko use kar ske
    name : "todo",
    initialState, 
    reducers : { // reducers is a objct of function, action is like a event, 
        // reducer main do cheeze hoti h state and action
       addTodo: (state, action) => {
          const newTodo = {
            id: nanoid(),
            task: action.payload,
            isDone: false,
           };
           state.todos.push(newTodo); // direct mutation is allowed
        },  
        deleteTodo: (state, action) => {
          
           state.todos = state.todos.filter((todo) => todo.id != action.payload );
        },
        markAsDone: (state,action) =>
        {
            // action.paylload
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
            });
        },
    },
});


export const { addTodo ,deleteTodo,markAsDone} = todoSlice.actions; // ye thoda samjh nhi aya h bas
export default todoSlice.reducer;
