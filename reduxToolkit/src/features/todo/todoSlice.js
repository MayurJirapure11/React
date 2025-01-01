// nonoid use for getting unique id
import {createSlice , nanoid} from '@reduxjs/toolkit'

// Initial state of the Store
const initialState = {
    todos : [{
        id: 1,
        text: "Hello World"
    }]
}

// createSlice accepts a initial state and it have reducers funtions
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
    }
})

// List of reducer to be exported for store & individual reducer are exported as they can be used in components
export const {addTodo , removeTodo} = todoSlice.actions 

export default todoSlice.reducer