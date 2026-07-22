function UserList() {
  const users = [
    {
      id: 1,
      name: "Ali Hassan",
      email: "ali@gmail.com",
    },
    {
      id: 2,
      name: "Aisha Ahmed",
      email: "aisha@gmail.com",
    },
    {
      id: 3,
      name: "Mohamed Ali",
      email: "mohamed@gmail.com",
    },
  ];

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;