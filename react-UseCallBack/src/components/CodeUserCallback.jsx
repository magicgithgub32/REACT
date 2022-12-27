import React, { useState, useCallback } from "react";
import DeleteUser from "./DeleteUser";

const CodeUserCallback = () => {
    console.log('Render userCallback component')
  const [user, setUser] = useState({
    name: "Alberto",
    surname: "Rivera",
    age: 35
  });
  const deletUserCallback = useCallback(() => {
    setUser({ name: "", surname: "", age: 0 });
  }, []);
  return (
    <>
      <h3>
        {user.name} || {user.surname} || {user.age}
      </h3>
      <input
        type="text"
        value="user.name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        value="user.surname"
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
      />
      <input
        type="number"
        value="user.age"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />

      <DeleteUser deleteUser={deletUserCallback} name={"Reset User"} />
    </>
  );};
export default CodeUserCallback;
