import express from "express";
import mariadb from "mariadb";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
})

app.listen(port, () => {
  console.log(`server started on port ${port}`);
})
