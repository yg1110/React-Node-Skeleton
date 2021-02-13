import ApiTest from "../component/container/apiTest";
import Connect from "../component/container/connect";
import SendMessage from "../component/container/sendMessage";
import UserList from "../component/container/userList";
import service from "../service";
import { useEffect, useState } from "react";
import { useLogin } from "../hoc/use";

const WebSocket = ({ ...props }) => {
  const [users, setUsers] = useState("");
  useLogin(
    () => {
      props.history.push("/login");
    },
    () => {
      console.log("success");
    }
  );

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await service.getUsers();
    setUsers(res.data);
  };

  return (
    <>
      <Connect />
      <SendMessage />
      <ApiTest getUsers={getUsers} />
      <UserList users={users} />
    </>
  );
};

export default WebSocket;
