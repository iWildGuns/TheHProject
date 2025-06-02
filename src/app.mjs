import express, { json } from "express";
import { configDotenv } from "dotenv";
import { itemsRouter } from "./routes/itemsRouter.mjs";

const app = express();
configDotenv();

app.use(json())
app.get("/hi", (req, res) => {
  res.send('hi');
});
app.get('/', itemsRouter)

const PORT = process.env.PORT ?? 6544;

app.listen(PORT, () => {
  console.log(`Listen in the port http:localhost:${PORT} ${process.env.NODE_ENV}`);
});
