import connection from "../providers/db.js"; // MySQL 연결을 불러옴

const GuestbookService = {
  getEntries: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM guestbook_entries", (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
        console.log("get guestbook :", results);
      });
    });
  },

  createEntry: (name, content) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO guestbook_entries (name, content) VALUES (?, ?)";
      connection.query(query, [name, content], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        const newEntry = {
          id: results.insertId,
          name,
          content,
          created_at: new Date().toISOString(),
        };
        resolve(newEntry);
      });
    });
  },

  updateEntry: (id, name, content) => {
    return new Promise((resolve, reject) => {
      const query = "UPDATE guestbook_entries SET name=?, content=? WHERE id=?";
      connection.query(query, [name, content, id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.affectedRows === 0) {
          resolve(null);
          return;
        }
        const updatedEntry = {
          id,
          name,
          content,
          created_at: new Date().toISOString(),
        };
        resolve(updatedEntry);
      });
    });
  },

  deleteEntry: (id) => {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM guestbook_entries WHERE id=?";
      connection.query(query, [id], (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  },
};

export default GuestbookService;
