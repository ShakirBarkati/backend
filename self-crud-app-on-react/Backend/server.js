const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config();

const port = process.env.PORT || 3000

app.listen(port, (e) => {
  console.log(`Server listening on port ${port}`);
});
connectDB();
