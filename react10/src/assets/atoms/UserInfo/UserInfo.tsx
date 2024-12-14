import { useParams } from "react-router-dom";

const usersInfo = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

const UserInfo = () => {
    const { id } = useParams<{id: string}>();
    const userId = parseInt(id || '', 10);

    const user = usersInfo.find((i) => i.id == userId);

    if (!user) {
        return <div>404 not found</div>
    }
  return (
    <div>
        <h1>User Informaion</h1>
        <p>User Id: {user.id}</p>
        <p>Name: {user.name}</p>
    </div>
  )
};

export default UserInfo;
