import React, { useState } from 'react';

const Home = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', position: 'Designer', email: 'jane@example.com' },
  ]);

  return (
    <div className="home-page">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Total Employees</h2>
          <p className="number">{employees.length}</p>
        </div>
        <div className="card">
          <h2>Active Users</h2>
          <p className="number">5</p>
        </div>
        <div className="card">
          <h2>Total Projects</h2>
          <p className="number">12</p>
        </div>
      </div>

      <div className="employees-section">
        <h2>Recent Employees</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
