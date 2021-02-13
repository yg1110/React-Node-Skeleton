const WebSocketServer = require("ws").Server;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const users = [];

const hostname = "127.0.0.1";
const port = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const wss = new WebSocketServer({ port: 3001 }, () =>
  console.log("Server Start")
);

let WS = null;

wss.on("connection", function (ws, req) {
  console.log(req.headers.origin);
  WS = ws;
  WS.on("message", function (message) {
    const reciveMessage = JSON.parse(message);
    console.log(reciveMessage);
    const sendData = {
      event: "response",
      data: null,
    };

    switch (reciveMessage.event) {
      case "request":
        sendData.data = "some data...";
        WS.send(JSON.stringify(sendData));
        break;
    }
  });
});

app.get("/api/v1/users", (req, res) => {
  res.json(users);
  // const sendData = {
  //   event: "response",
  //   data: users,
  // };
  // WS.send(JSON.stringify(sendData));
  // console.log(WS);
});

app.get("/api/v1/user", (req, res) => {
  const { id } = req.query;
  const findIndex = users.findIndex((user) => Number(user.id) === Number(id));
  if (findIndex !== -1) {
    res.json(users[findIndex]);
  } else {
    res.json([]);
  }
});

app.post("/api/v1/users", (req, res) => {
  const { id, name } = req.body.user;
  const user = {
    id,
    name,
  };
  users.push(user);
  res.json(true);
});

app.put("/api/v1/users", (req, res) => {
  const { id, name } = req.body.user;
  const findIndex = users.findIndex((user) => Number(user.id) === Number(id));

  if (findIndex !== -1) {
    users[findIndex] = {
      id,
      name,
    };
    res.json(true);
  } else {
    res.json(false);
  }
});

app.delete("/api/v1/users", (req, res) => {
  const { id } = req.body;
  const findIndex = users.findIndex((user) => Number(user.id) === Number(id));

  if (findIndex !== -1) {
    users.splice(Number(id), 1);
    res.json(true);
  } else {
    res.json(false);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
