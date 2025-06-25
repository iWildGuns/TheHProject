import Category from "../models/db/Category.mjs";

export class CategoryController {
  index = async (req, res) => {
    try {
      const categories = await Category.findAll();
      console.log(`se hizo la peticion...`);
      res.status(200).json(categories);
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Error interno del servidor", err });
    }
  };

  show = async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category)
        return res.status(404).json({ messague: `Categoria no encontrado` });
      res.json(category);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error interno del servidor", err });
    }
  };

  create = async (req, res) => {
    const { categoryName, categoryDescription } = req.body;
    try {
      const newCategory = await Category.create({
        categoryName: categoryName,
        categoryDescription: categoryDescription,
      });
      console.log("Category ID:", newCategory.categoryId);
      res.status(201).json(newCategory);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error interno del servidor", err });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { categoryName, categoryDescription } = req.body;
    try {
      const [updateCategory] = await Category.update(
        {
          categoryName: categoryName,
          categoryDescription: categoryDescription,
        },
        {
          where: {
            categoryId: id,
          },
        }
      );
      if (updateCategory === 0) {
        return res.status(404).json({ message: "Categoria no encontrada" });
      }
      console.log(`La categoria: ${categoryName} ha sido modificada...`);
      res.status(200).json({ message: "Categoria actualizada!" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error interno del servidor", err });
    }
  };
}
