import React from 'react'

function Book_details() {
  return (
    <div>
           <h1>Book Details</h1>

     <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        </table>
    </div>
  )
}

export default Book_details
