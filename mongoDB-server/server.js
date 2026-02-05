const app = require("./src/app");
const connectDB = require("./src/db/db");

// Database connect function call
connectDB();

// Port number: 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
