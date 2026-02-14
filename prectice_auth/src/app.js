const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const postRoute = require("./routes/post.routes");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/auth", postRoute);

module.exports = app;
