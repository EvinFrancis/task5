import React from 'react'
import '../css/add_book.css'

function Add_Books() {
  return (
     <div className="add-book">
      <h1>Add Book</h1>

      <form >

        <input
          type="text"
          name="title"
          placeholder="Enter Book Title"
          
        />

        <input
          type="text"
          name="author"
          placeholder="Enter Author Name"
         
        />

        <input
          type="number"
          name="price"
          placeholder="Enter Price"
         
        />

        <input
          type="text"
          name="category"
          placeholder="Enter Category"
          
        />

        <textarea
          name="description"
          placeholder="Enter Description"
         
        />

        <button type="submit">Add Book</button>

      </form>
    </div>
  )
}

export default Add_Books
