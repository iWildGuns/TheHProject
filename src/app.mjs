import express, { json } from "express";
import { configDotenv } from "dotenv";

const app = express();
configDotenv();

app.use(json())
app.get("/", (req, res) => {
  res.send('hi');
});

const PORT = process.env.PORT ?? 6544;

app.listen(PORT, () => {
  console.log(`Listen in the port http:localhost:${PORT}`);
});
