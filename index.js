const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const jobRouter = require("./routes/job.routes");
const app = express();

require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/job", jobRouter);

// Start the server
const port = 8080;

app.listen(process.env.port || port, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log(`Server started on port ${process.env.port}`);
  } catch (error) {
    console.log(err);
  }
});
