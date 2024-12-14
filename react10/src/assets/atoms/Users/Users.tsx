import { useNavigate } from "react-router-dom";

const usersInfo = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

const Users = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {usersInfo.map((user) => (
          <li
            key={user.id}
            onClick={() => handleClick(user.id)}
            style={{ cursor: "pointer"}}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
