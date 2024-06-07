import { config } from "dotenv";
import mysql from "mysql2";

config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 실패:", err.stack);
    throw err;
  }
  console.log("데이터베이스 연결 성공!");
});

export default connection;
