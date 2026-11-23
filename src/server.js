const express = require("express");
const users = require("./routes/users");
const ping = require("./routes/ping");
const files = require("./routes/files");

const app = express();
app.use(express.json());
app.use("/api/users", users);
app.use("/api/ping", ping);
app.use("/api/files", files);

app.listen(3000);
