import "./App.css";
import UserDetailsList from "./components/UserDetailsList/UserDetailsList";
import NewUserCard from "./components/UI/NewUserCard";
import React, { useState } from "react";
import UserForm from "./components/NewUser/UserForm";

const initialList = [
  { id: "111", details: "Max (31 years old)" },
  { id: "222", details: "Sam (30 years old)" },
];

function App() {
  const [userList, setUserList] = useState(initialList);

  const addUserHandler = (newUser) => {
    const userData = {
      ...newUser,
      id: Math.random().toString(),
    };
    setUserList((prevUserList) => {
      return [...prevUserList, userData];
    });
  };

  const onDeleteUserHandler = (userId) => {
    const newList = userList.filter((user) => {
      return user.id !== userId;
    });
    console.log(newList);
    setUserList(newList);
  };

  return (
    <React.Fragment>
      <NewUserCard>
        <UserForm onAddUser={addUserHandler} />
      </NewUserCard>
      <UserDetailsList users={userList} onDeleteUser={onDeleteUserHandler} />
    </React.Fragment>
  );
}

export default App;
