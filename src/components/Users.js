import { useEffect, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import User from './User';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/users`)
      .then(res => setUsers(res.data))
      .finally(data => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <NavLink
                to={`/users/${user.id}`}
                className={({ isActive }) => isActive ? "active" : undefined}
              >
                {user.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <Routes>
        <Route path=":id" element={<User />} />
      </Routes>
    </div>
  );
}

export default Users;