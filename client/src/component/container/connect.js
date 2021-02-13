import React from "react";
import { useDispatch } from "react-redux";
import { setWebSocket } from "../../reducer/socketReducer";
import sc from "styled-components";

const Connect = () => {
  let ws = null;
  const dispatch = useDispatch();

  const openWebSocket = () => {
    ws = new WebSocket("ws://localhost:3001");

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
          console.log("socket : ", recData.data);
          return;
        default:
          return;
      }
    };
  };

  const onConnect = () => {
    openWebSocket();
  };

  const Button = sc.button`
    background-Color: ${(props) => props.bg};
    Color: ${(props) => props.fg};
  `;

  return (
    <div className="App">
      <Button bg="#fbe305" fg="black" onClick={onConnect}>
        Connect
      </Button>
    </div>
  );
};

export default Connect;
