import React from 'react'

export default function Navbar(props) {
    console.log(props);
  return (
    <nav className='navbar navbar-danger bg-dark'>
        <div className='container-fluid'>
            <a className='navbar-brand text-danger' href='/'>Welcome to your To-Do List, {props.fName} {props.lName}</a>
        </div>
    </nav>
  )
}
