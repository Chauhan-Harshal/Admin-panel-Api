const axios = require('axios')

const API_BASE = process.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const employees = [
  { name: 'Alice Johnson', email: 'alice.johnson@example.com', position: 'Engineer' },
  { name: 'Bob Martinez', email: 'bob.martinez@example.com', position: 'Designer' }
]

async function run() {
  try {
    for (const emp of employees) {
      const res = await axios.post(`${API_BASE}/employees`, emp)
      console.log('Created:', res.data)
    }
    console.log('Done')
  } catch (err) {
    console.error('Error creating employees:', err?.response?.data || err.message)
    process.exit(1)
  }
}

run()
