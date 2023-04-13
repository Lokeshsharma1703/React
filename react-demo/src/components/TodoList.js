import React from 'react'

const todos = [
    { name: 'sleeping', isDone: true },
    { name: 'eating', isDone: false },
    { name: 'instagram', isDone: true },
    { name: 'playing', isDone: false },
]


const TodoList = () => {
    return (
        <div>
            <ul>
                {
                    todos.map((todo) => {
                        // return <li> {todo.name}, {todo.isDone.toString()} </li> // boolean and null are not rendered in react use toString()
                        return <li>{todo.name}, <input type='checkbox' defaultChecked={todo.isDone}></input></li>
                    })
                }
            </ul>
        </div>

    )
}

export default TodoList
