import express, { json } from "express";
import { configDotenv } from "dotenv";
configDotenv()
// import path from "path";
// import { fileURLToPath } from "url"; 
import db from "./models/db/Sequelize.mjs";
import productRoutes from './routes/productRoutes.mjs'
import categoryRouter from "./routes/categoryRoutes copy.mjs";

// const __dirname = path.dirname(fileURLToPath(import.meta.url))
const { sequelize } = db


try {
  await sequelize.authenticate()
  console.log('Coneccion establecida')
} catch (err) {
  console.log('Coneccion no establecida', err)
}

const app = express();
app.use(json())

app.use('/api/productos', productRoutes)
app.use('/api/categorias', categoryRouter)

const PORT = process.env.PORT ?? 6544;

app.listen(PORT, () => {
  console.log(`Listen in the port http://localhost:${PORT}`);
});
