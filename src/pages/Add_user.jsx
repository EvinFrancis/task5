import React from 'react'
import '../css/adduser.css'

function Add_user() {
   
  return (
     <div className="add-user">

      <h1> Add User</h1>

      <form >

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          
        />
        

        <button type="submit">Add User</button>

      </form>

    </div>
  )
}

export default Add_user
