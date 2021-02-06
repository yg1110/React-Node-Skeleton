import { useSelector } from "react-redux";

const SendMessage = () => {
  const socket = useSelector((state) => ({
    webSocket: state.socketReducer.webSocket,
  }));

  const onSendMessage = () => {
    const webSocket = socket.webSocket;
    if (!!webSocket) {
      let sendData = {
        event: "request",
        data: "Test",
      };
      webSocket.send(JSON.stringify(sendData));
    } else {
      console.error("You are not connected to a server.");
    }
  };

  return (
    <div className="App">
      <button onClick={onSendMessage}>SEND</button>
    </div>
  );
};

export default SendMessage;
