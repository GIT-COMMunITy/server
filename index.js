// const express = require('express')   // common JS
import express from "express"; // ES6
import boardRoute from "./src/routes/boardRoute.js";
import guestbookRoute from "./src/routes/guestbookRoute.js";
import userRoute from "./src/routes/userRoute.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/board", boardRoute);
//app.use("/guestbook", guestbookRoute);
app.get("/guestbook", (req, res) => {
  const query = `SELECT * FROM guestbook_entries`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching guestbook entries: ", error);
      res.status(500).json({ error: "Failed to fetch guestbook entries" });
      return;
    }
    res.json(results);
  });
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
