const app = require("./src/app");
const dbConnection = require("./src/db/db");
require("dotenv").config();
const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
dbConnection(db_url);
