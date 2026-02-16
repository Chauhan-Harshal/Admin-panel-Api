import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    address: '123 Main St',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', user);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
