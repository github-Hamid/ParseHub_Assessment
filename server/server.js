import express from "express";
import cors from "cors";
import pathRoute from "./api/routes/path.route.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/path", pathRoute);

app.use("*", (req, res) => {
  res.status(404).json({ error: true, message: "Not Found!" });
});

export default app;
