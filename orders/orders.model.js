const orders = [
  {
    date: "25-05-2021",
    subtotal: 150.0,
    items: [
      {
        product: {
          id: "blueshoe",
          description: "Blue Shoe",
          price: 49.99,
        },
        quantity: 1,
      },
      {
        product: {
          id: "blackshoe",
          description: "Black Shoe",
          price: 99.98,
        },
        quantity: 1,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
