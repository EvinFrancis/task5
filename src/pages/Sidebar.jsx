import React from 'react'
import { Link } from 'react-router-dom'
import '../css/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      
      <h2>Libary Management</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add_user">Add User</Link></li>
        <li><Link to="/view_user">View User</Link></li>
        <li><Link to="/add_books">Add Books</Link></li>
        <li><Link to="/book_details">Book Details</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
