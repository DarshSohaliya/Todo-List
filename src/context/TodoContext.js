import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
        id,
        todo,
        completed,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider  