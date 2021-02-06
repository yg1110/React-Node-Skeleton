import Connect from "../component/container/connect";
import SendMessage from "../component/container/sendMessage";
import { useLogin } from "../hoc/use";

const WebSocket = ({ ...props }) => {
  useLogin(
    () => {
      props.history.push("/login");
    },
    () => {
      console.log("success");
    }
  );
  return (
    <>
      <Connect />
      <SendMessage />
    </>
  );
};

export default WebSocket;
