const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 3002 }, () =>
  console.log("Server Start")
);

wss.on("connection", function (ws, req) {
  console.log(req.headers.origin);
  ws.on("message", function (message) {
    const reciveMessage = JSON.parse(message);
    console.log(reciveMessage);
    const sendData = {
      event: "response",
      data: null,
    };

    switch (reciveMessage.event) {
      case "request":
        sendData.data = "some data...";
        ws.send(JSON.stringify(sendData));
        break;
    }
  });
});
