import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.user);
 console.log("USER OBJECT",user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <div>List of Users</div>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
