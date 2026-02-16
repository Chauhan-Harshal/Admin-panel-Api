import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export default function Dashboard({ onLogout }) {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${API_BASE}/employees`)
        setEmployees(res.data || [])
      } catch (err) {
        setError(err?.response?.data?.message || err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchEmployees()
  }, [])

  return (
    <div className="dashboard">
      <div className="navbar">
        <h1>Dashboard</h1>
        <div>
          <button onClick={() => onLogout?.()}>Logout</button>
        </div>
      </div>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Employees</h3>
            <div className="value">{loading ? '...' : employees.length}</div>
          </div>
        </div>
        <div className="table-container">
          <h3>Recent Employees</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.slice(0, 10).map((emp, idx) => (
                <tr key={emp._id || idx}>
                  <td>{emp.name || emp.fullName || '—'}</td>
                  <td>{emp.email || '—'}</td>
                </tr>
              ))}
              {employees.length === 0 && !loading && (
                <tr>
                  <td colSpan={2}>No employees found.</td>
                </tr>
              )}
            </tbody>
          </table>
          {error && <div className="alert alert-error">{error}</div>}
        </div>
      </div>
    </div>
  )
}
