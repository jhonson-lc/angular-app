const cors = require("cors");
const express = require("express");
const db = require("./config/db");
const clientRouter = require("./routes/clientRouter");
const userRouter = require("./routes/userRouter");

const app = express();

db.connect();

app.use(express.json());
app.use(cors());

app.use("/api/clientes", clientRouter);
app.use("/api/users", userRouter);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
