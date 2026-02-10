require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
connectDb();
