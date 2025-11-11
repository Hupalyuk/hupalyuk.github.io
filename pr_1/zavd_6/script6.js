const products = [
  { productId: 1, name: "Ноутбук", price: 25000 },
  { productId: 2, name: "Мишка", price: 500 },
  { productId: 3, name: "Клавіатура", price: 1500 },
  { productId: 4, name: "Монітор", price: 12000 }
];

const purchases = [
  { purchaseId: 1, productId: 1, quantity: 2 },
  { purchaseId: 2, productId: 2, quantity: 5 },
  { purchaseId: 3, productId: 3, quantity: 3 },
  { purchaseId: 4, productId: 1, quantity: 1 },
  { purchaseId: 5, productId: 4, quantity: 4 }
];

function getTotalSales(products, purchases) {
  return purchases.reduce((acc, purchase) => {

    const product = products.find(p => p.productId === purchase.productId);

    if (product) {
      const revenue = product.price * purchase.quantity;

      acc[product.name] = (acc[product.name] || 0) + revenue;
    }

    return acc;
  }, {});
}

const totalSales = getTotalSales(products, purchases);
console.log(totalSales);
