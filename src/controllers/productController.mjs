import Product from "../models/db/Product.mjs";

export class ProductController {
  index = async (req, res) => {
    try {
      const products = await Product.findAll();
      console.log(`hizo la peticion`);
      res.status(200).json(products);
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Error interno del servidor", err });
    }
  };

  show = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product)
        return res.status(404).json({ messague: `Producto no encontrado` });
      res.json(product);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error interno del servidor", err });
    }
  };
}
