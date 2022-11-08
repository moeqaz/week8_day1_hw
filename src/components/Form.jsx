import React, { useState } from 'react'

export default function Form(props) {
    const [todo, setTodo] = useState('')

    function handleEdit(e){
        setTodo(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();

        props.onSubmit({
            // id: Math.floor(Math.random() * 10),
            text: todo
        });

        setTodo('');
    };

  return (
    <form className='to-do' onSubmit={handleSubmit}>
        <input className='input-todo form-control mt-4 text-center' placeholder='Enter a Task' type='text' onChange={handleEdit} value={todo}/>
        <button className="submit-todo btn btn-success form-control my-3">Add to Your List</button>
    </form>
  )
}
