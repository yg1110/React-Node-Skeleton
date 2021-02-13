import React from "react";

const UserList = ({ users }) => {
  return (
    <>{!!users && users.map((user) => <div key={user.id}>{user.name}</div>)}</>
  );
};

export default UserList;
