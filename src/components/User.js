import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function User() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
      .then(res => setUser(res.data))
      .finally(data => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Deatail</h1>
      {loading && <p>Loading...</p>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <div>
        <Link to={`/users/${Number(id) + 1}`} >Next User</Link>
      </div>
    </div>
  );
}

export default User;