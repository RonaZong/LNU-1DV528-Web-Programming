import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/error/", (req, res) => {
  process.exit(1);
});

const server = app.listen(PORT, () => {
  console.log(
    `Example app listening at port ${
      server.address().port
    }. NODE_ENV is set to ${process.env.NODE_ENV}`
  );
});
