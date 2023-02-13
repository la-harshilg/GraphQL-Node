const products = [
  {
    id: "redshoes",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "blueshoe",
    description: "Blue Shoe",
    price: 49.99,
    reviews: [],
  },
  {
    id: "blackshoe",
    description: "Black Shoe",
    price: 99.98,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductbyPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductbyID(productId) {
  return products.find((product) => {
    return product.id === productId;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

module.exports = {
  getAllProducts,
  getProductbyPrice,
  getProductbyID,
  addNewProduct,
};
