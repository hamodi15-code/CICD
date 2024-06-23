//console.log("Hi from javascript");
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const response = '{"text": "hello from server"}';
  res.send(response);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
