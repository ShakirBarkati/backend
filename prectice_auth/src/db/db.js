const mongoose = require("mongoose");

async function dbConnection(db_url) {
  await mongoose
    .connect(db_url)
    .then((res) => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(`Database Connection ${err}`);
    });
}

module.exports = dbConnection;
