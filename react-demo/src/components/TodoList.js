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
                        return <li> {todo.name} </li>
                    })
                }
            </ul>
        </div>

    )
}

export default TodoList
