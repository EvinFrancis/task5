import React from 'react'
import '../css/home.css'

function Home() {
  return (
    <div className="home">

      <h1>📚 Library Dashboard</h1>

      {/* Stats Cards */}
      <div className="cards">

        <div className="card">
          <h3>Total Books</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Total Users</h3>
          <p>45</p>
        </div>

        <div className="card">
          <h3>Issued Books</h3>
          <p>30</p>
        </div>

        <div className="card">
          <h3>Available Books</h3>
          <p>90</p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="table-section">
        <h2>Recent Issued Books</h2>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Book</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John</td>
              <td>Python Basics</td>
              <td>20 Mar 2026</td>
              <td>Returned</td>
            </tr>

            <tr>
              <td>Alice</td>
              <td>React Guide</td>
              <td>22 Mar 2026</td>
              <td>Issued</td>
            </tr>

            <tr>
              <td>David</td>
              <td>Django API</td>
              <td>23 Mar 2026</td>
              <td>Issued</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Home