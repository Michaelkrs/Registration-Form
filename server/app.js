if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./routers/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
