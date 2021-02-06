import { useDispatch } from "react-redux";
import { setWebSocket } from "../../reducer/socketReducer";

const Connect = () => {
  let ws = null;
  const dispatch = useDispatch();

  const openWebSocket = () => {
    ws = new WebSocket("ws://localhost:3002");

    ws.onopen = () => {
      dispatch(setWebSocket(ws));
    };

    ws.onerror = () => {
      console.error("Server is not locatable.");
    };

    ws.onmessage = (event) => {
      let recData = JSON.parse(event.data);
      switch (recData.event) {
        case "response":
          console.log(recData.data);
          return;
        default:
          return;
      }
    };
  };

  const onConnect = () => {
    openWebSocket();
  };

  return (
    <div className="App">
      <button onClick={onConnect}>Connect</button>
    </div>
  );
};

export default Connect;
