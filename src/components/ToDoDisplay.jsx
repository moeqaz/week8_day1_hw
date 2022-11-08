import React, { useState } from 'react'
import Form from './Form'

export default function ToDoDisplay() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


  return tasks.map((task, index) => (
    <div className={task.isComplete ? 'task-row complete' : 'task-row'}>
        key={index}
        <div key={todo.id} onClick={() => completeTodo(todo.id)}></div>
    </div>
  ))
}
