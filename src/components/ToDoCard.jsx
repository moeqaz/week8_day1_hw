import React, { useState } from 'react'
import Form from './Form'

export default function ToDoCard() {
    const [tasks, setTasks] = useState([])

    const addTask= task => {
        if(!task.text || /^\s*$/.test(task.text)){
            return
        }

        const newTasks = [task, ...tasks]

        setTasks(newTasks)
        console.log(...tasks)
    }
  
    return (
    <div>
        <Form onSubmit={addTask} />
    </div>
  )
}
