import { config } from "dotenv";
import mysql from "mysql2";

config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "fullstack",
  port: "3306", // 필요할 경우 추가
});

connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 실패:", err.stack);
    throw err;
  }
  console.log("데이터베이스 연결 성공!");
});

connection.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();

export default connection;
