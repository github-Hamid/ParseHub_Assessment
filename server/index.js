import app from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
