const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: (parent) => {
      return productsModel.getAllProducts();
    },

    productsByPrice: (parent, args) => {
      return productsModel.getProductbyPrice(args.min, args.max);
    },

    productByID: (_, args) => {
      return productsModel.getProductbyID(args.productId);
    },
  },

  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
  },
};
