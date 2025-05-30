import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("oto = [1, 2, 3]");
});

const PORT = process.env.PORT ?? 6544;

app.listen(PORT, () => {
  console.log(`Listen in the port http:localhost:${PORT}`);
});
