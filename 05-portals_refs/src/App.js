import { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList.js";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUserList) => [{ name, age, id: Math.random().toString() }, ...prevUserList]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
