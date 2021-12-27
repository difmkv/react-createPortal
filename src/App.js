import { useState, useEffect } from "react";

import User from "./User";

const OPTIONS = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const fetchData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    OPTIONS
  );
  return await response.json();
};

function App() {
  const [users, setUsers] = useState([]);
  const [delayedUsers, setDelayedUsers] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const fetchUsersData = () =>
    fetchData()
      .then((users) => setDelayedUsers(users))
      .catch((err) => console.error(err));

  return (
    <div>
      <button onClick={fetchUsersData}>Fetch data</button>

      {delayedUsers.map(({ id, name }) => (
        <h3 key={id}>{name}</h3>
      ))}

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
