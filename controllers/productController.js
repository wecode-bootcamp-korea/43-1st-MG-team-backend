const productService = require("../services/productService");

const productsInqury = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }
    const productsInqury = await productService.productsInqury(categoryId);
    return res.status(200).json({
      data: productsInqury,
    });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json({ message: err.message });
  }
};

module.exports = {
  productsInqury,
};
